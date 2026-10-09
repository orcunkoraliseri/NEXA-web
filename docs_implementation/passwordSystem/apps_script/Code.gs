/**
 * NEXA-web User Verification: Apps Script bound to the sheet of the same name.
 * Adapted from Ahmed's URDM doPost (resources/ pptx). Plan section 4.3.
 *
 * Sheet columns (row 1 is the header):
 *   A Email | B Password | C DeviceID | D Status | E LastLogin | F Notes
 *
 * Deploy: Deploy > New deployment > Web app, Execute as "Me" (lab account),
 * Who has access "Anyone". Put the /exec URL in AUTH_URL in js/auth.js.
 * After editing this code, use Manage deployments > Edit > New version so the
 * /exec URL stays the same.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var data = JSON.parse(e.postData.contents);
    var email = String(data.email || '').trim().toLowerCase();
    var password = String(data.password || '').trim();
    var deviceId = String(data.deviceId || '').trim();

    if (!email || !password || !deviceId) {
      return reply_('error', 'Enter both your email and your password.');
    }

    lock.waitLock(10000);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    var rows = sheet.getDataRange().getValues();

    for (var i = 1; i < rows.length; i++) {
      if (String(rows[i][0]).trim().toLowerCase() !== email) continue;

      var rowPassword = String(rows[i][1]).trim();
      var rowDevice = String(rows[i][2]).trim();
      var rowStatus = String(rows[i][3]).trim().toLowerCase();

      if (rowPassword !== password) {
        return reply_('error', 'Invalid email or password.');
      }
      if (rowStatus !== 'active') {
        return reply_('error', 'This account is not active. Contact the Resilient Habitat Lab.');
      }
      // DeviceID * marks the shared reviewer link row: any browser may use it.
      if (rowDevice && rowDevice !== '*' && rowDevice !== deviceId) {
        return reply_('error', 'This account is already registered to a different browser. Reply to your invitation email to have it reset.');
      }

      // Empty DeviceID binds this browser on first sign-in, as URDM does with the HWID.
      if (!rowDevice) sheet.getRange(i + 1, 3).setValue(deviceId);
      sheet.getRange(i + 1, 5).setValue(new Date());
      return reply_('success');
    }

    return reply_('error', 'This email has no NEXA-web access yet. Request access from the RHlab Tools page.');

  } catch (err) {
    return reply_('error', 'Server error. Try again in a moment.');
  } finally {
    lock.releaseLock();
  }
}

function reply_(status, message) {
  var body = { status: status };
  if (message) body.message = message;
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
