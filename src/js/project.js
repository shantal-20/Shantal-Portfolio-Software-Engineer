let projects = [
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

  projects.forEach((proj) => {
    const date = formatMonthYear(proj.date);

    const programmingList = renderBadges(proj.language);

    //Card Wrapper
    const card = document.createElement("div");
    card.classList.add("card", "project", "project-card");

    //Card Image
    const img = document.createElement("img");
    img.src = proj.image;
    img.alt = proj.name;
    img.loading = "lazy";
    img.classList.add("card-img-top");

    //Card Body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "d-flex", "flex-column");

    //Card Upper part
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info-container");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title", "fw-semibold", "fs-5");
    cardTitle.textContent = proj.name;

    const cardText = document.createElement("p");
    cardText.classList.add(
      "card-text",
      "card-description",
      "fs-6",
      "text-justify",
      "mt-3",
    );
    cardText.textContent = proj.desc;

    //Card Bottom part
    const cardBottomContent = document.createElement("div");
    cardBottomContent.classList.add("card-bottom-content", "mt-auto");

    //Badge Container
    const badgeContainer = document.createElement("div");
    badgeContainer.classList.add(
      "badge-container",
      "d-flex",
      "flex-wrap",
      "gap-1",
      "mt-5",
    );
    badgeContainer.style.width = "275px";

    //Button Container
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add(
      "button-container",
      "d-flex",
      "mt-3",
      "gap-2",
    );

    //View Button
    const viewButton = document.createElement("a");
    viewButton.classList.add("btn", "btn-outline-primary");
    viewButton.href = proj.src;
    viewButton.target = "_blank";
    viewButton.textContent = "View Website";
    viewButton.rel = "noopener noreferrer";

    const viewIcon = document.createElement("i");
    viewIcon.classList.add("bi", "bi-arrow-up-right", "ms-1");
    viewButton.appendChild(viewIcon);

    //Show Details Button
    const showDetailButton = document.createElement("button");
    showDetailButton.type = "button";
    showDetailButton.classList.add("btn", "btn-primary");
    showDetailButton.textContent = "Show Detail";

    const showIcon = document.createElement("i");
    showIcon.classList.add("bi", "bi-arrow-right", "ms-1");
    showDetailButton.appendChild(showIcon);

    //Card Footer
    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "text-body-secondary");
    cardFooter.textContent = `Last Updated: ${date}`;

    buttonContainer.appendChild(viewButton);
    badgeContainer.appendChild(programmingList);
    cardBottomContent.append(badgeContainer, buttonContainer);
    cardInfo.append(cardTitle, cardText);
    cardBody.append(cardInfo, cardBottomContent);
    card.append(img, cardBody, cardFooter);
    container.appendChild(card);
  });
}

if (projects.length > 0) {
  renderProjects();
} else {
  const container = document.getElementById("project");

  container.innerHTML = `<div class="card empty-project" >
  <img src="src/assets/images/portfolio/No-Image.png" 
      class="card-img-top" alt="No Project Image" />

  <div class="card-body d-flex flex-column">
    <div>
      <h5 class="card-title fw-semibold fs-5">No Project Available</h5>
      <p class="card-text fs-6 text-justify mt-3">
        This section will highlight completed works and technical contributions. Future projects will demonstrate applied skills and problem‑solving capabilities.
      </p>
      <p class="card-text fs-6 text-justify mt-2">
        Projects will be added as development milestones are completed.
      </p>
    </div>
    <div class="mt-auto">
      <div class="badge-container d-flex flex-wrap gap-1 mt-5" style="width: 250px">
        <span class="badge bg-secondary">No Tech Listed</span>
      </div>
    </div>
  </div>
  <div class="card-footer text-body-secondary">Last Updated: —</div>
</div>`;
}
