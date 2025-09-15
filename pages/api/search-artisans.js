import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { state, town, service } = req.query;

  let query = supabase.from("artisans").select("*");

  if (state) {
    query = query.eq("location_state", state);
  }
  if (town) {
    query = query.eq("location_town", town);
  }
  if (service) {
    query = query.ilike("service_type", `%${service}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Supabase query error:", error);
    return res.status(500).json({ error: "Failed to fetch artisans" });
  }

  res.status(200).json({ artisans: data });
}