/**
 * Optional client-side usage analytics. Card details and photographs are never included.
 */

export type AnalyticsEventType =
  | 'workflow_started'
  | 'template_selected'
  | 'details_completed'
  | 'quote_completed'
  | 'family_completed'
  | 'review_opened'
  | 'export_attempted'
  | 'export_success'
  | 'export_failed';

export interface AnalyticsPayload {
  eventType: AnalyticsEventType;
  workflowType?: 'shradhanjali' | 'besna';
  templateId?: string;
  step?: number;
  format?: 'png' | 'jpg' | 'pdf' | string;
  status?: 'success' | 'failed';
  errorCategory?: string;
}

// Generate or retrieve persistent anonymous session ID
function getAnonymousSessionId(): string {
  if (typeof window === 'undefined') return '';
  const KEY = 'adoni_kaya_anon_sid';
  const createId = () =>
    'sid_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now().toString(36);

  try {
    const storedId = window.localStorage.getItem(KEY);
    if (storedId) return storedId;

    const newId = createId();
    window.localStorage.setItem(KEY, newId);
    return newId;
  } catch {
    return createId();
  }
}

// Detect coarse device category without tracking user agent details
function getDeviceCategory(): 'Mobile' | 'Tablet' | 'Desktop' {
  if (typeof window === 'undefined') return 'Desktop';
  const width = window.innerWidth;
  if (width < 768) return 'Mobile';
  if (width < 1024) return 'Tablet';
  return 'Desktop';
}

/**
 * Sends limited usage events only when a Google Apps Script endpoint is configured.
 */
export async function trackEvent(payload: AnalyticsPayload): Promise<void> {
  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;
  if (typeof window === 'undefined' || !scriptUrl) return;

  const sessionId = getAnonymousSessionId();
  const device = getDeviceCategory();
  const timestamp = new Date().toISOString();

  const record = {
    timestamp,
    eventType: payload.eventType,
    sessionId,
    workflowType: payload.workflowType || '',
    templateId: payload.templateId || '',
    step: payload.step || '',
    deviceCategory: device,
    exportFormat: payload.format || '',
    exportStatus: payload.status || '',
    errorCategory: payload.errorCategory || '',
  };

  try {
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      },
      body: JSON.stringify(record),
    });
  } catch (e) {
    console.warn('Analytics webhook dispatch failed', e);
  }
}
