# Celestial Archive

This repository contains the source code for my personal website, **Celestial Archive**. It serves as a personal knowledge base, blog, and archive.

Built with performance and rich content formatting in mind, this site is heavily focused on providing an excellent reading and authoring experience for technical notes, diagrams, and math equations.

## Features

- **Blazing Fast**: Built with [Astro](https://astro.build/) for minimal client-side JavaScript and optimal performance.
- **Rich Markdown Support**:
  - Comprehensive math equation rendering using MathJax (`rehype-mathjax`, `remark-math`).
  - Advanced code blocks with syntax highlighting and editor-like features via [Astro Expressive Code](https://expressive-code.com/).
  - Diagram rendering directly from markdown using [Mermaid](https://mermaid.js.org/).
  - Support for GitHub-style blockquote alerts (Notes, Tips, Warnings, etc.).

## Quick Start

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, and then follow these steps:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/flowing-wind/celestial-archive.git
   cd celestial-archive
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:4321`.

## Project Structure

Inside this Astro project, you'll generally find the following folders and files:

```text
/
├── public/           # Static assets (fonts, icons, etc.) served at the root path
├── src/
│   ├── components/   # UI Components (Headers, Footers, interactive elements)
│   ├── layouts/      # Page layout templates
│   ├── pages/        # File-based routing (pages and API endpoints)
│   ├── styles/       # Global CSS styles
│   └── content/      # Markdown/MDX content collections (blog posts, notes)
├── package.json      # Project dependencies and scripts
└── astro.config.mjs  # Astro configuration file
```

## Scripts

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts local dev server at `localhost:4321` |
| `npm run build` | Builds your production site to `./dist/` |
| `npm run preview` | Previews your build locally before deployment |

## Markdown Frontmatter

When writing new content (e.g., in `src/content/observations/`), each markdown file must include a YAML frontmatter block at the top, enclosed by `---`. 

Here are the supported parameters based on the content schema:

```yaml
---
title: "Your Post Title"         # Required: The title of the post
date: 2026-02-27                 # Required: The publication date
description: "A short summary"   # Required: Description of the post
constellation: "Orion"           # Required: The category or constellation tag
author: "Fuuraiko"               # Optional: Defaults to "Fuuraiko"
---
```
