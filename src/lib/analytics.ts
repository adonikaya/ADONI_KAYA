/**
 * Client-side anonymous analytics tracker for ADONI KAYA (અડોણી કાયા)
 *
 * PRIVACY GUARANTEE:
 * Absolutely NO personal data (no names, no photos, no phone numbers,
 * no villages/addresses, no message texts) is ever collected or transmitted.
 * Only coarse operational events (workflow step, format selected, anonymous session id)
 * are recorded for website usage analytics.
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
  let sid = localStorage.getItem(KEY);
  if (!sid) {
    sid = 'sid_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now().toString(36);
    localStorage.setItem(KEY, sid);
  }
  return sid;
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
 * Tracks an anonymous usage event.
 * If NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL is provided, sends to Google Apps Script.
 * Also attempts local /api/analytics if running in server runtime.
 * Never throws or interrupts user actions on failure.
 */
export async function trackEvent(payload: AnalyticsPayload): Promise<void> {
  if (typeof window === 'undefined') return;

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

  const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

  // 1. If Google Apps Script Web App URL is configured in client env
  if (scriptUrl) {
    try {
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors', // allows cross-origin submission to Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(record),
      });
      return;
    } catch (e) {
      // Graceful fallback - analytics failure never impacts the user
      console.warn('Analytics webhook dispatch error (safe fallback)', e);
    }
  }

  // 2. If running under server runtime with /api/analytics available
  try {
    const apiEndpoint = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/api/analytics`;
    await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });
  } catch (e) {
    // Gracefully ignore network/endpoint unavailability (e.g. on static GitHub Pages)
  }
}
