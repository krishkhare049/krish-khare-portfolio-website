// const PAGE_SWIPER = new Swiper('.page_swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,

// If we need pagination
// pagination: {
//   el: '.swiper-pagination',
// },

// Navigation arrows
// navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
// },

// And if we need scrollbar
// scrollbar: {
//   el: '.swiper-scrollbar',
// },
// });

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


let home_page = document.getElementById("home_page");
let projects_page = document.getElementById("projects_page");
let aboutme_page = document.getElementById("aboutme_page");
let contact_page = document.getElementById("contact_page");

let home_icon = document.getElementById("home_icon");
let projects_icon = document.getElementById("projects_icon");
let aboutme_icon = document.getElementById("aboutme_icon");
let contact_icon = document.getElementById("contact_icon");

let smooth_scroll_to_top = document.getElementById("smooth_scroll_to_top");

let loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// window.addEventListener("scroll", () => {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     smooth_scroll_to_top.style.display = "flex";
//   }
//   else {
//     smooth_scroll_to_top.style.display = "none";

//   }
// });
document.body.addEventListener("scroll", () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    smooth_scroll_to_top.style.display = "flex";
  }
  else {
    smooth_scroll_to_top.style.display = "none";
  }
});

smooth_scroll_to_top.addEventListener("click", () => {
  // console.log("Scroll to top!");
  // window.scrollTo(0, 0);
  document.body.scrollTo(0, 0);
});


let check_home = document.querySelectorAll(".check_home");
let check_projects = document.querySelectorAll(".check_projects");
let check_aboutme = document.querySelectorAll(".check_aboutme");
let check_contact = document.querySelectorAll(".check_contact");

check_home.forEach(check_home_element => {
  check_home_element.addEventListener("click", () => {
    router.navigate("");
  });
});

check_projects.forEach(check_projects_element => {
  check_projects_element.addEventListener("click", () => {
    router.navigate("projects");
  });
});

check_aboutme.forEach(check_aboutme_element => {
  check_aboutme_element.addEventListener("click", () => {
    router.navigate("about_me");
  });
});

check_contact.forEach(check_contact_element => {
  check_contact_element.addEventListener("click", () => {
    router.navigate("contact");
  });
});


var collage_swiper = new Swiper('.collage_swiper', {
  loop: true,
  // autoHeight: true, //enable auto height

  effect: 'cards',

  grabCursor: true,
  // cubeEffect: {
  //   shadow: true,
  //   slideShadows: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
