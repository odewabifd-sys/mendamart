import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";

export default function AddService() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    location: "Nigeria",
    artisan_name: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get logged-in user
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("You must be logged in to add a service.");
      return;
    }

    const { error } = await supabase.from("services").insert([
      {
        name: form.name,
        description: form.description,
        location: form.location,
        artisan_name: form.artisan_name,
        user_id: user.id,
      },
    ]);

    if (error) {
      setMessage("Error: " + error.message);
    } else {
      setMessage("✅ Service added successfully!");
      setForm({ name: "", description: "", location: "Nigeria", artisan_name: "" });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto py-20 px-6 max-w-lg">
        <h1 className="text-3xl font-bold text-teal-600 mb-6">
          Add Your Service
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="artisan_name"
            placeholder="Your Full Name"
            value={form.artisan_name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Service Name (e.g. Plumbing)"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="description"
            placeholder="Service Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg h-28"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location (e.g. Lagos)"
            value={form.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />
          <button className="w-full p-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
            Add Service
          </button>
        </form>
        {message && <p className="mt-4 text-gray-700">{message}</p>}
      </div>
    </Layout>
  );
}
