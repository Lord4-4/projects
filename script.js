document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".reveal");
    function reveal() {
        elements.forEach((el) => {
            let windowHeight = window.innerHeight;
            let elementTop = el.getBoundingClientRect().top;
            let elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal();
});

function expandProject(element) {
    element.style.transform = "scale(1.1)";
    element.style.transition = "transform 0.3s ease-in-out";
}
function shrinkProject(element) {
    element.style.transform = "scale(1)";
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
