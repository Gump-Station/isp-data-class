# Contributing to the ISP Data Class Site

Welcome! This guide walks you through adding your project to the class website. **You don't need to know how to code** — everything is done through GitHub's web editor.

## Quick Start (5 minutes)

### 1. Go to your year's page

In the repository, open `_years/` and click on your year (e.g., `2026.md`).

### 2. Click ✏️ Edit

Click the pencil icon in the top-right corner of the file view.

### 3. Add yourself to the cohort

Find the `cohort:` list near the top. Add your ORCID — the site automatically pulls your name, affiliation, bio, and keywords from your public ORCID profile:

```yaml
cohort:
  - orcid: 0000-0002-1234-5678   # ← existing student
  - orcid: 0000-0003-YOUR-ORCID  # ← add yours here
```

Don't have an ORCID yet? Register at [orcid.org](https://orcid.org) (it takes 2 minutes), or use the fallback format:
```yaml
  - name: Your Name
    affiliation: UC Berkeley
```

### 4. Add your project

Scroll to the bottom. Copy this template and paste it above the template comment block:

```markdown
<div class="project-card" markdown="1">

### Your Project Title

**Team:** Your Name, Partner Name

<div class="doi-metadata" data-doi="10.xxxxx/your-doi"></div>

<div class="links">
  <a href="https://doi.org/10.xxxxx/your-doi">📄 Metadata Record</a>
  <a href="URL_TO_DMP">📋 Data Management Plan</a>
  <a href="URL_TO_PROTOCOL">🔬 Protocol</a>
  <a href="URL_TO_DATASET">💾 Archived Dataset</a>
  <span class="lc-notice">🏷️ TK Notice</span>
</div>

</div>
```

### 5. Fill in YOUR details

- Replace the DOI with your real DOI (the page auto-loads your metadata!)
- Replace `#` links with real URLs
- Update the Local Contexts notice type

### 6. Commit

Click **"Commit changes"** → add a brief message like "Add [your name]'s project" → Commit.

The site rebuilds in about a minute. Done! 🎉

## Tips

- **ORCID magic:** Just paste your ORCID iD and the site pulls your name, affiliation, bio, and research keywords automatically. Make sure your ORCID profile is set to public visibility for this to work.
- **DOI magic:** Just paste your DOI and the site pulls your title, authors, and abstract automatically from DataCite or CrossRef. No need to type it twice.
- **Local Contexts notices:** Use `TK Notice`, `BC Notice`, `TK Label`, or `BC Label` depending on what you applied.
- **Multiple projects?** Just copy the template block again for each project.
- **Broken formatting?** Make sure the `<div>` tags are on their own lines with blank lines above and below. Markdown inside HTML tags needs `markdown="1"` on the div (it's already in the template).
- **Need help?** Ask your instructor or open an issue in the repository.
