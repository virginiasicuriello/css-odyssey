import { createClient } from "./client";

export async function getProgress() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("challenge_progress")
    .select("challenge_slug, status, completed_at");

  if (error) {
    console.error("Error fetching progress:", error.message);
    return [];
  }

  return data;
}

export async function saveProgress(challengeSlug: string) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Not logged in" };
  }

  const { error } = await supabase.from("challenge_progress").upsert(
    {
      user_id: user.id,
      challenge_slug: challengeSlug,
      status: "completed",
      completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      onConflict: "user_id,challenge_slug",
    }
  );

  if (error) {
    console.error("Error saving progress:", error.message);
    return { error: error.message };
  }

  return { success: true };
}