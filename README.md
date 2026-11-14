# Thanh Vu — Personal portfolio

My portfolio as a data scientist working on retrieval, conversational memory, and multi-agent AI systems.

The site includes my experience, education, scholarships, publications, three project case studies with architecture diagrams, and a downloadable CV.

## Preview locally

From this directory:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173. No build or package installation is needed.

## Edit the site

- `index.html`: biography, experience, education, scholarships, publications, and project summaries.
- `projects/`: individual project case studies.
- `assets/style.css`: typography, colors, and responsive layout.
- `assets/*.svg`: architecture diagrams and illustrations.
- `assets/ThanhVu-CV.pdf`: current CV.

## Publish with GitHub Pages

This repository is intended for `vuthanh2611/vuthanh2611.github.io`.

1. Push the files to the repository's `master` branch.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Choose **master** and **/ (root)**, then save.
4. After deployment, visit https://vuthanh2611.github.io/.

The `.nojekyll` file lets GitHub Pages serve the static files directly. Future pushes to `master` update the website.

See [GitHub's Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) for publishing details.
