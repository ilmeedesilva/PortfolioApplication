const navlinks = document.querySelectorAll("menu-list ul li a");

const topNavigation = document.querySelector(".top_navigation");

function removeActiveNavLink() {
  navlinks.forEach((item) => {
    item.classList.remove("active_link");
  });
}

// function handleActiveNavLink(item) {
//   removeActiveNavLink();
//   item.classList.add("active_link");
// }

// navlinks.forEach((item) => {
//   item.addEventListener("click", () => {
//     handleActiveNavLink(item);
//   });
// });

// window.onscroll = function () {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     topNavigation.classList.add("top_navigation_scroll");
//   } else {
//     topNavigation.classList.remove("top_navigation_scroll");
//   }
// };

// const activeLink = localStorage.getItem("activeLink");

// if (activeLink) {
//   const activeLi = document.querySelector(
//     `.top_nav_right ul li a[href='${activeLink}']`
//   ).parentElement;
//   activeLi.classList.add("active_link");
// }

// const links = document.querySelectorAll(".top_nav_right ul li a");
// links.forEach((link) => {
//   link.addEventListener("click", (event) => {
//     links.forEach((link) => {
//       link.parentElement.classList.remove("active_link");
//     });

//     event.target.parentElement.classList.add("active_link");

//     localStorage.setItem("activeLink", event.target.getAttribute("href"));
//   });
// });

document.addEventListener("DOMContentLoaded", function (event) {
  const navAnch = document.querySelectorAll(".top_nav_right ul li");
  var currentPath = window.location.pathname;
  removeActiveNavLink();

  navAnch.forEach((a) => {
    if (currentPath.includes("project")) {
      if (a.textContent.includes("Project")) {
        a.classList.add("active_link");
      }
    } else if (currentPath.includes("index")) {
      if (a.textContent.includes("Home")) {
        a.classList.add("active_link");
      }
    } else if (currentPath.includes("about")) {
      if (a.textContent.includes("About")) {
        a.classList.add("active_link");
      }
    } else if (currentPath.includes("contact")) {
      if (a.textContent.includes("Contact")) {
        a.classList.add("active_link");
      }
    } else {
      navAnch[0].classList.add("active_link");
    }
  });
});
