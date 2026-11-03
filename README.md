# Dr. P. Sathish Kumar — General & Laparoscopic Surgeon Portfolio

A professional portfolio website for **Dr. P. Sathish Kumar**, General & Laparoscopic Surgeon
(MBBS, MS General Surgery) and Associate Professor at Government Medical College, Khammam.

Built with pure **HTML, CSS and JavaScript** — no frameworks, no build step. Designed to be shared
with hospitals, referring doctors and patients.

## Live Site

**https://tiruveedhulasuryateja.github.io/dr-sathish-kumar/**

## Sections

- **Hero** — photo, credentials, registration number, call and appointment CTAs
- **At a glance** — 100+ surgeries, 10 specialities, years in practice, 150+ procedure types
- **About** — training, clinical experience and teaching role
- **Expertise & Care** — laparoscopic surgery plus eight open-surgery care areas for patients
- **Procedures** — searchable portfolio of 150 procedures across 10 categories (for hospitals)
- **Experience** — GMC Khammam, Mahabubnagar, CAIMS Karimnagar, Osmania
- **Academics** — MS thesis, TSASICON presentations, qualifications
- **Locations** — consultation hospitals and clinics across Hyderabad
- **Appointments** — phone, WhatsApp, email and a WhatsApp-powered request form
- **Medical disclaimer** — informational use only; emergency contact 108

## Privacy

The website publishes only professional contact details and the medical registration number.
The home address and date of birth from the CV are intentionally **not** published.

## Run locally

Open `index.html` directly, or:

```bash
python -m http.server 8081
```

Then visit http://127.0.0.1:8081

## Structure

```
dr-sathish-kumar/
├── index.html      # content and sections
├── style.css       # clinical light theme, responsive
├── script.js       # procedure search/filter, form, animations
├── assets/
│   └── dr-sathish.jpg
└── README.md
```

## Updating content

- Text lives in `index.html`
- Procedure list and categories live in `procedureGroups` at the top of `script.js`
- Contact number appears in `index.html` and in the WhatsApp links inside `script.js`
