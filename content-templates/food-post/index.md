---
# ── FOOD POST TEMPLATE ───────────────────────────────────────────────────
# HOW TO USE:
#   1. Copy this whole "food-post" folder into  src/content/food/
#   2. Rename the copied folder to your post's slug, e.g. "kimchi-jjigae".
#      The folder name becomes the URL:  /food/kimchi-jjigae
#   3. Drop your photos into that folder (e.g. cover.jpg) and edit below.
#   4. Set  draft: false  when you're ready to publish.
#
# Delete any optional line you don't need.

title: "Post title here"
date: 2026-01-01              # YYYY-MM-DD
tags: ["dinner", "korean"]   # any words you like; shown as labels
location: "Home"             # optional — restaurant / city / "Home"
rating: 4.5                  # optional — out of 5, halves ok (delete if N/A)
cover_image: ./cover.jpg     # optional — a photo you placed in THIS folder
cover_alt: "Describe the photo for screen readers"
draft: true                  # true = hidden. Set to false to publish.
---

Write the post here in Markdown. Keep it short and specific.

To add more photos in the body, put the file in this folder and use the line
below (remove the surrounding backticks to make it live). Note: an image path
that doesn't exist yet will intentionally fail the build, so only add it once
the file is there.

```
![A short caption](./photo-2.jpg)
```

Want a margin note? Drop in this raw HTML anywhere in the body:

<aside class="sidenote">This shows up in the right margin on wide screens.</aside>
