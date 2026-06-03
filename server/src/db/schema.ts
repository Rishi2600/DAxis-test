/**
 * Drizzle schema — single public.enquiries table.
 * Mirrors the structure defined in the DAxis PRD §4.2.
 */
import { sql } from "drizzle-orm";
import {
  bigserial,
  pgTable,
  text,
  timestamp,
  index,
} from "drizzle-orm/pg-core";

export const enquiries = pgTable(
  "enquiries",
  {
    id: bigserial("id", { mode: "number" }).primaryKey(),

    // Auto-set by the DB
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .default(sql`now()`),

    // Basic fields — required by the form
    fullName: text("full_name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    message: text("message"),

    // Detailed fields — optional
    companyName: text("company_name"),
    serviceRequired: text("service_required"),
    city: text("city"),

    // Metadata — admin / system
    status: text("status").notNull().default("new"),
    source: text("source").notNull().default("website"),
  },
  (table) => ({
    statusIdx: index("enquiries_status_idx").on(table.status),
    createdAtIdx: index("enquiries_created_at_idx").on(table.createdAt),
  })
);

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
