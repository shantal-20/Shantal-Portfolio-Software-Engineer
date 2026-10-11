const experiences = [
  {
    position: "Intern - WordPress Developer",
    company: "VastResult Inc.",
    workSetup: "Hybrid",
    description: [
      "Developed and maintained company web pages for security and infrastructure services",
      "Enhanced UI layout and readability by optimizing banners, buttons, and typography",
      "Created SEO-optimized content and graphics to improve search visibility",
    ],
    startDate: "2026-02",
    endDate: "2026-05",
    skill: [
      "WordPress",
      "JavaScript",
      "Canva",
      "SEO-aligned writing and summarization",
      "Website layout and UI structuring",
    ],
  },
];

function renderExperience() {
  const container = document.getElementById("experience");

  experiences.forEach((exp) => {
    const startDate = formatMonthYear(exp.startDate);

    let endDate;
    if (exp.endDate.toLowerCase() === "present") {
      endDate = "Present";
    } else {
      endDate = formatMonthYear(exp.endDate);
    }

    const duration = `${startDate} - ${endDate}`;

    let skillList = renderBadges(exp.skill);

    let descList = renderLists(exp.description);

    const card = `
            <div class="card experience" id="experience-card">
                <div class="card-body">
                  <h5 class="card-title mb-1 fw-bold">${exp.position}</h5>
                  <p class="card-text">${exp.company}.</p>
                  <span class="work-setup badge ${exp.workSetup.toLowerCase()} rounded-5 pad-5"
                    >${exp.workSetup}</span
                  >
                  <ul class="card-description pb-3">
                    ${descList}
                  </ul>

                  <div class="badge-container d-flex flex-wrap gap-2">
                    ${skillList}
                  </div>

                </div>
                <div class="card-footer">${duration}</div>
            </div>
      `;

    container.innerHTML += card;
  });
}

if (experiences && experiences.length > 0) {
  renderExperience();
} else {
  const container = document.getElementById("experience");

  container.innerHTML = `
  <div class="card empty-experience">
    <div class="card-body d-flex flex-column">
        <div>
            <span class="empty-status">
                <span class="status-dot"></span>
                Getting started
            </span>
            <h5 class="card-title fw-semibold">
                No Experience Yet
            </h5>
            <p class="card-subtitle mt-2">
                This section will outline professional roles and achievements. Future experiences will showcase responsibilities, growth, and career progression.
            </p>
            <p class="card-text mt-2">
                Entries will be added as new opportunities are undertaken.
            </p>
        </div>

        <div class="mt-auto pt-4">
            <div class="badge-container">
                <span class="badge bg-secondary">Coming soon</span>
            </div>
        </div>
    </div>

    <div class="card-footer">
        <span>Experience timeline</span>
        <span class="empty-duration">—</span>
    </div>
</div>`;
}
