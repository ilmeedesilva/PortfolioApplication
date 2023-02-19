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
