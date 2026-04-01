export type ChallengeContent = {
    slug: string;
    goal: string;
    instructions: string[];
    starterHtml: string;
    starterCss: string;
  };
  
  export const challengeContent: ChallengeContent[] = [
    {
      slug: "center-the-orb",
      goal: "Center the orb perfectly in the middle of the screen.",
      instructions: [
        "Center the orb perfectly inside the full screen.",
        "Use Flexbox for both horizontal and vertical centering.",
        "Do not change the HTML structure.",
      ],
      starterHtml: `<div class="challenge-screen">
    <div class="orb"></div>
  </div>`,
      starterCss: `.challenge-screen {
    min-height: 100vh;
    background: #09090b;
  }
  
  .orb {
    width: 120px;
    height: 120px;
    border-radius: 9999px;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
  }`,
    },
    {
      slug: "align-the-nav",
      goal: "Place the logo on the left and the links on the right in one clean row.",
      instructions: [
        "Place the logo on the left and the nav links on the right.",
        "Keep all items vertically centered.",
        "Add spacing between the nav links using Flexbox.",
      ],
      starterHtml: `<header class="nav">
    <div class="logo">CSS Odyssey</div>
  
    <nav class="nav-links">
      <a href="#">Paths</a>
      <a href="#">Challenges</a>
      <a href="#">Profile</a>
    </nav>
  </header>`,
      starterCss: `body {
    margin: 0;
    background: #09090b;
    color: white;
    font-family: Arial, sans-serif;
  }
  
  .nav {
    padding: 24px 32px;
    border-bottom: 1px solid #27272a;
  }
  
  .logo {
    font-weight: 700;
  }
  
  .nav-links a {
    color: #d4d4d8;
    text-decoration: none;
    margin-left: 12px;
  }`,
    },
    {
      slug: "two-column-layout",
      goal: "Create a two-column layout with a narrow sidebar and a wider content area.",
      instructions: [
        "Create a two-column layout with a sidebar and main content area.",
        "Use CSS Grid for the overall layout.",
        "Keep the sidebar narrower than the main content area.",
      ],
      starterHtml: `<div class="layout">
    <aside class="sidebar">Sidebar</aside>
    <main class="content">Main Content</main>
  </div>`,
      starterCss: `.layout {
    min-height: 100vh;
    background: #09090b;
    color: white;
  }
  
  .sidebar {
    background: #18181b;
    padding: 24px;
  }
  
  .content {
    background: #27272a;
    padding: 24px;
  }`,
    },
    {
      slug: "mobile-hero-fix",
      goal: "Make the hero layout adapt better on smaller screens.",
      instructions: [
        "Start with a stacked mobile-friendly layout.",
        "Make spacing feel comfortable on small screens.",
        "Do not change the HTML structure.",
      ],
      starterHtml: `<section class="hero">
    <div class="hero-copy">
      <h1>Master CSS Faster</h1>
      <p>Train with focused layout challenges.</p>
      <button>Start Training</button>
    </div>
  
    <div class="hero-card">Preview Card</div>
  </section>`,
      starterCss: `body {
    margin: 0;
    background: #09090b;
    color: white;
    font-family: Arial, sans-serif;
  }
  
  .hero {
    padding: 32px;
    gap: 24px;
  }
  
  .hero-copy h1 {
    margin: 0 0 12px;
    font-size: 40px;
  }
  
  .hero-copy p {
    margin: 0 0 16px;
    color: #d4d4d8;
  }
  
  button {
    border: 0;
    border-radius: 9999px;
    padding: 12px 18px;
    background: white;
    color: black;
    font-weight: 700;
  }
  
  .hero-card {
    min-height: 220px;
    border-radius: 24px;
    background: linear-gradient(135deg, #27272a, #3f3f46);
  }`,
    },
  ];
  
  export function getChallengeContent(slug: string) {
    return challengeContent.find((item) => item.slug === slug);
  }