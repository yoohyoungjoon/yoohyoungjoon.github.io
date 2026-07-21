# Andrew Yoo — digital garden

A personal digital garden built with [Astro](https://astro.build) and hosted free on
GitHub Pages. Content is organised by section (Food, Architecture, Sports, Thoughts,
Models) rather than as one chronological feed.

- **Warm editorial design** — paper-cream background, Newsreader serif, muted garden-green accent.
- **Validated frontmatter** — each section has a schema, so a typo fails the build with a clear message instead of breaking a page silently.
- **Optimised photos** — cover and body images are converted to responsive WebP automatically.
- **Digital-garden touches** — margin sidenotes and 🌱 / 🌿 / 🌳 growth stages on notes.

---

## 1. Prerequisites

- **Node.js 20 or newer** (this repo is developed on Node 22; there's an `.nvmrc`).
  Check with `node --version`.
- **git** and a **GitHub account**.

## 2. Run it locally

```bash
npm install      # once, to install dependencies
npm run dev      # start the dev server at http://localhost:4321
```

Edit files and the browser refreshes automatically. Stop the server with `Ctrl+C`.

To preview a real production build:

```bash
npm run build    # outputs the static site to dist/
npm run preview  # serve dist/ locally to check it
```

> **Heads-up:** while a section has no posts, `npm run build` prints a line like
> *"The collection 'food' does not exist or is empty."* for each empty section.
> That's an expected notice, **not an error** — it disappears once you add a post.

## 3. Add content

Ready-to-copy starters live in **`content-templates/`**. Each explains itself.

### A Food, Architecture, or Sports post (folder = one post, photos alongside)

1. Copy the matching starter from `content-templates/` into the matching section
   under `src/content/` (e.g. `content-templates/sports-post/` → `src/content/sports/`).
2. Rename the copied folder to your slug, e.g. `arsenal-v-city`.
   The folder name becomes the URL: `/sports/arsenal-v-city`.
3. Drop your photos into that folder (e.g. `cover.jpg`).
4. Edit the frontmatter and body, then set `draft: false` to publish.

### A Model / project (folder = one project)

1. Copy `content-templates/model/` into `src/content/models/`.
2. Rename it to your slug, e.g. `premier-league-model` → `/models/premier-league-model`.
3. Optionally add a chart/screenshot as the cover. Set `draft: false` to publish.

### A Thought / note (single file)

1. Copy `content-templates/thought.md` into `src/content/thoughts/`.
2. Rename it to your slug, e.g. `on-slow-tools.md` → `/thoughts/on-slow-tools`.
3. Edit and set `draft: false`.

### Frontmatter fields

| Field         | Food | Architecture | Sports | Thoughts | Models | Notes                              |
|---------------|:----:|:------------:|:------:|:--------:|:------:|------------------------------------|
| `title`       |  ✓   |      ✓       |   ✓    |    ✓     |   ✓    | required                           |
| `date`        |  ✓   |      ✓       |   ✓    |    ✓     |   ✓    | `YYYY-MM-DD`                       |
| `tags`        |  ✓   |      ✓       |   ✓    |    ✓     |   ✓    | list of words                      |
| `location`    |  ○   |      ○       |   ○    |          |        | optional                           |
| `rating`      |  ○   |              |        |          |        | 0–5, halves allowed                |
| `year_built`  |      |      ○       |        |          |        | number or string like `"1959–63"` |
| `architect`   |      |      ○       |        |          |        | optional                           |
| `competition` |      |              |   ○    |          |        | e.g. `"Premier League"`            |
| `result`      |      |              |   ○    |          |        | e.g. `"Arsenal 2–1 Chelsea"`       |
| `growth_stage`|      |              |        |    ✓     |        | `seedling`/`budding`/`evergreen`   |
| `updated`     |      |              |        |    ○     |        | optional "last tended" date        |
| `status`      |      |              |        |          |   ✓    | `planned`/`building`/`live`        |
| `tech`        |      |              |        |          |   ○    | list, e.g. `["Python"]`            |
| `repo`        |      |              |        |          |   ○    | URL to the code                    |
| `demo`        |      |              |        |          |   ○    | URL to a live demo                 |
| `cover_image` |  ○   |      ○       |   ○    |          |   ○    | `./file.jpg` in the post folder    |
| `cover_alt`   |  ○   |      ○       |   ○    |          |   ○    | alt text for the cover             |
| `draft`       |  ○   |      ○       |   ○    |    ○     |   ○    | `true` hides the post              |

(○ = optional)

### Sidenotes

In any post body, add a margin note with raw HTML:

```html
<aside class="sidenote">An aside that floats into the right margin on wide screens.</aside>
```

## 4. Edit site text and links

Almost all site-wide text lives in **`src/consts.ts`** — title, tagline, nav
items, and your email/GitHub/LinkedIn links. Change values there.

The **About** page copy is in `src/pages/about.astro` (currently a placeholder to
workshop). The **home** intro is in `src/pages/index.astro`. Both are marked with
`TODO` comments.

## 5. Turn on comments (optional)

Comments use [giscus](https://giscus.app) (backed by your repo's GitHub Discussions —
free, no ads or tracking). Steps:

1. Push this repo to GitHub and make it **public**.
2. Enable **Discussions**: repo **Settings ▸ General ▸ Features ▸ Discussions**.
3. Install the giscus app: <https://github.com/apps/giscus>.
4. Go to <https://giscus.app>, enter `yoohyoungjoon/yoohyoungjoon.github.io`, pick a
   Discussion category, and copy the four generated values into `src/consts.ts`
   (`repo`, `repoId`, `category`, `categoryId`).
5. In `src/consts.ts`, set `COMMENTS.ENABLED = true`.

Until then, no comment box renders.

## 6. Add your CV and transcripts

The footer links to a CV and the About page links to your transcripts. Both point
to PDFs in the `public/` folder, so:

1. Put `andrew-yoo-cv.pdf` and `andrew-yoo-transcript.pdf` into `public/`.
2. That's it — `public/anything.pdf` is served at `/anything.pdf`.

If you name the files differently, update the `cv` and `transcript` paths in
`src/consts.ts`. Until the PDFs exist, those links will 404.

## 7. Customise the look

All colours, fonts, and spacing are CSS variables at the top of
**`src/styles/global.css`** (the `:root { … }` block). Change one value there and it
updates everywhere. To swap the body font, replace the `@import` lines at the top of
that file and update `--serif`.

## 8. Deploy to GitHub Pages

This repo is configured as a **GitHub user site** (`yoohyoungjoon.github.io`).

**One-time setup**

1. Create a repo on GitHub named **exactly** `yoohyoungjoon.github.io`.
2. Push this project to it on the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial garden"
   git branch -M main
   git remote add origin https://github.com/yoohyoungjoon/yoohyoungjoon.github.io.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings ▸ Pages** and set **Source** to
   **GitHub Actions** (not "Deploy from a branch").

That's it. The included workflow (`.github/workflows/deploy.yml`) builds the site
and publishes it on every push to `main`. Your site goes live at
**https://yoohyoungjoon.github.io/** (first deploy takes a couple of minutes; watch
the **Actions** tab).

**Everyday publishing** — commit and push; the site rebuilds itself:

```bash
git add .
git commit -m "Add a food post"
git push
```

### Later: a custom domain?

Add a `public/CNAME` file containing your domain, set `site:` in
`astro.config.mjs` to `https://yourdomain.com`, and configure the domain under
**Settings ▸ Pages**. (Not needed for the default `.github.io` address.)

---

## Project structure

```
.
├── astro.config.mjs          # site URL, integrations
├── content-templates/        # copy these to start new posts (NOT published)
├── public/                   # static files served as-is (favicon, CNAME)
├── src/
│   ├── consts.ts             # site title, nav, links, comments toggle
│   ├── content.config.ts     # frontmatter schemas for each section
│   ├── styles/global.css     # design tokens + all styling
│   ├── assets/               # (reserved for shared images)
│   ├── components/           # Header, Footer, PostCard, Sidenote, etc.
│   ├── layouts/              # BaseLayout, PostLayout, NoteLayout
│   ├── content/              # YOUR posts go here (food/ architecture/ sports/ thoughts/ models/)
│   └── pages/                # routes (home, about, section indexes + posts)
└── .github/workflows/        # GitHub Pages deploy
```
