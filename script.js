(() => {
  const durationButtons = document.querySelectorAll(".duration-card");
  const summaryDuration = document.getElementById("summary-duration");
  const summaryTotal = document.getElementById("summary-total");
  const summaryRegular = document.getElementById("summary-regular");
  const buyButton = document.getElementById("buy-button");
  const buyConfirm = document.getElementById("buy-confirm");
  const startDate = document.getElementById("start-date");
  const header = document.querySelector(".site-header");
  const contactForm = document.querySelector(".contact-form");

  if (startDate && !startDate.value) {
    startDate.value = "2026-10-01";
  }

  durationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      durationButtons.forEach((item) => {
        item.classList.remove("is-selected");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("is-selected");
      button.setAttribute("aria-pressed", "true");

      const seconds = Number(button.dataset.seconds);
      const price = Number(button.dataset.price);
      const regular = Number(button.dataset.regular);

      if (summaryDuration) summaryDuration.textContent = `${seconds} s / min`;
      if (summaryTotal) summaryTotal.textContent = `${price} € / vrk`;
      if (summaryRegular) summaryRegular.textContent = `${regular} € / vrk`;
    });
  });

  if (buyButton && buyConfirm) {
    buyButton.addEventListener("click", () => {
      buyConfirm.hidden = false;
      buyButton.textContent = "Varattu";
      buyButton.disabled = true;
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const note = contactForm.querySelector(".buy-note");
      if (note) {
        note.textContent = "Viesti tallennettu paikallisesti — ota yhteyttä Ylöjärven Autohuolto Oy:hyn.";
      }
    });
  }

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
})();
