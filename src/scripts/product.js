/**
 * Sentio POS interactions: mobile menu, screenshot lightbox and demo dialog.
 */
const menu = document.querySelector(".menu");
const nav = document.querySelector("#product-nav");
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});

const lightbox = document.querySelector("#screen-dialog");
document.querySelectorAll("[data-screen]").forEach((b) =>
  b.addEventListener("click", () => {
    const img = lightbox.querySelector("img");
    img.src = b.dataset.screen;
    img.alt = b.dataset.title;
    lightbox.querySelector("#screen-title").textContent = b.dataset.title;
    lightbox.showModal();
  })
);

// Demo CTAs are links to the enquiry form; show the demo brief first when JS is available.
const demo = document.querySelector("#demo-dialog");
document.querySelectorAll("[data-demo]").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    menu.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
    demo.showModal();
  })
);

document.querySelectorAll("dialog .close").forEach((b) => b.addEventListener("click", () => b.closest("dialog").close()));
document.querySelectorAll("dialog").forEach((d) =>
  d.addEventListener("click", (e) => {
    if (e.target !== d) return;
    const r = d.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();
  })
);

// Legal pages: the contents list is a collapsed disclosure on mobile and an open sidebar on wider screens.
const toc = document.querySelector(".legal-toc details");
if (toc) {
  const wide = matchMedia("(min-width: 761px)");
  const sync = () => (toc.open = wide.matches);
  sync();
  wide.addEventListener("change", sync);
  // Keep the sidebar open on wide screens (keyboard or scripted clicks would otherwise collapse it)
  toc.querySelector("summary").addEventListener("click", (e) => wide.matches && e.preventDefault());
}
