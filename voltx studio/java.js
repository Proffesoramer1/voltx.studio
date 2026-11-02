 window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
    }, 1500);
});window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("main-content");

    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
    }, 1500);
});
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main-content");

    setTimeout(() => {
        loader.classList.add("hide");

        setTimeout(() => {
            main.classList.add("show");
        }, 1000);

    }, 1500);
});











 