/**
 * Generic Zod validator middleware for Express.
 * Parses body, query, or params — whichever you pass.
 */
import type { Request, Response, NextFunction } from "express";
import { ZodError, type ZodSchema } from "zod";

type Source = "body" | "query" | "params";

export function validate<T>(schema: ZodSchema<T>, source: Source = "body") {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req[source]);
    if (!result.success) {
      const fieldErrors = formatZodError(result.error);
      res.status(400).json({
        ok: false,
        error: "Validation failed",
        fieldErrors,
      });
      return;
    }
    // Replace the request data with the parsed (and transformed) version
    // so handlers see clean, typed values.
    (req as Request & { valid: T }).valid = result.data;
    next();
  };
}

function formatZodError(error: ZodError): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "_";
    if (!out[key]) out[key] = [];
    out[key].push(issue.message);
  }
  return out;
}

/** Helper to read validated body in route handlers. */
export function validBody<T>(req: Request): T {
  return (req as Request & { valid: T }).valid;
}
