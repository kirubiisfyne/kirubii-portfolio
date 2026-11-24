# Kirby Bilbao — game development portfolio

A static portfolio with an Anii! Grow to Know showcase, two early case-study drafts, and a KonTEXTo game card. No build step or dependencies are required.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. Stop the server with Ctrl+C.

## Publish on GitHub Pages

1. Push the contents of this directory to a GitHub repository, including `index.html`, `styles.css`, `script.js`, `favicon.svg`, `case-studies/`, and `bilbao-kirby-resume.pdf`.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, then select your publishing branch and `/ (root)` folder. Save.
4. Visit the URL shown in GitHub Pages settings once deployment finishes. Relative links work for both user and project sites.

## Update content

- Edit `index.html` for the introduction, featured project, screenshots, game card, and links.
- Edit `case-studies/anii.html` and `case-studies/kontexto.html` to replace draft text with verified development details. The pages are intentionally marked as drafts.
- Replace `bilbao-kirby-resume.pdf` to update the résumé download; keep the filename or update the links.
- Adjust colors, type, and layouts in `styles.css`.

The YouTube trailer, itch.io images, and Google Fonts load from external services and require a network connection. System font fallbacks remain available offline. Public résumé includes contact details; review the PDF before publishing.
