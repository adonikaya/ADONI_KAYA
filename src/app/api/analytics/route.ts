import { NextRequest, NextResponse } from 'next/server';

/**
 * Server-side Analytics Proxy for ADONI KAYA
 *
 * Forwards validated, sanitized anonymous usage events to Google Sheets / Google Apps Script.
 * Never stores or receives identifying personal information.
 */

const ALLOWED_EVENT_TYPES = [
  'workflow_started',
  'template_selected',
  'details_completed',
  'quote_completed',
  'family_completed',
  'review_opened',
  'export_attempted',
  'export_success',
  'export_failed',
];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body || !ALLOWED_EVENT_TYPES.includes(body.eventType)) {
      return NextResponse.json({ error: 'Invalid event type' }, { status: 400 });
    }

    // Sanitize and whitelist strictly non-personal fields
    const sanitizedRecord = {
      timestamp: body.timestamp || new Date().toISOString(),
      eventType: String(body.eventType).slice(0, 50),
      sessionId: String(body.sessionId || '').slice(0, 50),
      workflowType: String(body.workflowType || '').slice(0, 20),
      templateId: String(body.templateId || '').slice(0, 50),
      step: String(body.step || '').slice(0, 10),
      deviceCategory: String(body.deviceCategory || '').slice(0, 20),
      exportFormat: String(body.exportFormat || '').slice(0, 10),
      exportStatus: String(body.exportStatus || '').slice(0, 20),
      errorCategory: String(body.errorCategory || '').slice(0, 50),
    };

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL || process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    if (scriptUrl) {
      await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedRecord),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    // Analytics failure should never break responses
    return NextResponse.json({ success: false }, { status: 200 });
  }
}
