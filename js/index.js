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

// Select elements outside the event handler
const hexagons = document.querySelectorAll('.hex');
const hexagonBeforeStyle = document.getElementById('hexagon-before');
const hexagonAfterStyle = document.getElementById('hexagon-after');

function resizeHexagons() {
    const width = window.innerWidth;

    hexagons.forEach(hexagon => {
        let hexagonWidth = width / 12.3;
        let hexagonHeight = hexagonWidth * 0.7;

        // Round down the dimensions
        hexagonWidth = Math.floor(hexagonWidth);
        hexagonHeight = Math.floor(hexagonHeight);

        hexagon.style.width = `${hexagonWidth}px`;
        hexagon.style.height = `${hexagonHeight}px`;

        hexagonBeforeStyle.innerHTML = `.hex:before{content:"";width:0;height:0;border-bottom:${Math.floor(hexagonWidth * 0.3)}px solid;border-color:inherit;border-left:${Math.floor(hexagonWidth * 0.5)}px solid transparent;border-right:${Math.floor(hexagonWidth * 0.5)}px solid transparent;position:absolute;top:-${Math.floor(hexagonWidth * 0.3)}px;right:0;}`;
        hexagonAfterStyle.innerHTML = `.hex:after{content:"";width:0;position:absolute;right:0;bottom:-${Math.floor(hexagonWidth * 0.3)}px;border-top:${Math.floor(hexagonWidth * 0.3)}px solid;border-color:inherit;border-left:${Math.floor(hexagonWidth * 0.5)}px solid transparent;border-right:${Math.floor(hexagonWidth * 0.5)}px solid transparent;}`;
    });
}

// Call the function initially and on window resize
resizeHexagons();
window.addEventListener('resize', resizeHexagons);
