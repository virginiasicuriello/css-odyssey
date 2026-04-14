import AppHeader from "../../components/app-header";
import PageShell from "../../components/page-shell";
import AnimatedDashboard from "../../components/animated-dashboard";
import { paths, challenges } from "../../lib/challenges";
import { getServerProgress } from "../../lib/supabase/server-progress";

export default async function DashboardPage() {
  const progress = await getServerProgress();

  const completedSlugs = progress.map((item) => item.challenge_slug);

  return (
    <>
      <AppHeader />
      <PageShell>
        <AnimatedDashboard
          paths={paths}
          challenges={challenges}
          completedSlugs={completedSlugs}
        />
      </PageShell>
    </>
  );
}