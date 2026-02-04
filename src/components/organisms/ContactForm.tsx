import { useEffect } from "react";
import clsx from "clsx";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaRegImage,
  FaComment,
} from "react-icons/fa";
import { useContactFormStore } from "../../store/contact-form";
import Input from "../atoms/form/Input";
import Textarea from "../atoms/form/Textarea";

interface ContactFormProps {
  labels: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    submit: string;
    submitting: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  messages: {
    success: string;
    error: string;
  };
}

export default function ContactForm({
  labels,
  placeholders,
  messages,
}: ContactFormProps) {
  const {
    name,
    email,
    phone,
    subject,
    message,
    setName,
    setEmail,
    setPhone,
    setSubject,
    setMessage,
    errors,
    isLoading,
    status,
    errorMessage,
    submitForm,
    resetForm,
  } = useContactFormStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm();
  };

  // Reset form when successfully submitted
  useEffect(() => {
    if (status === "success") {
      // Optional: could auto-reset here or show a success message that replaces form
    }
  }, [status]);

  if (status === "success") {
    return (
      <div className="flex min-h-[400px] w-full flex-col items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm lg:w-2/3">
        <div className="mb-4 rounded-full bg-green-100 p-4">
          <FaComment className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Message Sent!</h3>
        <p className="mb-6 text-lg text-gray-600">{messages.success}</p>
        <button
          onClick={resetForm}
          className="btn bg-accent inline-block cursor-pointer rounded-lg px-6 py-3 text-center text-sm whitespace-nowrap text-black transition-transform duration-300 hover:scale-[102%]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="my-6 grid w-full grid-cols-1 gap-6 rounded-2xl bg-white p-8 shadow-sm lg:w-2/3 lg:grid-cols-2"
    >
      <div className="col-span-1">
        <Input
          name="name"
          label={labels.name}
          placeholder={placeholders.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
          icon={FaUser}
        />
      </div>

      <div className="col-span-1">
        <Input
          name="email"
          label={labels.email}
          type="email"
          placeholder={placeholders.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          icon={FaEnvelope}
        />
      </div>

      <div className="col-span-1">
        <Input
          name="phone"
          label={labels.phone}
          type="tel"
          placeholder={placeholders.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
          icon={FaPhone}
        />
      </div>

      <div className="col-span-1">
        <Input
          name="subject"
          label={labels.subject}
          placeholder={placeholders.subject}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          error={errors.subject}
          icon={FaRegImage}
        />
      </div>

      <div className="col-span-1 lg:col-span-2">
        <Textarea
          name="message"
          label={labels.message}
          placeholder={placeholders.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          error={errors.message}
          icon={FaComment}
          rows={4}
        />
      </div>

      {status === "error" && (
        <div className="col-span-1 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 lg:col-span-2">
          <p className="font-bold">Error</p>
          <p>{errorMessage || messages.error}</p>
        </div>
      )}

      <div className="col-span-1 lg:col-span-2">
        <button
          type="submit"
          disabled={isLoading}
          className={clsx(
            "btn bg-accent inline-block w-full! cursor-pointer rounded-lg px-6 py-5 text-center text-sm whitespace-nowrap text-black transition-transform duration-300 hover:scale-[102%] md:w-auto",
            isLoading && "cursor-not-allowed opacity-70",
          )}
        >
          {isLoading ? labels.submitting : labels.submit}
        </button>
      </div>
    </form>
  );
}
