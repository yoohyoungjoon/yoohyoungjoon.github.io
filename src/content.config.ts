import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ---------------------------------------------------------------------------
// FRONTMATTER SCHEMAS
//
// These define exactly which fields each kind of post can have. Because they're
// validated at build time, a typo like `raiting:` or a missing `title:` fails
// loudly with a clear error instead of silently breaking a page.
//
// Fields marked .optional() can be left out. `date` accepts YYYY-MM-DD.
// Food & Architecture posts live in a *folder* (one folder per post) so their
// photos sit right next to the text. Thoughts are single .md files.
// ---------------------------------------------------------------------------

// Growth stage for the "digital garden" notes: how developed an idea is.
const GROWTH_STAGES = ["seedling", "budding", "evergreen"] as const;

// FOOD ── meals cooked, restaurants, recipes
const food = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./src/content/food",
    // Turn "margherita-at-home/index.md" into the clean slug "margherita-at-home".
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      location: z.string().optional(),
      rating: z.number().min(0).max(5).optional(), // out of 5, halves allowed (e.g. 4.5)
      cover_image: image().optional(), // ./cover.jpg  (sits in the post folder)
      cover_alt: z.string().default(""), // describe the photo for screen readers
      draft: z.boolean().default(false), // true = hidden from the built site
    }),
});

// ARCHITECTURE ── buildings and spaces
const architecture = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./src/content/architecture",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      location: z.string().optional(),
      year_built: z.union([z.number(), z.string()]).optional(), // 1959 or "1959–63"
      architect: z.string().optional(),
      cover_image: image().optional(),
      cover_alt: z.string().default(""),
      draft: z.boolean().default(false),
    }),
});

// THOUGHTS ── shorter, less-polished notes
const thoughts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/thoughts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    growth_stage: z.enum(GROWTH_STAGES).default("seedling"),
    updated: z.coerce.date().optional(), // gardens grow — optional "last tended" date
    draft: z.boolean().default(false),
  }),
});

// SPORTS ── matches, teams, moments (photo-post format, like Food/Architecture)
const sports = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./src/content/sports",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      location: z.string().optional(), // venue / city
      competition: z.string().optional(), // e.g. "Premier League"
      result: z.string().optional(), // e.g. "Arsenal 2–1 Chelsea"
      cover_image: image().optional(),
      cover_alt: z.string().default(""),
      draft: z.boolean().default(false),
    }),
});

// Project status for the Models section.
const MODEL_STATUS = ["planned", "building", "live"] as const;

// MODELS ── data / ML project write-ups
const models = defineCollection({
  loader: glob({
    pattern: "**/index.md",
    base: "./src/content/models",
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      status: z.enum(MODEL_STATUS).default("planned"),
      tech: z.array(z.string()).default([]), // e.g. ["Python", "scikit-learn"]
      repo: z.string().url().optional(), // link to the code
      demo: z.string().url().optional(), // link to a live demo / writeup
      cover_image: image().optional(), // a chart or screenshot
      cover_alt: z.string().default(""),
      draft: z.boolean().default(false),
    }),
});

export const collections = { food, architecture, sports, thoughts, models };
