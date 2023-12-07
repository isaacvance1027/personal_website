document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header");

    setTimeout(() => {
        header.classList.add("active");
    }, 50);

});

// Select elements outside the event handler
const hexagons = document.querySelectorAll('.hex');

const hexagonBeforeStyle = document.getElementById('hexagon-before');
const hexagonAfterStyle = document.getElementById('hexagon-after');

const hexagonBeforeHoverStyle = document.getElementById('hexagon-before-hover');
const hexagonAfterHoverStyle = document.getElementById('hexagon-after-hover');

// Select Individual Projects
const projects = document.querySelectorAll('.project');

// Select TopMost Tab
const projectsTab = document.querySelector('.projects');

const numProjects = projects.length;

projects.forEach((project, i) => {
    // Set the position and zIndex of each project in descending order
    project.style.zIndex = ((numProjects - 1 - i) * 5).toString();
    project.addEventListener("click", () => {
        window.location.href = project.dataset.url;
    })
});

// Control Project Tab Extending Downward
projectsTab.addEventListener('mouseover', () => {
    projects.forEach((project, i) => {
        project.style.transform = `translateX(${(i * -103)}%)`;
    });
});

projectsTab.addEventListener('mouseout', () => {
    projects.forEach((project, i) => {
        project.style.transform = `translateY(0)`;
    });
});

// Select Resume div and reload 
const resume = document.getElementById('resume');

resume.addEventListener("click", () => {
    // Change the window.location.href to the desired URL
    window.location.href = "./images/Isaac Vance's Resume.pdf";
});

// Is this too much voodoo lmao; DOM manip is too damn wordy
function resizeHexagons() {

    const width = window.innerWidth;

    // Define a shared parameter for hexagon styling calculations
    const baseParameter = width / 12.3;

    hexagons.forEach(hexagon => {

        // I can't be bothered lol
        hexagon.classList.add('shadow-lg');

        let hexagonWidth, hexagonHeight, marginTop, textSize;

        if (width < 1280 && width > 750) {
            hexagonWidth = Math.floor(baseParameter);
            hexagonHeight = Math.floor(hexagonWidth * 0.7);
            marginTop = 3.25;
            textSize = 1.5;
        } else if (width < 750) {
            hexagonWidth = 61;
            hexagonHeight = 42;
            marginTop = 2.25;
            textSize = 1.25;
        } else if (width > 1280) {
            hexagonWidth = 104;
            hexagonHeight = 72;
            marginTop = 4;
            textSize = 2;
        }

        hexagon.style.width = `${hexagonWidth}px`;
        hexagon.style.height = `${hexagonHeight}px`;
        hexagon.style.marginTop = `${marginTop}rem`;
        hexagon.style.fontSize = `${textSize}rem`;

        const beforePseudoElementStyle = `
            content: "";
            width: 0;
            height: 0;
            border-bottom: ${Math.floor(hexagonWidth * 0.3)}px solid;
            border-color: inherit;
            border-left: ${Math.floor(hexagonWidth * 0.5)}px solid transparent;
            border-right: ${Math.floor(hexagonWidth * 0.5)}px solid transparent;
            position: absolute;
            top: -${Math.floor(hexagonWidth * 0.3)}px;
            right: 0;
        `;

        const afterPseudoElementStyle = `
            content: "";
            width: 0;
            position: absolute;
            right: 0;
            bottom: -${Math.floor(hexagonWidth * 0.3)}px;
            border-top: ${Math.floor(hexagonWidth * 0.3)}px solid;
            border-color: inherit;
            border-left: ${Math.floor(hexagonWidth * 0.5)}px solid transparent;
            border-right: ${Math.floor(hexagonWidth * 0.5)}px solid transparent;
        `;

        hexagonBeforeStyle.innerHTML = `.hex::before { ${beforePseudoElementStyle} }`;
        hexagonAfterStyle.innerHTML = `.hex::after { ${afterPseudoElementStyle} }`;

        const hoverBeforePseudoElementStyle = beforePseudoElementStyle.replace(
            'border-color: inherit',
            'border-color: white'
        );

        const hoverAfterPseudoElementStyle = afterPseudoElementStyle.replace(
            'border-color: inherit',
            'border-color: white' // Change this color to your desired color for ::after on hover
        );

        hexagonBeforeHoverStyle.innerHTML = `.hex:hover::before { ${hoverBeforePseudoElementStyle} }`;
        hexagonAfterHoverStyle.innerHTML = `.hex:hover::after { ${hoverAfterPseudoElementStyle} }`;
    });
}

// Call the function initially and on window resize
resizeHexagons();
window.addEventListener('resize', resizeHexagons);