document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    const sign = detail.querySelector("summary span");
    if (sign) sign.textContent = detail.open ? "−" : "+";
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.08});

document.querySelectorAll(".case-card,.principle,.proof-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(14px)";
  el.style.transition = "opacity .55s ease, transform .55s ease";
  observer.observe(el);
});

const style = document.createElement("style");
style.textContent = ".visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
