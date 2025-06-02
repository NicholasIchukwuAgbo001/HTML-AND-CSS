document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  });

  const animatedElements = document.querySelectorAll(".scroll-animate");
  animatedElements.forEach(element => observer.observe(element));
});


document.addEventListener('DOMContentLoaded', () => {
  const btnNav = document.querySelector('.btn-mobile-nav');
  const nav = document.querySelector('.nav-bar');
  const header = document.getElementById('header');

  btnNav.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });
});