"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceCategory: "Project Management",
    description: "",
    preferredContact: "Email",
    privacyConsent: false,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!formData.privacyConsent) {
      setStatus("error");
      setErrorMessage("Please agree to the privacy policy to proceed.");
      return;
    }

    if (formData.honeypot) {
      setStatus("error");
      setErrorMessage("Invalid submission.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to deliver your request.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err.message || "An error occurred while delivering your request. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <Card variant="navy" className="text-center">
        <div role="region" aria-live="polite" className="mx-auto max-w-md space-y-4 py-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy">
            <Icon name="check" size={24} />
          </div>
          <h2 className="type-h2 text-navy">Request Received</h2>
          <p className="type-body text-charcoal">
            Thank you for contacting LAFUMIPP, LLC. Your consultation request has been confirmed.
          </p>
          <div className="pt-2">
            <Button
              type="button"
              variant="primary"
              icon={null}
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  serviceCategory: "Project Management",
                  description: "",
                  preferredContact: "Email",
                  privacyConsent: false,
                  honeypot: "",
                });
              }}
            >
              Send Another Request
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  const inputClass =
    "w-full rounded-[12px] border border-[#D1D5DB] bg-white px-4 py-3 type-body text-charcoal focus:border-navy focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[12px] bg-[#F3F4F6] p-6 lg:p-8 space-y-6"
    >
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="companyWebsite">Leave this field blank</label>
        <input
          type="text"
          id="companyWebsite"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-[12px] border border-red-300 bg-red-50 p-4 type-sm text-red-900"
        >
          {errorMessage}
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block type-sm font-semibold text-navy">
            Name <span className="text-red-700">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block type-sm font-semibold text-navy">
            Email <span className="text-red-700">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block type-sm font-semibold text-navy">
            Phone (optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="serviceCategory" className="mb-2 block type-sm font-semibold text-navy">
            Service Category <span className="text-red-700">*</span>
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="Project Management">Project Management</option>
            <option value="Facilities & Construction Consulting">
              Facilities & Construction Consulting
            </option>
            {/* <option value="Bookkeeping & Tax Preparation">Bookkeeping & Tax Preparation</option> */}
            <option value="Grow with Adejoke">Grow with Adejoke</option>
            <option value="LAFUMIPP Home Services">LAFUMIPP Home Services</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block type-sm font-semibold text-navy">
          Brief Project or Service Description <span className="text-red-700">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Briefly describe what you need help with"
          className={inputClass}
        />
      </div>

      <div>
        <span className="mb-2 block type-sm font-semibold text-navy">
          Preferred Contact Method <span className="text-red-700">*</span>
        </span>
        <div className="flex items-center gap-6">
          <label className="inline-flex cursor-pointer items-center gap-2 type-sm text-charcoal">
            <input
              type="radio"
              name="preferredContact"
              value="Email"
              checked={formData.preferredContact === "Email"}
              onChange={handleChange}
              className="accent-navy"
            />
            <span>Email</span>
          </label>
          <label className="inline-flex cursor-pointer items-center gap-2 type-sm text-charcoal">
            <input
              type="radio"
              name="preferredContact"
              value="Phone"
              checked={formData.preferredContact === "Phone"}
              onChange={handleChange}
              className="accent-navy"
            />
            <span>Phone</span>
          </label>
        </div>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="privacyConsent"
            required
            checked={formData.privacyConsent}
            onChange={handleChange}
            className="mt-1 accent-navy"
          />
          <span className="type-sm text-charcoal">
            I agree to the{" "}
            <Link href="/privacy" className="font-semibold text-navy underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/disclaimers" className="font-semibold text-navy underline">
              Service Disclaimers
            </Link>
            .
          </span>
        </label>
      </div>

      <div>
        <Button type="submit" disabled={status === "loading"} variant="primary">
          {status === "loading" ? "Sending..." : "Request a Consultation"}
        </Button>
      </div>
    </form>
  );
}
