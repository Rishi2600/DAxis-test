/**
 * Resend email client — sends the admin notification.
 * Failures are logged but never block the user response;
 * the enquiry is already safely in the database.
 *
 * If RESEND_API_KEY is not set, this becomes a no-op (logs a
 * warning). Lets you test the DB insert flow without an
 * email account configured.
 */
import { Resend } from "resend";
import { env, emailEnabled } from "../env.js";
import { logger } from "../logger.js";
import type { Enquiry } from "../db/schema.js";

const resend = emailEnabled ? new Resend(env.RESEND_API_KEY!) : null;

function escape(value: string | null | undefined): string {
  // Tiny HTML escaper for the email body — only the values we control go in.
  return String(value ?? "—")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailBody(record: Enquiry): string {
  return `
    <h2 style="font-family:Outfit,Arial,sans-serif;color:#0A1628">
      New Enquiry — DAxis Engineering Consultancy
    </h2>
    <table style="border-collapse:collapse;width:100%;font-family:Outfit,Arial,sans-serif;font-size:14px">
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC;width:160px"><b>Name</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE">${escape(record.fullName)}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC"><b>Email</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE">
          <a href="mailto:${escape(record.email)}">${escape(record.email)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC"><b>Phone</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE">
          <a href="tel:${escape(record.phone)}">${escape(record.phone)}</a>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC"><b>Company</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE">${escape(record.companyName)}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC"><b>Service Required</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE">${escape(record.serviceRequired)}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC"><b>City</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE">${escape(record.city)}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC"><b>Message</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;white-space:pre-wrap">${escape(record.message)}</td>
      </tr>
      <tr>
        <td style="padding:8px 12px;border:1px solid #E4E8EE;background:#F8FAFC"><b>Received At</b></td>
        <td style="padding:8px 12px;border:1px solid #E4E8EE">${escape(record.createdAt?.toISOString())}</td>
      </tr>
    </table>
    <p style="font-family:Outfit,Arial,sans-serif;color:#4A5468;margin-top:16px">
      Login to your admin dashboard to view and update this enquiry.
    </p>
  `;
}

/**
 * Sends the notification. Returns true on success, false on failure.
 * Never throws — caller treats email as best-effort.
 */
export async function sendEnquiryNotification(record: Enquiry): Promise<boolean> {
  if (!resend) {
    logger.warn(
      { enquiryId: record.id },
      "RESEND_API_KEY not set — skipping email (DB insert still succeeded)"
    );
    return false;
  }

  try {
    const { error } = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: [env.ADMIN_EMAIL],
      subject: `New Enquiry from ${record.fullName} — DAxis Website`,
      html: buildEmailBody(record),
      replyTo: record.email,
    });

    if (error) {
      logger.error({ enquiryId: record.id, error }, "Resend returned an error");
      return false;
    }

    logger.info({ enquiryId: record.id }, "Admin notification sent");
    return true;
  } catch (err) {
    logger.error({ enquiryId: record.id, err }, "Failed to send admin notification");
    return false;
  }
}
