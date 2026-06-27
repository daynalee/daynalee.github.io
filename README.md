# Dayna Lee — Portfolio

A static, hand-built version of my portfolio (originally on Wix), ready to host for free on GitHub Pages.

> *Analytic Mind, Empathetic Lens*

## Pages
| File | Page |
|------|------|
| `index.html` | Home |
| `case-studies.html` | Case Studies index |
| `case-study-unity.html` | Unity — Multiple Ad Units adoption |
| `case-study-uber-direct.html` | Uber Direct — Credit card debt recovery |
| `case-study-uber-eats.html` | Uber Eats — Postmates migration |
| `case-study-pps.html` | Pacific Pain — Patient intake reduction |
| `about.html` | About |
| `experience.html` | Experience |
| `css/style.css` | All styling |

No build step, no dependencies — just HTML and CSS. Fonts load from Google Fonts.

## Preview locally
Open `index.html` directly in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `portfolio` or `dayna-lee.github.io`).
2. From this folder, push the files:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`, then **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo>/` within a minute or two.

> Tip: if you name the repo `<your-username>.github.io`, the site is served at the root URL with no subpath.

## Editing content
All text lives directly in the `.html` files. Colors, fonts, and spacing are controlled by the CSS variables at the top of `css/style.css` (`:root { ... }`).
