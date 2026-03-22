---
layout: default
title: "ISP Data Communication & Professionalism"
---

## About This Site

This site is the central archive for student research data products created in **ESPM 109E: Data Communication & Professionalism**, taught as part of the [UC Berkeley Island Sustainability Program](https://isp.berkeley.edu/) at the Richard B. Gump South Pacific Research Station in Mo'orea, French Polynesia.

Each year, students collect field data, create data management plans, write protocols, clean and archive datasets, apply Local Contexts notices, and produce metadata records with DOIs. This site brings all of that work together in one place.

---

## Cohort Years

<div class="year-grid">
{% assign sorted_years = site.years | sort: "year" | reverse %}
{% for yr in sorted_years %}
  <a href="{{ yr.url | relative_url }}" class="year-card">
    <h3>{{ yr.year }}</h3>
    <span class="cohort-count">{{ yr.students | size }} students · {{ yr.project_count | default: "—" }} projects</span>
  </a>
{% endfor %}
</div>

---

## What You'll Find Here

Each year's page includes:

- **Student projects** — with abstracts pulled directly from DOI metadata records
- **Data management plans** — documenting how data was collected, managed, and preserved
- **Protocols & methods** — field and lab protocols created by students
- **Archived datasets** — links to data repositories (GEOME, Dryad, Zenodo, etc.)
- **Local Contexts notices** — Traditional Knowledge and Biocultural labels and notices applied to datasets

---

<p style="font-size:0.85rem;color:#4a6274;">
  <strong>Instructor:</strong> Erin Robinson · Metadata Game Changers LLC · Visiting Scholar, CU Boulder<br>
  <strong>Questions?</strong> Open an issue on the <a href="https://github.com/">GitHub repository</a>.
</p>
