
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const bookingForm = document.querySelector('#bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.querySelector('#formStatus');
    status.textContent = "Your booking form is ready. Connect it to Formspree, EmailJS, or your preferred form service before going live.";
    status.style.color = "#ff5a5a";
  });
}
