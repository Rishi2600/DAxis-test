/**
 * POST /api/enquiries — public form submission endpoint.
 * Validates → inserts into Postgres → fires admin email.
 */
import { Router, type Request, type Response } from "express";
import { eq, desc } from "drizzle-orm";
import { db } from "../db/index.js";
import { enquiries } from "../db/schema.js";
import { enquirySchema, type EnquiryInput } from "@daxis/shared";
import { validate, validBody } from "../middleware/validate.js";
import { sendEnquiryNotification } from "../lib/email.js";
import { logger } from "../logger.js";

export const enquiriesRouter = Router();

/* ── POST /api/enquiries — public submission ─────────────────── */
enquiriesRouter.post(
  "/",
  validate(enquirySchema, "body"),
  async (req: Request, res: Response) => {
    const input = validBody<EnquiryInput>(req);

    try {
      const [row] = await db
        .insert(enquiries)
        .values({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          companyName: input.companyName,
          serviceRequired: input.serviceRequired,
          city: input.city,
          message: input.message,
        })
        .returning();

      if (!row) {
        res.status(500).json({ ok: false, error: "Insert returned no row" });
        return;
      }

      logger.info({ enquiryId: row.id, email: row.email }, "Enquiry stored");

      // Fire-and-forget — never block the user response on email
      void sendEnquiryNotification(row).catch((err) =>
        logger.error({ err, enquiryId: row.id }, "Email send crashed")
      );

      res.status(201).json({
        ok: true,
        id: row.id,
        receivedAt: row.createdAt?.toISOString() ?? new Date().toISOString(),
      });
    } catch (err) {
      logger.error({ err }, "Failed to insert enquiry");
      res.status(500).json({
        ok: false,
        error: "Something went wrong. Please call us directly at +91-9910461833.",
      });
    }
  }
);

/* ── GET /api/enquiries — protected admin list ──────────────────
   Mounted separately in index.ts with adminAuth middleware.
   Keeping the export here for reference; the actual admin routes
   live in admin.ts so they don't share the public router. */
export async function listEnquiriesForAdmin(limit = 50) {
  return db
    .select()
    .from(enquiries)
    .orderBy(desc(enquiries.createdAt))
    .limit(limit);
}

export async function updateEnquiryStatus(id: number, status: "new" | "contacted" | "closed") {
  const [row] = await db
    .update(enquiries)
    .set({ status })
    .where(eq(enquiries.id, id))
    .returning();
  return row;
}
