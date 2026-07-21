export const SITE_TITLE = "Andrew Yoo";
export const SITE_TAGLINE = "Personal Notebook";
export const SITE_DESCRIPTION =
  "A personal garden of notes on food, architecture, and half-formed ideas — by Andrew Yoo.";

// Shown in the footer / About page.
export const AUTHOR = {
  name: "Andrew Yoo", // legal name: Hyoungjoon Yoo
  email: "yooandrew2004@gmail.com",
  github: "https://github.com/yoohyoungjoon",
  linkedin: "https://www.linkedin.com/in/hyoungjoon-yoo-61a751203/",
  // These point to PDFs you drop into the public/ folder. The links will 404
  // until those files exist. Rename here if you name the files differently.
  cv: "/Resume260604.pdf", // shown in the footer
  transcript: "/ColumbiaTranscriptFinal.pdf", // linked from the About page
};

// Top-nav sections, in order. Each maps to a folder in src/content/ and a
// route under src/pages/.
export const NAV = [
  { label: "Home", href: "/" },
  { label: "Food", href: "/food" },
  { label: "Architecture", href: "/architecture" },
  { label: "Sports", href: "/sports" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Models", href: "/models" },
  { label: "About", href: "/about" },
] as const;

export const COMMENTS = {
  ENABLED: true,
  repo: "yoohyoungjoon/yoohyoungjoon.github.io", // "owner/repo"
  repoId: "R_kgDOTem4ww", // e.g. "R_kgD..."
  category: "General",
  categoryId: "DIC_kwDOTem4w84DBohq", // e.g. "DIC_kwD..."
} as const;
