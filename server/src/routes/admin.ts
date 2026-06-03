/**
 * Admin routes — Basic Auth protected.
 * Replace with a real auth flow when the project grows.
 */
import { Router, type Request, type Response } from "express";
import { basicAuth } from "../middleware/basic-auth.js";
import {
  listEnquiriesForAdmin,
  updateEnquiryStatus,
} from "./enquiries.js";
import { z } from "zod";
import { logger } from "../logger.js";

export const adminRouter = Router();

const statusUpdateSchema = z.object({
  status: z.enum(["new", "contacted", "closed"]),
});

/* ── GET /api/admin/enquiries — list recent enquiries ─────────── */
adminRouter.get("/enquiries", basicAuth, async (_req: Request, res: Response) => {
  try {
    const rows = await listEnquiriesForAdmin(100);
    res.json({ ok: true, count: rows.length, enquiries: rows });
  } catch (err) {
    logger.error({ err }, "Failed to list enquiries");
    res.status(500).json({ ok: false, error: "Failed to fetch enquiries" });
  }
});

/* ── PATCH /api/admin/enquiries/:id — update status ───────────── */
adminRouter.patch(
  "/enquiries/:id",
  basicAuth,
  async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      res.status(400).json({ ok: false, error: "Invalid id" });
      return;
    }

    const parsed = statusUpdateSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({ ok: false, error: "Invalid status" });
      return;
    }

    try {
      const row = await updateEnquiryStatus(id, parsed.data.status);
      if (!row) {
        res.status(404).json({ ok: false, error: "Enquiry not found" });
        return;
      }
      res.json({ ok: true, enquiry: row });
    } catch (err) {
      logger.error({ err, id }, "Failed to update status");
      res.status(500).json({ ok: false, error: "Update failed" });
    }
  }
);
