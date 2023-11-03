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

window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const hexagons = document.querySelectorAll('.hex');

    const hexagonBeforeStyle = document.getElementById('hexagon-before');
    const hexagonAfterStyle = document.getElementById('hexagon-after');

    if (width < 1280) {
        hexagons.forEach(hexagon => {
            const hexagonWidth = width / 12.3;
            const hexagonHeight = hexagonWidth * 0.62;

            hexagon.style.width = `${hexagonWidth}px`;
            hexagon.style.height = `${hexagonHeight}px`;

            hexagonBeforeStyle.innerHTML = `.hex:before{content:"";width:0;height:0;border-bottom:${hexagonWidth * 0.3}px solid;border-color:inherit;border-left:${hexagonWidth * 0.5}px solid transparent;border-right:${hexagonWidth * 0.5}px solid transparent;position:absolute;top:-${hexagonWidth * 0.3}px;right:0px;}`
            hexagonAfterStyle.innerHTML = `.hex:after{content:"";width:0;position:absolute;right:0px;bottom:-${hexagonWidth * 0.3}px;border-top:${hexagonWidth * 0.3}px solid;border-color:inherit;border-left: ${hexagonWidth * 0.5}px solid transparent;border-right: ${hexagonWidth * 0.5}px solid transparent;}`
        });

        
    }
});


