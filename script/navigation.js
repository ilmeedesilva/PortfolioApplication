const navlinks = document.querySelectorAll(".top_nav_right ul li a")

function removeActiveNavLink()
{
    navlinks.forEach((item)=>{
        item.classList.remove("active_link")
    })
}

function handleActiveNavLink(item)
{
    removeActiveNavLink()
    item.classList.add("active_link")
}

navlinks.forEach((item)=>{
    item.addEventListener("click", ()=>{handleActiveNavLink(item)})
})