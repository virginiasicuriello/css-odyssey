import { createClient } from "./server";

export async function getServerProgress() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("challenge_progress")
    .select("challenge_slug, status, completed_at");

  if (error) {
    console.error("Error fetching progress:", error.message);
    return [];
  }

  return data;
}