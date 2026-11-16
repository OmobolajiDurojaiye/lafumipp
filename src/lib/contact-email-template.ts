export interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  serviceCategory: string;
  preferredContact: string;
  description: string;
  submittedAt: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Builds a pure HTML + inline CSS email matching the LAFUMIPP, LLC brand palette.
 */
export function buildContactEmailHtml(data: ContactEmailData): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || "Not provided");
  const safeCategory = escapeHtml(data.serviceCategory);
  const safePreferred = escapeHtml(data.preferredContact);
  const safeDescription = escapeHtml(data.description).replace(/\n/g, "<br />");
  const safeTimestamp = escapeHtml(data.submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Consultation Request — LAFUMIPP, LLC</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#263238;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f3f4f6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dfe3e8;">
            <!-- Header -->
            <tr>
              <td style="background-color:#142744;padding:28px 32px;border-bottom:4px solid #d9b765;">
                <p style="margin:0 0 6px 0;font-size:12px;font-weight:600;letter-spacing:1.4px;text-transform:uppercase;color:#d9b765;">
                  LAFUMIPP, LLC
                </p>
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:600;line-height:1.25;color:#ffffff;">
                  New Consultation Request
                </h1>
              </td>
            </tr>

            <!-- Intro -->
            <tr>
              <td style="padding:28px 32px 16px 32px;">
                <p style="margin:0;font-size:15px;line-height:1.6;color:#263238;">
                  You received a new inquiry from the website contact form. You can reply directly to this email to respond to <strong>${safeName}</strong>.
                </p>
              </td>
            </tr>

            <!-- Details Card -->
            <tr>
              <td style="padding:0 32px 24px 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f8f9fb;border:1px solid #e8edf5;border-radius:8px;">
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;width:38%;font-size:13px;font-weight:600;color:#142744;">
                      Name
                    </td>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:14px;color:#263238;">
                      ${safeName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:13px;font-weight:600;color:#142744;">
                      Email
                    </td>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:14px;color:#263238;">
                      <a href="mailto:${safeEmail}" style="color:#142744;text-decoration:underline;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:13px;font-weight:600;color:#142744;">
                      Phone
                    </td>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:14px;color:#263238;">
                      ${safePhone}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:13px;font-weight:600;color:#142744;">
                      Service Division
                    </td>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:14px;color:#263238;">
                      <span style="display:inline-block;background-color:#f6edd6;color:#142744;font-weight:600;font-size:12px;padding:4px 10px;border-radius:999px;">
                        ${safeCategory}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:13px;font-weight:600;color:#142744;">
                      Preferred Contact
                    </td>
                    <td style="padding:14px 20px;border-bottom:1px solid #e8edf5;font-size:14px;color:#263238;">
                      ${safePreferred}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:14px 20px;font-size:13px;font-weight:600;color:#142744;">
                      Submitted
                    </td>
                    <td style="padding:14px 20px;font-size:13px;color:#4b5563;">
                      ${safeTimestamp}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message Body -->
            <tr>
              <td style="padding:0 32px 28px 32px;">
                <p style="margin:0 0 8px 0;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.6px;color:#142744;">
                  Project / Request Description
                </p>
                <div style="background-color:#ffffff;border:1px solid #dfe3e8;border-left:4px solid #142744;border-radius:6px;padding:16px 18px;font-size:14px;line-height:1.65;color:#263238;">
                  ${safeDescription}
                </div>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#e8edf5;padding:18px 32px;border-top:1px solid #ced9ea;">
                <p style="margin:0;font-size:12px;line-height:1.5;color:#142744;">
                  <strong>LAFUMIPP, LLC</strong> &middot; Maryland, United States
                </p>
                <p style="margin:4px 0 0 0;font-size:12px;line-height:1.5;color:#4b5563;">
                  Practical Solutions. Professional Excellence. Measurable Results.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
