document.addEventListener("DOMContentLoaded", function () {

    const header = document.querySelector(".header");

    setTimeout(() => {
        header.classList.add("active");
    }, 50);

    // Get all sections below header
    const sections = document.querySelectorAll("section");

    
    // Check if the section top of each section is within half of the window
    function checkScroll() {
        sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight / 2) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        });
    };

     // Initial check when the page loads
    checkScroll();

    // Check when scrolling
    window.addEventListener("scroll", checkScroll);
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
    // Make project tabs be white, but add event listeners for hover
    projects.forEach((project, i) => {
        project.style.transform = `translateX(${(i * -103)}%)`;
        project.style.color = 'white';
    });
});

projectsTab.addEventListener('mouseout', () => {
    projects.forEach((project, i) => {
        project.style.transform = `translateY(0)`;
        project.style.color = '#343a40';
    });
});

// Select Resume div and reload 
const resume = document.getElementById('resume');

resume.addEventListener("click", () => {
    // Change the window.location.href to the desired URL
    window.location.href = "./images/Isaac Vance's resume.pdf";
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
            border-bottom: ${Math.ceil(hexagonWidth * 0.3)}px solid;
            border-color: inherit;
            border-left: ${Math.ceil(hexagonWidth * 0.5)}px solid transparent;
            border-right: ${Math.ceil(hexagonWidth * 0.5)}px solid transparent;
            position: absolute;
            top: -${Math.ceil(hexagonWidth * 0.3)}px;
            right: 0;
        `;

        const afterPseudoElementStyle = `
            content: "";
            width: 0;
            position: absolute;
            right: 0;
            bottom: -${Math.ceil(hexagonWidth * 0.3)}px;
            border-top: ${Math.ceil(hexagonWidth * 0.3)}px solid;
            border-color: inherit;
            border-left: ${Math.ceil(hexagonWidth * 0.5)}px solid transparent;
            border-right: ${Math.ceil(hexagonWidth * 0.5)}px solid transparent;
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

        hexagonBeforeHoverStyle.innerHTML = `.hex:hover:before { ${hoverBeforePseudoElementStyle} }`;
        hexagonAfterHoverStyle.innerHTML = `.hex:hover:after { ${hoverAfterPseudoElementStyle} }`;
    });
}

// Call the function initially and on window resize
resizeHexagons();
window.addEventListener('resize', resizeHexagons);

// Functionality for Bio Button Scrolling
const bio = document.getElementById('bio');

function scrollToBio() {

    // Scrolling Edits since scrollIntoView method is terrible

    const target = document.getElementById('about_skills');
    const yOffset = -40;
    const y = target.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top : y, behavior : 'smooth'});
};

bio.addEventListener('click', scrollToBio);

// Blockquote redirect 
const alanQuote = document.getElementById('alanQuote');

alanQuote.addEventListener('click', () => {
    window.location.href = alanQuote.dataset.url;
});

// Audio Stuff
const audioCaption = document.getElementById('audio-caption');
const playAudio = document.getElementById('play-audio');
const musicSection = document.getElementById('music');

playAudio.addEventListener('play', () => {
    audioCaption.innerHTML = 'Playing Move Too Fast';

    musicSection.scrollIntoView({ behavior: 'smooth'});
})

playAudio.addEventListener('pause', () => {
    audioCaption.innerHTML = 'Click for 🎵'
})