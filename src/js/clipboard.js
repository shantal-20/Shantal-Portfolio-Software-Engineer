document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    const item = button.closest(".contact-item");
    const value = item.querySelector(".contact-link").textContent.trim();
    const icon = button.querySelector("i");

    try {
      await navigator.clipboard.writeText(value);

      icon.className = "bi bi-check2";
      button.title = "Copied!";
      button.setAttribute("aria-label", "Copied!");

      setTimeout(() => {
        icon.className = "bi bi-copy";
        button.title =
          button.id === "copy-phone"
            ? "Copy phone number"
            : "Copy email address";
        button.setAttribute(
          "aria-label",
          button.id === "copy-phone"
            ? "Copy phone number"
            : "Copy email address",
        );
      }, 1500);
    } catch (error) {
      console.error("Unable to copy text:", error);
    }
  });
});
