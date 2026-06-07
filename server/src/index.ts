/**
 * DAxis API server entrypoint.
 * Express + Drizzle + Resend. Single 1-table backend.
 */
import express, { type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import { env } from "./env.js";
import { logger } from "./logger.js";
import { enquiriesRouter } from "./routes/enquiries.js";
import { adminRouter } from "./routes/admin.js";
import { emailEnabled } from "./env.js";

const app = express();

/* ── Security & parsing middleware ──────────────────────────── */
app.use(helmet());
app.use(
  cors
    ({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json({ limit: "16kb" })); // Tight limit — form payload is tiny

/* ── Public form rate limit (anti-spam) ──────────────────────── */
const formLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    ok: false,
    error: "Too many submissions. Please try again in a few minutes.",
  },
});

/* ── Health probe (used by Render / Railway / etc.) ──────────── */
app.get("/health", (_req: Request, res: Response) => {
  res.json({ ok: true, uptime: process.uptime(), env: env.NODE_ENV });
});

/* ── Routes ──────────────────────────────────────────────────── */
app.use("/api/enquiries", formLimiter, enquiriesRouter);
app.use("/api/admin", adminRouter);

/* ── 404 + error handlers ───────────────────────────────────── */
app.use((_req: Request, res: Response) => {
  res.status(404).json({ ok: false, error: "Not found" });
});

app.use((err: Error, _req: Request, res: Response, _next: express.NextFunction) => {
  logger.error({ err }, "Unhandled error");
  res.status(500).json({ ok: false, error: "Internal server error" });
});

/* ── Start ───────────────────────────────────────────────────── */
app.listen(env.PORT, () => {
  logger.info(
    {
      port: env.PORT,
      env: env.NODE_ENV,
      cors: env.CORS_ORIGIN,
      email: emailEnabled ? "ON" : "OFF (no RESEND_API_KEY)",
    },
    "🚀 DAxis API listening"
  );
});
