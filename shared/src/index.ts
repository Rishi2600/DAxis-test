/**
 * Shared schemas & types used by both client and server.
 * Single source of truth for the enquiry form contract.
 */
import { z } from "zod";

/* ─────────────────────────────────────────────────────────────
 *  Service options — keep in sync with the frontend dropdown
 * ───────────────────────────────────────────────────────────── */
export const SERVICE_OPTIONS = [
  "Engineering Design & Drafting",
  "Geospatial & GIS Mapping",
  "Multi-Disciplinary Engineering",
  "Fabrication & Shop Drawings",
  "Project Management Consultancy (PMC)",
  "Technical Manpower Supply",
  "Other / Not Sure",
] as const;

/* ─────────────────────────────────────────────────────────────
 *  Enquiry status — mirrors the `status` column
 * ───────────────────────────────────────────────────────────── */
export const ENQUIRY_STATUS = ["new", "contacted", "closed"] as const;
export type EnquiryStatus = (typeof ENQUIRY_STATUS)[number];

/* ─────────────────────────────────────────────────────────────
 *  Validation schema — the form payload
 *  Used by: client (React Hook Form + zodResolver)
 *           server (Express route validator)
 * ───────────────────────────────────────────────────────────── */
export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address")
    .max(255),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),

  companyName: z
    .string()
    .trim()
    .max(150, "Company name is too long")
    .optional()
    .or(z.literal(""))
    .transform((v) => (v ? v : null)),

  serviceRequired: z
    .enum(SERVICE_OPTIONS)
    .optional()
    .or(z.literal(""))
    .transform((v) => (v ? v : null)),

  city: z
    .string()
    .trim()
    .max(80, "City name is too long")
    .optional()
    .or(z.literal(""))
    .transform((v) => (v ? v : null)),

  message: z
    .string()
    .trim()
    .max(500, "Message must be 500 characters or less")
    .nullable()
    .optional()
    .or(z.literal(""))
    .transform((v) => (v ? v : null)),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

/* ─────────────────────────────────────────────────────────────
 *  API response shapes
 * ───────────────────────────────────────────────────────────── */
export const enquiryResponseSchema = z.object({
  ok: z.literal(true),
  id: z.number().int().positive(),
  receivedAt: z.string().datetime(),
});

export type EnquiryResponse = z.infer<typeof enquiryResponseSchema>;

export const errorResponseSchema = z.object({
  ok: z.literal(false),
  error: z.string(),
  fieldErrors: z.record(z.string(), z.array(z.string())).optional(),
});

export type ErrorResponse = z.infer<typeof errorResponseSchema>;
