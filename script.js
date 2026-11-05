/* ============================================================
   Dr. P. Sathish Kumar — portfolio interactions
   ============================================================ */
"use strict";

/* ---------- Procedure portfolio data ---------- */
const procedureGroups = [
  {
    id: "abdominal",
    label: "Abdominal & GI",
    title: "Major & Advanced Abdominal Surgery",
    items: [
      "Exploratory Laparotomy",
      "Emergency Laparotomy for Acute Abdomen",
      "Perforation Closure with Omental Patch",
      "Graham's Omental Patch Repair",
      "Small Bowel Resection and Anastomosis",
      "Large Bowel Resection and Anastomosis",
      "Right Hemicolectomy",
      "Left Hemicolectomy",
      "Sigmoid Colectomy",
      "Adhesiolysis for Intestinal Obstruction",
      "Resection of Gangrenous Bowel",
      "Intestinal Stoma Formation",
      "Ileostomy Formation and Closure",
      "Colostomy Formation and Closure",
      "Intestinal Strictureplasty",
      "Meckel's Diverticulectomy",
      "Repair of Intestinal Perforation",
      "Management of Abdominal Trauma",
      "Splenectomy",
      "Repair of Traumatic Abdominal Injuries",
    ],
  },
  {
    id: "hepatobiliary",
    label: "GI & Hepatobiliary",
    title: "Gastrointestinal & Hepatobiliary Surgery",
    items: [
      "Open Cholecystectomy",
      "Laparoscopic Cholecystectomy",
      "Common Bile Duct Exploration",
      "Choledocholithotomy",
      "T-Tube Drainage",
      "CBD Repair",
      "Gastrojejunostomy",
      "Jejunojejunostomy",
      "Truncal Vagotomy with Gastrojejunostomy",
      "Truncal Vagotomy with Pyloroplasty",
      "Feeding Jejunostomy",
      "Gastrostomy",
      "Repair of Duodenal Perforation",
      "Surgical Drainage of Liver Abscess",
      "Surgery for Obstructive Jaundice",
    ],
  },
  {
    id: "hernia",
    label: "Hernia",
    title: "Hernia Surgery",
    items: [
      "Open Inguinal Hernioplasty",
      "Laparoscopic TEP Hernia Repair",
      "Laparoscopic TAPP Hernia Repair",
      "Bilateral Inguinal Hernia Repair",
      "Recurrent Inguinal Hernia Repair",
      "Obstructed Inguinal Hernia Surgery",
      "Strangulated Inguinal Hernia Surgery",
      "Open Incisional Hernia Repair",
      "Ventral Hernia Repair",
      "Umbilical Hernia Repair",
      "Paraumbilical Hernia Repair",
      "Epigastric Hernia Repair",
      "Spigelian Hernia Repair",
      "Femoral Hernia Repair",
      "Giant Incisional Hernia Repair",
    ],
  },
  {
    id: "trauma",
    label: "Trauma",
    title: "Trauma, Bullet & Stab Injury Surgery",
    items: [
      "Exploratory Laparotomy for Penetrating Abdominal Trauma",
      "Laparotomy for Gunshot Wounds",
      "Laparotomy for Stab Injuries",
      "Repair of Small Bowel Injuries",
      "Repair of Colonic Injuries",
      "Repair of Gastric Injuries",
      "Repair of Mesenteric Injuries",
      "Splenectomy for Traumatic Splenic Injury",
      "Surgical Management of Liver Trauma",
      "Diaphragmatic Injury Repair",
      "Management of Retroperitoneal Trauma",
      "Debridement of Traumatic Wounds",
      "Emergency Haemostasis and Vascular Injury Management",
      "Drainage of Traumatic Haematoma",
      "Management of Polytrauma Patients",
    ],
  },
  {
    id: "anorectal",
    label: "Anorectal",
    title: "Anorectal & Proctology Surgery",
    items: [
      "Open Haemorrhoidectomy",
      "Stapled Haemorrhoidopexy",
      "Fistulotomy",
      "Fistulectomy",
      "Seton Placement for Fistula-in-Ano",
      "Fissurectomy",
      "Lateral Internal Sphincterotomy",
      "Surgery for Complex Fistula-in-Ano",
      "Perianal Abscess Drainage",
      "Ischiorectal Abscess Drainage",
      "Pilonidal Sinus Excision",
      "Pilonidal Sinus Flap Reconstruction",
      "Rectal Prolapse Repair",
      "Anal Canal Polypectomy",
      "Examination Under Anaesthesia (EUA) for Anorectal Conditions",
    ],
  },
  {
    id: "urology",
    label: "Urology",
    title: "Urological Procedures",
    items: [
      "Circumcision",
      "Dorsal Slit Procedure",
      "Suprapubic Cystostomy",
      "Open Cystolithotomy",
      "Pyelolithotomy",
      "Nephrectomy",
      "Emergency Exploration for Renal Trauma",
      "Drainage of Scrotal Abscess",
      "Hydrocele Surgery",
      "Orchiectomy",
      "Epididymal Cyst Excision",
      "Repair of Scrotal Injuries",
      "Exploration for Testicular Torsion",
      "Varicocelectomy",
    ],
  },
  {
    id: "breast-thyroid",
    label: "Breast & Thyroid",
    title: "Breast & Thyroid Surgery",
    items: [
      "Excision of Breast Lump",
      "Lumpectomy",
      "Incision and Drainage of Breast Abscess",
      "Modified Radical Mastectomy",
      "Simple Mastectomy",
      "Wide Local Excision of Breast Malignancy",
      "Sentinel Lymph Node Biopsy",
      "Axillary Lymph Node Dissection",
      "Hemithyroidectomy",
      "Total Thyroidectomy",
      "Subtotal Thyroidectomy",
      "Thyroglossal Cyst Excision (Sistrunk Procedure)",
      "Excision of Cervical Lymph Nodes",
      "Parotid Region Lump Excision",
    ],
  },
  {
    id: "gynae",
    label: "Gynaecological",
    title: "Gynaecological & Pelvic Procedures",
    items: [
      "Ovarian Cystectomy",
      "Oophorectomy",
      "Salpingo-Oophorectomy",
      "Ectopic Pregnancy Surgery",
      "Emergency Surgery for Ruptured Ectopic Pregnancy",
      "Hysterectomy",
      "Pelvic Abscess Drainage",
      "Surgical Management of Pelvic Trauma",
    ],
  },
  {
    id: "soft-tissue",
    label: "Limb & Soft Tissue",
    title: "Limb, Hand & Soft Tissue Surgery",
    items: [
      "Debridement of Infected Limb Wounds",
      "Debridement of Diabetic Foot",
      "Below-Knee Amputation",
      "Above-Knee Amputation",
      "Toe Amputation",
      "Ray Amputation",
      "Incision and Drainage of Limb Abscess",
      "Fasciotomy for Compartment Syndrome",
      "Wound Exploration for Foreign Body Removal",
      "Repair of Tendon Injuries",
      "Repair of Peripheral Nerve Injuries",
      "Flexor Tendon Repair",
      "Extensor Tendon Repair",
      "Carpal Tunnel Release",
      "Ganglion Cyst Excision",
      "Excision of Soft Tissue Tumours",
      "Skin Grafting",
      "Split Thickness Skin Grafting",
      "Flap Coverage for Soft Tissue Defects",
    ],
  },
  {
    id: "emergency",
    label: "Emergency",
    title: "Emergency & Critical General Surgery",
    items: [
      "Emergency Appendicectomy",
      "Open Appendicectomy",
      "Laparoscopic Appendicectomy",
      "Surgery for Acute Intestinal Obstruction",
      "Surgery for Strangulated Hernia",
      "Surgery for Perforative Peritonitis",
      "Surgery for Generalised Peritonitis",
      "Emergency Management of Gastrointestinal Bleeding",
      "Emergency Tracheostomy",
      "Surgical Management of Necrotising Fasciitis",
      "Debridement of Fournier's Gangrene",
      "Emergency Drainage of Deep-Seated Abscesses",
      "Management of Septic Abdominal Conditions",
      "Emergency Management of Acute Cholecystitis",
      "Surgical Management of Abdominal Compartment Syndrome",
    ],
  },
];

