function formatMonthYear(value) {
  const [year, month] = value.split("-");
  return new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

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
