const toggleIcon =  document.getElementById("toggleIcon");
const nav = document.querySelector("header nav");

toggleIcon.addEventListener("click", () => {
    nav.classList.toggle("show");
})