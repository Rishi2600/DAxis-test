/**
 * HTTP Basic Auth — fine for a single-admin internal tool.
 * Replace with proper auth (sessions, JWT) when the project grows.
 */
import type { Request, Response, NextFunction } from "express";
import { env } from "../env.js";

export function basicAuth(req: Request, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header?.startsWith("Basic ")) {
    res.setHeader("WWW-Authenticate", 'Basic realm="DAxis Admin"');
    res.status(401).json({ ok: false, error: "Authentication required" });
    return;
  }

  const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
  const [user, pass] = decoded.split(":");

  const adminUser = process.env.ADMIN_USER ?? "admin";
  const adminPass = process.env.ADMIN_PASS ?? (env.RESEND_API_KEY ?? '').slice(0, 12);

  if (user === adminUser && pass === adminPass) {
    next();
    return;
  }

  res.setHeader("WWW-Authenticate", 'Basic realm="DAxis Admin"');
  res.status(401).json({ ok: false, error: "Invalid credentials" });
}
