// Formats a YYYY-MM value into human-readable month and year (e.g., October 2026)
function formatMonthYear(value) {
  const [year, month] = value.split("-");
  return new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

// Creates and returns a temporary container (document fragment) containing badge elements
function renderBadges(items) {
  const container = document.createDocumentFragment();

  items.forEach((item) => {
    const span = document.createElement("span");
    span.classList.add("badge");
    span.textContent = item;
    container.appendChild(span);
  });

  return container;
}

// Creates and returns a temporary container (document fragment) containing list items
function renderLists(lists) {
  const container = document.createDocumentFragment();
  lists.forEach((list) => {
    const li = document.createElement("li");
    li.classList.add("class-list");
    li.textContent = list;
    container.appendChild(li);
  });
  return container;
}

// Creates and returns an HTML element with specified classes and optional text
function createElement(tag, classes, text = "", id = "") {
  const element = document.createElement(tag);
  element.classList.add(...classes);

  if (text) {
    element.textContent = text;
  }
  if (id) {
    element.id = id;
  }

  return element;
}

// Returns capitalized each first letter
function toCapitalize(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
