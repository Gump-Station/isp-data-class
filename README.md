# ISP Data Communication & Professionalism

Central archive for student research data products from **ESPM 109E: Data Communication & Professionalism**, UC Berkeley Island Sustainability Program at the Gump South Pacific Research Station, Mo'orea, French Polynesia.

🌐 **Live site:** `https://<your-org>.github.io/isp-data-class/`

---

## 🚀 Setup (one-time, for the instructor)

1. Create a new repository in your Gump Station GitHub organization called `isp-data-class`
2. Push all files from this folder to the `main` branch
3. Go to **Settings → Pages** and set the source to `main` branch, root folder
4. Wait ~2 minutes for the site to build
5. Update `_config.yml` with your actual `url` and `baseurl` if needed

That's it — no Ruby, no Node, no build tools. GitHub Pages handles everything.

---

## 🧑‍🎓 For Students: How to Add Your Work

### Step 1: Open your year's file

Navigate to `_years/2026.md` (or whatever your year is) in the GitHub repository.

### Step 2: Click the pencil icon to edit

GitHub lets you edit files right in the browser — no git knowledge needed.

### Step 3: Add your name to the student list

Find the `students:` section at the top and add your name:

```yaml
students:
  - Your Name Here
```

### Step 4: Copy the project template

Scroll to the bottom of the file. You'll find a commented-out template. Copy it and paste it above the template comment block.

### Step 5: Fill in your details

- **Project title** — Replace "Your Project Title Here"
- **Team** — Your name(s)
- **DOI** — Replace `10.xxxxx/your-doi-here` with your real DOI. The site will automatically fetch your title, creators, and abstract from the DOI metadata!
- **Links** — Replace the `#` placeholders with real URLs to your DMP, protocol, archived dataset
- **Local Contexts** — Update the notice type (TK Notice, BC Notice, etc.)

### Step 6: Commit your changes

Click "Commit changes" at the bottom. The site rebuilds automatically in ~1 minute.

---

## 📁 Site Structure

```
_config.yml          ← Site settings
_layouts/
  default.html       ← Base page template
  year.html          ← Year page template
_years/
  2023.md            ← One file per cohort year
  2024.md
  2025.md
  2026.md            ← ✨ Current year with examples
assets/
  css/style.scss     ← Custom styles
  js/doi-fetch.js    ← Auto-fetches metadata from DOIs
index.md             ← Home page
```

## 🔗 DOI Auto-Fetch

Any `<div>` with a `data-doi` attribute will automatically display the title, creators, and abstract from that DOI's metadata record. This works with DataCite DOIs (Zenodo, Dryad, etc.) and CrossRef DOIs.

```html
<div class="doi-metadata" data-doi="10.5281/zenodo.1234567"></div>
```

## 📝 Adding a New Year

1. Copy any existing year file (e.g., `_years/2026.md`)
2. Save it as `_years/2027.md`
3. Update the front matter (title, year, cohort_description)
4. Clear the student list and projects
5. The home page will automatically pick up the new year

---

**Instructor:** Erin Robinson · Metadata Game Changers LLC · Visiting Scholar, CU Boulder
