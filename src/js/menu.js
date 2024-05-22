const menuBtn = document.querySelector(".btn-menu");

if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
      document.documentElement.classList.toggle("menu-open");  
    })
}
