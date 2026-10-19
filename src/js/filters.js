// Tech stack filter
const skillOptions = document.querySelectorAll(".skill-options");
const skillCategories = document.querySelectorAll(".skill-category");

skillOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedOption = option.dataset.category;

    skillOptions.forEach((btn) => {
      btn.classList.remove("active");
    });

    option.classList.add("active");

    skillCategories.forEach((category) => {
      category.style.display =
        selectedOption === "all" || category.id === `${selectedOption}-category`
          ? "block"
          : "none";
    });
  });
});

// Portfolio filter
const portfolioFilters = document.querySelectorAll(".portfolio-filter");
const portfolioSection = document.querySelectorAll(".portfolio-section");

portfolioFilters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedBtn = btn.dataset.category;

    portfolioFilters.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");

    portfolioSection.forEach((section) => {
      const selectedSection = section.id;
      section.style.display = selectedSection === selectedBtn ? "flex" : "none";
    });
  });
});
