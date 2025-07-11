document.addEventListener("DOMContentLoaded", function () {
  const marquees = document.querySelectorAll(".marquee-container");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    marqueeAnimation();
  }

  function marqueeAnimation() {
    marquees.forEach((marquee) => {
      marquee.setAttribute("marquee-animation", true);
    });

    const content = document.querySelector(".marquee-content");
    const contentCopies = Array.from(content.children);

    contentCopies.forEach((child) => {
      const copies = child.cloneNode(true);
      copies.setAttribute("aria-hidden", true);

      content.appendChild(copies);
    });
  }
});
