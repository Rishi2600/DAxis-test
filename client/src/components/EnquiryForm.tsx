/**
 * 7-field enquiry form — RHF + Zod, hitting POST /api/enquiries.
 * Mirrors PRD §6 form spec.
 */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  enquirySchema,
  SERVICE_OPTIONS,
  type EnquiryInput,
} from "@daxis/shared";
import { submitEnquiry, ApiError } from "../lib/api";
import "./EnquiryForm.css";

type FormStatus = "idle" | "loading" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryInput>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      serviceRequired: "" as EnquiryInput["serviceRequired"],
      city: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus("loading");
    setServerMessage("");
    try {
      await submitEnquiry(data);
      setStatus("success");
      setServerMessage("Thank you! We'll get back to you within 24 hours.");
      reset();
    } catch (err) {
      setStatus("error");
      if (err instanceof ApiError) {
        setServerMessage(
          err.fieldErrors
            ? "Please check the highlighted fields and try again."
            : err.message
        );
      } else {
        setServerMessage(
          "Something went wrong. Please call us directly at +91-9910461833."
        );
      }
    }
  });

  return (
    <section className="enquiry" id="contact">
      <div className="enquiry__head">
        <span className="eyebrow">Get in touch</span>
        <h2>Send an Enquiry</h2>
        <p>Tell us about your project. We respond within 24 hours.</p>
      </div>

      <form className="enquiry__form" onSubmit={onSubmit} noValidate>
        <Field
          label="Full Name"
          required
          error={errors.fullName?.message}
        >
          <input
            type="text"
            autoComplete="name"
            placeholder="Sunil Sharma"
            {...register("fullName")}
          />
        </Field>

        <div className="row">
          <Field label="Email" required error={errors.email?.message}>
            <input
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              {...register("email")}
            />
          </Field>

          <Field label="Phone" required error={errors.phone?.message}>
            <input
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              placeholder="9910461833"
              {...register("phone")}
            />
          </Field>
        </div>

        <div className="row">
          <Field label="Company Name" error={errors.companyName?.message}>
            <input
              type="text"
              autoComplete="organization"
              placeholder="Acme Engineering Pvt Ltd"
              {...register("companyName")}
            />
          </Field>

          <Field label="City" error={errors.city?.message}>
            <input
              type="text"
              autoComplete="address-level2"
              placeholder="New Delhi"
              {...register("city")}
            />
          </Field>
        </div>

        <Field label="Service Required" error={errors.serviceRequired?.message}>
          <select
            defaultValue=""
            {...register("serviceRequired")}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Message / Requirements"
          error={errors.message?.message}
        >
          <textarea
            rows={4}
            maxLength={500}
            placeholder="Briefly describe your project, scope, timeline…"
            {...register("message")}
          />
        </Field>

        {serverMessage && (
          <div className={`banner banner--${status}`} role="alert">
            {serverMessage}
          </div>
        )}

        <button
          type="submit"
          className="submit"
          disabled={isSubmitting || status === "loading"}
        >
          {status === "loading" ? "Sending…" : "Send Enquiry"}
        </button>
      </form>
    </section>
  );
}

/* ── Field wrapper ───────────────────────────────────────────── */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`field ${error ? "field--error" : ""}`}>
      <span className="field__label">
        {label}
        {required && <span className="req"> *</span>}
      </span>
      {children}
      {error && <span className="field__error">{error}</span>}
    </label>
  );
}
