import "dotenv/config";
import { z } from "zod";

/**
 * Validate environment variables at startup.
 * Fails fast if anything required is missing — better than
 * crashing mid-request.
 *
 * Note: RESEND_API_KEY is optional. If absent, the email
 * function becomes a no-op (logs a warning) so the rest of
 * the app keeps working — useful for local DB-only testing.
 */
const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().int().positive().default(4000),

  DATABASE_URL: z.string().url().startsWith("postgres"),

  RESEND_API_KEY: z.string().optional(),
  ADMIN_EMAIL: z.string().email().default("daxis.engg@gmail.com"),
  EMAIL_FROM: z.string().default("DAxis Website <onboarding@resend.dev>"),

  CORS_ORIGIN: z.string().url().default("http://localhost:5173"),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(15 * 60 * 1000),
  RATE_LIMIT_MAX: z.coerce.number().int().positive().default(5),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error("❌ Invalid environment variables:");
  console.error(parsed.error.flatten().fieldErrors);
  process.exit(1);
}

export const env = parsed.data;
export const emailEnabled = Boolean(env.RESEND_API_KEY && env.RESEND_API_KEY.length > 0);