const totalProcedures = procedureGroups.reduce((sum, group) => sum + group.items.length, 0);

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header + mobile nav ---------- */
  const header = document.getElementById("siteHeader");
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    navToggle.classList.remove("open");
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("click", (event) => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(event.target) &&
      !navToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  /* ---------- Scroll spy ---------- */
  const navLinks = document.querySelectorAll(".nav-link");
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  document.querySelectorAll("section[id]").forEach((section) => spy.observe(section));

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- Counters ---------- */
  const animateCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    const duration = 1500;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );

  document.querySelectorAll(".stat-num").forEach((el) => counterObserver.observe(el));

  /* ============================================================
     PROCEDURE EXPLORER
     ============================================================ */
  const area = document.getElementById("procedureArea");
  const pillsWrap = document.getElementById("categoryPills");
  const searchInput = document.getElementById("procedureSearch");
  const meta = document.getElementById("procedureMeta");
  const totalPill = document.getElementById("procedureTotal");

  if (totalPill) totalPill.textContent = `${totalProcedures}+`;

  let activeCategory = "all";
  let query = "";

  const escapeHtml = (text) =>
    text.replace(/[&<>"']/g, (ch) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[ch]));

  const highlight = (text) => {
    const safe = escapeHtml(text);
    if (!query) return safe;
    const pattern = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig");
    return safe.replace(pattern, "<mark>$1</mark>");
  };

  /* Build category pills */
  const allPill = document.createElement("button");
  allPill.type = "button";
  allPill.className = "pill active";
  allPill.dataset.category = "all";
  allPill.textContent = `All (${totalProcedures})`;
  pillsWrap.appendChild(allPill);

  procedureGroups.forEach((group) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "pill";
    pill.dataset.category = group.id;
    pill.textContent = `${group.label} (${group.items.length})`;
    pillsWrap.appendChild(pill);
  });

  const render = () => {
    const groupsToShow =
      activeCategory === "all"
        ? procedureGroups
        : procedureGroups.filter((group) => group.id === activeCategory);

    let shown = 0;
    let html = "";

    groupsToShow.forEach((group) => {
      const matches = group.items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      if (!matches.length) return;

      shown += matches.length;

      html += `
        <div class="procedure-group">
          <h3>${group.title} <span class="group-count">${matches.length}</span></h3>
          <div class="procedure-chips">
            ${matches.map((item) => `<span class="chip">${highlight(item)}</span>`).join("")}
          </div>
        </div>`;
    });

    if (!shown) {
      html = `<div class="empty-state">No procedures found for “${escapeHtml(query)}”. Try another term, or <button type="button" class="link-reset" id="resetSearch">view all ${totalProcedures} procedures</button>.</div>`;
    }

    area.innerHTML = html;
    meta.textContent = `Showing ${shown} of ${totalProcedures} procedures`;

    const resetBtn = document.getElementById("resetSearch");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        searchInput.value = "";
        query = "";
        activeCategory = "all";
        updatePills();
        render();
      });
    }
  };

  const updatePills = () => {
    pillsWrap.querySelectorAll(".pill").forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.category === activeCategory);
    });
  };

  pillsWrap.addEventListener("click", (event) => {
    const pill = event.target.closest(".pill");
    if (!pill) return;
    activeCategory = pill.dataset.category;
    updatePills();
    render();
  });

  let debounce;
  searchInput.addEventListener("input", (event) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      query = event.target.value.trim();
      render();
    }, 120);
  });

  render();

  /* ============================================================
     APPOINTMENT FORM → WhatsApp
     ============================================================ */
  const form = document.getElementById("appointmentForm");
  const formNote = document.getElementById("formNote");

  if (form) {
    const dateField = form.prefDate;
    if (dateField) {
      const now = new Date();
      const minDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
      dateField.min = minDate;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = form.patientName.value.trim();
      const phone = form.patientPhone.value.trim();
      const concern = form.concern.value;
      const prefDate = form.prefDate ? form.prefDate.value : "";
      const prefTime = form.prefTime ? form.prefTime.value : "";
      const message = form.message.value.trim();

      let valid = true;
      const setValidity = (field, ok) => {
        field.classList.toggle("invalid", !ok);
        if (!ok) valid = false;
      };

      setValidity(form.patientName, name.length > 1);
      setValidity(form.patientPhone, /^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, "")));
      setValidity(form.concern, Boolean(concern));
      if (form.prefTime) setValidity(form.prefTime, Boolean(prefTime));

      if (!valid) {
        formNote.textContent = "Please enter your name, a valid 10-digit mobile number, a reason for visit and a preferred time slot.";
        formNote.classList.remove("success");
        return;
      }

      const lines = [
        "Hello Dr. Sathish, I would like to request an appointment.",
        "",
        `Patient name: ${name}`,
        `Phone: ${phone}`,
        `Concern: ${concern}`,
      ];

      if (prefDate) {
        const parsed = new Date(`${prefDate}T00:00:00`);
        const prettyDate = Number.isNaN(parsed.getTime())
          ? prefDate
          : parsed.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
        lines.push(`Preferred date: ${prettyDate}`);
      }
      if (prefTime) lines.push(`Preferred time: ${prefTime}`);

      if (message) lines.push(`Message: ${message}`);

      const url = `https://wa.me/918639709123?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener");

      formNote.textContent = "WhatsApp is opening with your appointment request and preferred slot…";
      formNote.classList.add("success");
      form.reset();
    });

    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("input", () => field.classList.remove("invalid"));
      field.addEventListener("change", () => field.classList.remove("invalid"));
    });
  }

  /* ---------- Close menu on resize ---------- */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && navMenu.classList.contains("open")) closeMenu();
  });
});
