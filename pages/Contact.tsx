import React, { useState, useRef } from "react";
import KanjiCaptcha, { KanjiCaptchaRef } from "../components/KanjiCaptcha";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const captchaRef = useRef<KanjiCaptchaRef>(null);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.length < 2 ? "Name must be at least 2 characters." : "";
      case "email":
        return !/\S+@\S+\.\S+/.test(value)
          ? "Please enter a valid email address."
          : "";
      case "message":
        return value.length < 10
          ? "Message must be at least 10 characters."
          : "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid =
    !Object.values(errors).some(Boolean) &&
    Object.values(formData).every((field) => field.trim() !== "") &&
    isCaptchaVerified;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) return;

    setFormStatus("submitting");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const formBody = new URLSearchParams(data as any).toString();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody,
    })
      .then(() => {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        captchaRef.current?.reset();
      })
      .catch((error) => {
        setFormStatus("error");
        console.error("Form submission error:", error);
      });
  };

  return (
    <section aria-label="Encrypted Line" className="max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-center text-[var(--accent-color)]">
        &gt; ENCRYPTED_LINE
      </h2>
      <p className="mt-4 text-center text-[var(--text-color)]/80">
        Connection is unstable. Authenticate to establish a secure channel.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="mt-12 space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-mono tracking-wider mb-2"
          >
            CALLSIGN [NAME]
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            minLength={2}
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-transparent p-3 font-mono border-2 ${
              errors.name ? "border-red-500" : "border-[var(--border-color)]"
            } focus:border-[var(--accent-color)] focus:outline-none transition-colors`}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1 font-mono">{errors.name}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-mono tracking-wider mb-2"
          >
            ENCRYPTED KEY [EMAIL]
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-transparent p-3 font-mono border-2 ${
              errors.email ? "border-red-500" : "border-[var(--border-color)]"
            } focus:border-[var(--accent-color)] focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1 font-mono">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-mono tracking-wider mb-2"
          >
            TRANSMISSION [MESSAGE]
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full bg-transparent p-3 font-mono border-2 ${
              errors.message ? "border-red-500" : "border-[var(--border-color)]"
            } focus:border-[var(--accent-color)] focus:outline-none transition-colors`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1 font-mono">
              {errors.message}
            </p>
          )}
        </div>

        <KanjiCaptcha ref={captchaRef} onVerified={setIsCaptchaVerified} />

        {formStatus === "success" && (
          <p className="font-mono text-[var(--terminal-green)] p-3 border border-[var(--terminal-green)] bg-[var(--terminal-green)]/10">
            &gt; TRANSMISSION SUCCESSFUL. STAND BY FOR RESPONSE.
          </p>
        )}
        {formStatus === "error" && (
          <p className="font-mono text-red-500 p-3 border border-red-500 bg-red-500/10">
            &gt; ERROR: CONNECTION INTERRUPTED. PLEASE RETRY.
          </p>
        )}

        <button
          type="submit"
          disabled={!isFormValid || formStatus === "submitting"}
          className="w-full font-mono px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-dark)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[var(--accent-color)]"
        >
          {formStatus === "submitting"
            ? "TRANSMITTING..."
            : "> SEND TRANSMISSION"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
