const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.14,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const filterButtons = document.querySelectorAll(".filter-button");
const opportunityCards = document.querySelectorAll(".opportunity-grid .content-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { filter } = button.dataset;

    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    opportunityCards.forEach((card) => {
      const tags = (card.dataset.tags || "").split(" ");
      const matches = filter === "all" || tags.includes(filter);
      card.classList.toggle("is-hidden", !matches);
    });
  });
});
