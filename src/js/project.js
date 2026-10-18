// Projects Data
const projects = [
  {
    name: "Mamyr Resort Event Management System",
    desc: `A web-based system for managing event reservation, hotel accommodations, and resort pool bookings at Mamyr Resort in San Ildefonso, Bulacan`,
    language: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    date: "2025-12",
    image: "src/assets/images/portfolio/project/Mamyr-System.png",
    src: "https://mamyrresort128.com/",
  },
  {
    name: "Grade Weighted Average (GWA) Calculator",
    desc: `A web-based tool designed to help students compute their Grade Weighted Average with precision. It simplifies grade tracking by allowing easy input of subjects, units, and grades.`,
    language: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    date: "2025-06",
    image: "src/assets/images/portfolio/project/GWA-Calc.png",
    src: "https://shantal-20.github.io/Gwa-Calculator/",
  },
];

function renderProjects() {
  const container = document.getElementById("project");

  if (!container) return;

  container.replaceChildren();

  // Display an empty state when no projects are available
  if (projects.length === 0) {
    container.innerHTML = `
    <div class="card empty-project">
      <img
        src="src/assets/images/portfolio/No-Image.png"
        class="card-img-top"
        alt="No Project Image"
      />

      <div class="card-body d-flex flex-column">
        <div>
          <h5 class="card-title fw-semibold fs-5">No Project Available</h5>
          <p class="card-text fs-6 text-justify mt-3">
            This section will highlight completed works and technical
            contributions. Future projects will demonstrate applied skills and
            problem‑solving capabilities.
          </p>
          <p class="card-text fs-6 text-justify mt-2">
            Projects will be added as development milestones are completed.
          </p>
        </div>
        <div class="mt-auto">
          <div
            class="badge-container d-flex flex-wrap gap-1 mt-5"
            style="width: 250px"
          >
            <span class="badge bg-secondary">No Tech Listed</span>
          </div>
        </div>
      </div>
      <div class="card-footer text-body-secondary">Last Updated: —</div>
    </div>`;
    return;
  }

  projects.forEach((proj) => {
    // Format date
    const date = formatMonthYear(proj.date);

    // Create language badges
    const programmingList = renderBadges(proj.language);

    // Project card
    const card = createElement("div", ["project", "card", "project-card"]);

    // Project image
    const img = createElement("img", ["card-img-top"]);
    img.src = proj.image;
    img.alt = proj.name;
    img.loading = "lazy";

    // Project body
    const cardBody = createElement("div", [
      "card-body",
      "d-flex",
      "flex-column",
    ]);

    // Project details
    const cardInfo = createElement("div", ["card-info-container"]);

    const cardTitle = createElement(
      "h5",
      ["card-title", "fw-semibold", "fs-5"],
      proj.name,
    );

    const cardText = createElement(
      "p",
      ["card-text", "card-description", "fs-6", "text-justify", "mt-3"],
      proj.desc,
    );

    // Project bottom content container
    const cardBottomContent = createElement("div", [
      "card-bottom-content",
      "mt-auto",
    ]);

    // Project language badges
    const badgeContainer = createElement("div", [
      "badge-container",
      "d-flex",
      "flex-wrap",
      "gap-1",
      "mt-5",
    ]);
    badgeContainer.style.width = "275px";

    // Project button container
    const buttonContainer = createElement("div", [
      "button-container",
      "d-flex",
      "mt-3",
      "gap-2",
    ]);

    // View project button
    const viewButton = createElement("a", ["btn", "btn-outline-primary"]);
    viewButton.href = proj.src;
    viewButton.target = "_blank";
    viewButton.textContent = "View Website";
    viewButton.rel = "noopener noreferrer";

    const viewIcon = createElement("i", ["bi", "bi-arrow-up-right", "ms-1"]);
    viewButton.appendChild(viewIcon);

    // Show Details Button
    // const showDetailButton = createElement("button", ["btn", "btn-primary"]);
    // showDetailButton.type = "button";
    // showDetailButton.classList.add();
    // showDetailButton.textContent = "Show Detail";

    // const showIcon = createElement("i", ["bi", "bi-arrow-right", "ms-1"]);
    // showDetailButton.appendChild(showIcon);

    // Project last updated date
    const cardFooter = createElement(
      "div",
      ["card-footer", "text-body-secondary"],
      `Last Updated: ${date}`,
    );

    // Assemble project card
    buttonContainer.appendChild(viewButton);
    badgeContainer.appendChild(programmingList);
    cardBottomContent.append(badgeContainer, buttonContainer);
    cardInfo.append(cardTitle, cardText);
    cardBody.append(cardInfo, cardBottomContent);
    card.append(img, cardBody, cardFooter);
    container.appendChild(card);
  });
}

renderProjects();
