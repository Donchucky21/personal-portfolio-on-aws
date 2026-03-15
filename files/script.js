const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    const mailSubject = encodeURIComponent(`Portfolio enquiry: ${subject}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
    );

    statusText.textContent = "Opening your email app...";
    window.location.href = `mailto:donchucky21@gmail.com?subject=${mailSubject}&body=${body}`;

    setTimeout(() => {
      statusText.textContent = "If nothing opened, email me directly at donchucky21@gmail.com.";
    }, 1200);
  });
}
