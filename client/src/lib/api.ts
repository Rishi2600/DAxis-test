/**
 * Tiny typed fetch wrapper for the enquiry endpoint.
 * Returns parsed JSON or throws a typed error.
 */
import type { EnquiryResponse, ErrorResponse } from "@daxis/shared";

export class ApiError extends Error {
  fieldErrors?: Record<string, string[]>;
  constructor(message: string, fieldErrors?: Record<string, string[]>) {
    super(message);
    this.name = "ApiError";
    this.fieldErrors = fieldErrors;
  }
}

export async function submitEnquiry(payload: unknown): Promise<EnquiryResponse> {
  const res = await fetch("/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as EnquiryResponse | ErrorResponse;

  if (!res.ok || data.ok === false) {
    const err = data as ErrorResponse;
    throw new ApiError(err.error ?? "Submission failed", err.fieldErrors);
  }

  return data as EnquiryResponse;
}
