import { useState } from "react";

// A basic, self-contained Layout component to resolve the import error.
// In a real application, you would put this in a shared components folder.
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send to Supabase / email service
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="container mx-auto py-20 px-6 max-w-lg">
        <h1 className="text-3xl font-bold text-teal-600 mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full p-3 border rounded-lg h-32"
          />
          <button className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Send Message
          </button>
        </form>
        {sent && <p className="mt-4 text-green-600">Message sent successfully!</p>}
      </div>
    </Layout>
  );
}
