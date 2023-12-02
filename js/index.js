const navbar = document.getElementById("navbar");
const menuBar = document.getElementById("menu-bar");

const menuToggle = () => {
  navbar.classList.toggle("active");
  menuBar.classList.toggle("fa-times");
};

menuBar.addEventListener("click", menuToggle);

// close search form

const searchForm = document.getElementById("search-form");
const closeBtn = document.getElementById("close");
const searchBar = document.getElementById("searchbar");

closeBtn.onclick = () => {
  // searchForm.style.display = 'none';
  searchForm.classList.remove("active");
};

searchBar.onclick = () => {
  // searchForm.style.display = 'flex';
  searchForm.classList.add("active");
};

// slider

$(".reviews").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
  },
});

const preLoader = () => {
  // document.querySelector('.loader').classList.add('.fade-out');
  document.querySelector(".loader").style.display = "none";
};

const fadeOut = () => {
  setInterval(preLoader, 2000);
};

window.onload = fadeOut;
