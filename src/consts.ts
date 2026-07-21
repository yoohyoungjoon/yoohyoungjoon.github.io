// ---------------------------------------------------------------------------
// Edit this file to change site-wide text and links. Nothing here is "magic":
// it's just the values the templates read from.
// ---------------------------------------------------------------------------

export const SITE_TITLE = "Andrew Yoo";
export const SITE_TAGLINE = "A digital garden";
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
  cv: "/andrew-yoo-cv.pdf", // shown in the footer
  transcript: "/andrew-yoo-transcript.pdf", // linked from the About page
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

// ---------------------------------------------------------------------------
// Comments (Giscus, backed by your repo's GitHub Discussions).
// To turn these on:
//   1. Make the repo public and enable Discussions (Settings ▸ General ▸ Features).
//   2. Install the giscus app: https://github.com/apps/giscus
//   3. Go to https://giscus.app, enter yoohyoungjoon/yoohyoungjoon.github.io,
//      pick a Discussion category (e.g. "Announcements" or a new "Comments"),
//      and copy the four values it generates into the fields below.
//   4. Set ENABLED to true.
// Until then, ENABLED stays false and no comment box renders.
// ---------------------------------------------------------------------------
export const COMMENTS = {
  ENABLED: false,
  repo: "yoohyoungjoon/yoohyoungjoon.github.io", // "owner/repo"
  repoId: "PASTE_REPO_ID_FROM_GISCUS", // e.g. "R_kgD..."
  category: "Comments",
  categoryId: "PASTE_CATEGORY_ID_FROM_GISCUS", // e.g. "DIC_kwD..."
} as const;
