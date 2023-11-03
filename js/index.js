// Custom scripts for Index Page

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    async function activeAdd() {
        return new Promise((resolve, reject) => {
            header.addEventListener("transitionend", () => {
                resolve();
            });

            header.classList.add("active");
        });
    }

    activeAdd().then(() => {
        setTimeout(() => {
            header.classList.add("gradient");
        }, 250);
    });
});