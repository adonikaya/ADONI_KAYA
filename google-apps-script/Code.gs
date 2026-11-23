/**
 * ADONI KAYA (અડોણી કાયા) — Google Apps Script Analytics Web App
 *
 * SPREADSHEET ID: REPLACE_WITH_YOUR_GOOGLE_SHEETS_SPREADSHEET_ID
 *
 * HOW TO DEPLOY:
 * 1. Create or open your Google Sheet and copy its ID from the URL.
 * 2. Click Extensions > Apps Script.
 * 3. Replace any code with the contents of this file.
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type: "Web app".
 * 6. Execute as: "Me" (your Google account).
 * 7. Who has access: "Anyone".
 * 8. Click "Deploy" and copy the generated Web App URL.
 * 9. Set the URL in your environment:
 *    GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/.../exec"
 *    NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/.../exec"
 *
 * PRIVACY GUARANTEE:
 * No names, no photos, no phone numbers, no addresses, and no personal card content
 * are ever accepted or recorded.
 */

var SPREADSHEET_ID = 'REPLACE_WITH_YOUR_GOOGLE_SHEETS_SPREADSHEET_ID';
var SHEET_NAME = 'Analytics_Log';
var SUMMARY_SHEET_NAME = 'Monthly_Summary';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'No payload' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // If log sheet doesn't exist, create it with standard columns
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Timestamp',
        'Event Type',
        'Anonymous Session ID',
        'Workflow Type',
        'Template ID',
        'Current Step',
        'Device Category',
        'Export Format',
        'Export Status',
        'Error Category'
      ]);
      // Format header row
      sheet.getRange(1, 1, 1, 10).setFontWeight('bold').setBackground('#650D22').setFontColor('#FFFFFF');
      sheet.setFrozenRows(1);
    }

    // Append validated, non-personal event row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.eventType || '',
      data.sessionId || '',
      data.workflowType || '',
      data.templateId || '',
      data.step || '',
      data.deviceCategory || '',
      data.exportFormat || '',
      data.exportStatus || '',
      data.errorCategory || ''
    ]);

    // Ensure Monthly Summary sheet exists with convenient summary metrics
    ensureSummarySheet(ss);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', service: 'ADONI KAYA Analytics Collector' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function ensureSummarySheet(ss) {
  var summary = ss.getSheetByName(SUMMARY_SHEET_NAME);
  if (!summary) {
    summary = ss.insertSheet(SUMMARY_SHEET_NAME, 0); // place first
    summary.appendRow(['ADONI KAYA — Website Usage Summary', '']);
    summary.appendRow(['Metric', 'Formula / Value']);
    summary.appendRow(['Total Events Recorded', '=COUNTA(Analytics_Log!A2:A)']);
    summary.appendRow(['Total Shradhanjali Started', '=COUNTIFS(Analytics_Log!B:B, "workflow_started", Analytics_Log!D:D, "shradhanjali")']);
    summary.appendRow(['Total Besna Started', '=COUNTIFS(Analytics_Log!B:B, "workflow_started", Analytics_Log!D:D, "besna")']);
    summary.appendRow(['Review Pages Opened', '=COUNTIF(Analytics_Log!B:B, "review_opened")']);
    summary.appendRow(['Successful Downloads', '=COUNTIF(Analytics_Log!B:B, "export_success")']);
    summary.appendRow(['Failed Exports', '=COUNTIF(Analytics_Log!B:B, "export_failed")']);
    summary.appendRow(['PNG Exports', '=COUNTIFS(Analytics_Log!B:B, "export_success", Analytics_Log!H:H, "png")']);
    summary.appendRow(['JPG Exports', '=COUNTIFS(Analytics_Log!B:B, "export_success", Analytics_Log!H:H, "jpg")']);
    summary.appendRow(['PDF Exports', '=COUNTIFS(Analytics_Log!B:B, "export_success", Analytics_Log!H:H, "pdf")']);
    summary.appendRow(['Mobile Sessions', '=COUNTIF(Analytics_Log!G:G, "Mobile")']);
    summary.appendRow(['Desktop Sessions', '=COUNTIF(Analytics_Log!G:G, "Desktop")']);

    summary.getRange(1, 1, 1, 2).setFontWeight('bold').setFontSize(14).setBackground('#B58A3A').setFontColor('#FFFFFF');
    summary.getRange(2, 1, 1, 2).setFontWeight('bold').setBackground('#FFF5E5');
    summary.setColumnWidth(1, 260);
    summary.setColumnWidth(2, 200);
  }
}
