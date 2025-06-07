function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      target.classList.toggle("active", isIntersecting);
    });
  });
  document.querySelectorAll(".scroll-animate").forEach((element) => {
    observer.observe(element);
  });
}
document.addEventListener("DOMContentLoaded", animateOnScroll);


function toggleMobileNav() {
  const header = document.getElementById('header');
  header.classList.toggle('nav-open');
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn-mobile-nav').addEventListener('click', toggleMobileNav);
});