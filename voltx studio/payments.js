
// Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// Close Menu After Clicking

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// FAQ Accordion

const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {

    question.addEventListener("click", function() {

        const currentItem = question.parentElement;
        const answer = currentItem.querySelector(".faq-answer");

        const isOpen = currentItem.classList.contains("active");

        document.querySelectorAll(".faq-item").forEach(function(item) {

            item.classList.remove("active");
            item.querySelector(".faq-answer").style.maxHeight = null;

        });

        if (!isOpen) {

            currentItem.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});
