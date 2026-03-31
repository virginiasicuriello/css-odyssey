export type PathItem = {
    slug: string;
    title: string;
    description: string;
  };
  
  export type ChallengeItem = {
    slug: string;
    title: string;
    description: string;
    pathSlug: string;
    difficulty: "easy" | "medium" | "hard";
  };
  
  export const paths: PathItem[] = [
    {
      slug: "flexbox",
      title: "Flexbox",
      description: "Train alignment, spacing, and layout flow.",
    },
    {
      slug: "grid",
      title: "Grid",
      description: "Build strong two-dimensional layouts.",
    },
    {
      slug: "responsive",
      title: "Responsive",
      description: "Make layouts adapt across screen sizes.",
    },
  ];
  
  export const challenges: ChallengeItem[] = [
    {
      slug: "center-the-orb",
      title: "Center the Orb",
      description: "Center one element perfectly using Flexbox.",
      pathSlug: "flexbox",
      difficulty: "easy",
    },
    {
      slug: "align-the-nav",
      title: "Align the Nav",
      description: "Build a nav bar with proper spacing and alignment.",
      pathSlug: "flexbox",
      difficulty: "easy",
    },
    {
      slug: "card-row-balance",
      title: "Card Row Balance",
      description: "Lay out cards evenly across a row.",
      pathSlug: "flexbox",
      difficulty: "medium",
    },
    {
      slug: "profile-card-stack",
      title: "Profile Card Stack",
      description: "Arrange a profile card with vertical spacing.",
      pathSlug: "flexbox",
      difficulty: "medium",
    },
    {
      slug: "two-column-layout",
      title: "Two Column Layout",
      description: "Create a basic two-column page with Grid.",
      pathSlug: "grid",
      difficulty: "easy",
    },
    {
      slug: "dashboard-grid",
      title: "Dashboard Grid",
      description: "Build a dashboard layout with multiple grid areas.",
      pathSlug: "grid",
      difficulty: "medium",
    },
    {
      slug: "magazine-grid",
      title: "Magazine Grid",
      description: "Create a magazine-style content layout.",
      pathSlug: "grid",
      difficulty: "medium",
    },
    {
      slug: "bento-grid-boss",
      title: "Bento Grid Boss",
      description: "Build a modern bento-style layout challenge.",
      pathSlug: "grid",
      difficulty: "hard",
    },
    {
      slug: "mobile-hero-fix",
      title: "Mobile Hero Fix",
      description: "Fix a hero section for smaller screens.",
      pathSlug: "responsive",
      difficulty: "easy",
    },
    {
      slug: "card-stack-breakpoint",
      title: "Card Stack Breakpoint",
      description: "Make card layouts stack cleanly on mobile.",
      pathSlug: "responsive",
      difficulty: "medium",
    },
    {
      slug: "sidebar-collapse",
      title: "Sidebar Collapse",
      description: "Adapt a sidebar layout across breakpoints.",
      pathSlug: "responsive",
      difficulty: "medium",
    },
    {
      slug: "landing-page-boss",
      title: "Landing Page Boss",
      description: "Complete a full responsive landing section.",
      pathSlug: "responsive",
      difficulty: "hard",
    },
  ];