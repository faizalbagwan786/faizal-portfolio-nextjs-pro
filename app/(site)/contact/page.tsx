import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="max-w-xl space-y-6" id="contact">
      <h1 className="text-3xl font-semibold">Let’s build something reliable</h1>
      <p>Have a role or project? I can help with CI/CD, Kubernetes, Linux administration, and automation. Drop a message and I’ll reply soon.</p>
      <ContactForm />
    </div>
  );
}
