// Returns Devicon url
const getDeviconURL = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
// Returns icon local image path
const getIconPath = (icon) => `src/assets/images/icon/${icon}.png`;

const skills = {
  html: { name: "HTML", icon: getDeviconURL("html5") },
  css: { name: "CSS", icon: getDeviconURL("css3") },
  javascript: { name: "JavaScript", icon: getDeviconURL("javascript") },
  bootstrap: { name: "Bootstrap", icon: getDeviconURL("bootstrap") },
  php: { name: "PHP", icon: getDeviconURL("php") },
  mysql: { name: "MySQL", icon: getDeviconURL("mysql") },
  laravel: { name: "Laravel", icon: getDeviconURL("laravel") },
  react: { name: "React", icon: getDeviconURL("react") },
};

// Tech stack data
const technologies = [
  {
    category: "frontend",
    title: "frontend",
    skills: ["html", "css", "javascript", "bootstrap", "react"],
  },
  {
    category: "backend",
    title: "backend",
    skills: ["php", "mysql", "laravel"],
  },
  {
    category: "programming",
    title: "programming languages",
    skills: ["php", "javascript"],
  },
  {
    category: "framework",
    title: "frameworks & libraries",
    skills: ["bootstrap", "react", "laravel"],
  },
  {
    category: "tool",
    title: "tools",
    skills: [
      { name: "Git", icon: getDeviconURL("git") },
      { name: "Github", icon: getDeviconURL("github") },
      { name: "XAMPP", icon: getIconPath("xampp") },
      { name: "VS Code", icon: getDeviconURL("vscode") },
      { name: "Canva", icon: getDeviconURL("canva") },
      { name: "Microsoft Excel", icon: getIconPath("microsoft_office_excel") },
      { name: "Microsoft Word", icon: getIconPath("microsoft_office_word") },
    ],
  },
  {
    category: "learning",
    title: "learning",
    skills: ["react", "laravel"],
  },
];

function renderSkillCategories() {
  const skillCategoriesContainer = document.getElementById("skill-container");

  if (!skillCategoriesContainer) return;

  technologies.forEach((category) => {
    const categoryContainer = createElement(
      "div",
      ["skill-category"],
      "",
      `${category.category}-category`,
    );

    const categoryTitle = createElement(
      "h3",
      ["skill-category-title"],
      `${toCapitalize(category.title)}`,
    );

    const skillContainer = createElement("div", ["skill-list"]);

    category.skills.forEach((key) => {
      const skillData = category.category === "tool" ? key : skills[key];
      const skillCard = createElement("div", ["skill-card"]);
      const skillIcon = createElement("img", ["skill-icon"]);
      skillIcon.src = skillData.icon;
      skillIcon.alt = skillData.name;
      const skillName = createElement("p", ["skill-name"], skillData.name);

      skillCard.append(skillIcon, skillName);
      skillContainer.append(skillCard);
    });

    categoryContainer.append(categoryTitle, skillContainer);
    skillCategoriesContainer.appendChild(categoryContainer);
  });
}
renderSkillCategories();
