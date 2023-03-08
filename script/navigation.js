const navlinks = document.querySelectorAll("menu-list ul li a");

const topNavigation = document.querySelector(".top_navigation");

function removeActiveNavLink() {
  navlinks.forEach((item) => {
    item.classList.remove("active_link");
  });
}

function handleActiveNavLink(item) {
  removeActiveNavLink();
  item.classList.add("active_link");
}

navlinks.forEach((item) => {
  item.addEventListener("click", () => {
    handleActiveNavLink(item);
  });
});

window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topNavigation.classList.add("top_navigation_scroll");
  } else {
    topNavigation.classList.remove("top_navigation_scroll");
  }
};

const activeLink = localStorage.getItem("activeLink");

if (activeLink) {
  const activeLi = document.querySelector(
    `.top_nav_right ul li a[href='${activeLink}']`
  ).parentElement;
  activeLi.classList.add("active_link");
}

const links = document.querySelectorAll(".top_nav_right ul li a");
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    links.forEach((link) => {
      link.parentElement.classList.remove("active_link");
    });

    event.target.parentElement.classList.add("active_link");

    localStorage.setItem("activeLink", event.target.getAttribute("href"));
  });
});
