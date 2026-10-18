// Experience Data
const experiences = [
  {
    position: "Intern - WordPress Developer",
    company: "VastResult Inc.",
    workSetup: "Hybrid",
    desc: [
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

  if (!container) return;

  container.replaceChildren();

  // Display an empty state when no experience is available
  if (experiences.length === 0) {
    container.innerHTML = ` <div class="card empty-experience">
      <div class="card-body d-flex flex-column">
        <div>
          <span class="empty-status">
            <span class="status-dot"></span>
            Getting started
          </span>
          <h5 class="card-title fw-semibold">No Experience Yet</h5>
          <p class="card-subtitle mt-2">
            This section will outline professional roles and achievements.
            Future experiences will showcase responsibilities, growth, and
            career progression.
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
    return;
  }

  experiences.forEach((exp) => {
    // Format the start date
    const startDate = formatMonthYear(exp.startDate);

    // Format the end date or display "Present"
    const endDate =
      exp.endDate.toLowerCase() === "present"
        ? "Present"
        : formatMonthYear(exp.endDate);

    // Combine the start and end dates.
    const duration = `${startDate} - ${endDate}`;

    // Create skill badges
    const skillList = renderBadges(exp.skill);

    // Create description list items
    const descList = renderLists(exp.desc);

    //Experience card
    const card = createElement("div", [
      "experience",
      "card",
      "experience-card",
      "w-100",
    ]);

    //Experience details
    const cardBody = createElement("div", ["card-body"]);

    const cardTitle = createElement(
      "h5",
      ["card-title", "mb-1", "fw-bold"],
      exp.position,
    );

    const cardText = createElement(
      "p",
      ["card-text", "card-issuer"],
      exp.company,
    );

    const badge = createElement(
      "span",
      [
        "work-setup",
        "badge",
        `${exp.workSetup.toLowerCase()}`,
        "rounded-5",
        "pad-5",
      ],
      exp.workSetup,
    );

    const cardDescription = createElement("ul", [
      "card-description",
      "pb-3",
      "list-unstyled",
      "ps-4",
    ]);

    // Skills gained badges
    const badgeContainer = createElement("div", [
      "badge-container",
      "d-flex",
      "flex-wrap",
      "gap-2",
      "w-75",
    ]);

    // Experience duration
    const cardFooter = createElement("div", ["card-footer"], duration);

    // Assemble the experience card
    badgeContainer.appendChild(skillList);
    cardDescription.appendChild(descList);
    cardBody.append(
      cardTitle,
      cardText,
      badge,
      cardDescription,
      badgeContainer,
    );
    card.append(cardBody, cardFooter);
    container.appendChild(card);
  });
}

renderExperience();
