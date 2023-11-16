// Custom scripts for Index Page

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

// Select Resume div and reload 
const resume = document.getElementById('resume');

resume.addEventListener("click", function() {
    // Change the window.location.href to the desired URL
    window.location.href = "./images/Isaac Vance's Resume.pdf";
});

// Is this too much voodoo lmao; DOM manip is too damn wordy
function resizeHexagons() {

    const width = window.innerWidth;

    hexagons.forEach(hexagon => {

        let hexagonWidth = width / 12.3;
        let hexagonHeight = hexagonWidth * 0.7;

        let hexagonBeforeStyling = `.hex:before{content:"";width:0;height:0;border-bottom:${Math.floor(hexagonWidth * 0.3)}px solid;border-color:inherit;border-left:${Math.floor(hexagonWidth * 0.5)}px solid transparent;border-right:${Math.floor(hexagonWidth * 0.5)}px solid transparent;position:absolute;top:-${Math.floor(hexagonWidth * 0.3)}px;right:0;}`;
        let hexagonAfterStyling = `.hex:after{content:"";width:0;position:absolute;right:0;bottom:-${Math.floor(hexagonWidth * 0.3)}px;border-top:${Math.floor(hexagonWidth * 0.3)}px solid;border-color:inherit;border-left:${Math.floor(hexagonWidth * 0.5)}px solid transparent;border-right:${Math.floor(hexagonWidth * 0.5)}px solid transparent;}`;
       
        if (width < 1280 && width > 750) {

            // Round down the dimensions
            hexagonWidth = Math.floor(hexagonWidth);
            hexagonHeight = Math.floor(hexagonHeight);

            hexagon.style.width = `${hexagonWidth}px`;
            hexagon.style.height = `${hexagonHeight}px`;

            hexagonBeforeStyle.innerHTML = hexagonBeforeStyling;
            hexagonAfterStyle.innerHTML = hexagonAfterStyling;

            /*
                Unfortunately this needs to be calculated on the fly;
                If you define the stupid CSS properties of the hex
                pseudo-elements, it invalidates the DOM manip., 
                so EVERYTHING has to be calculated on the fly; 
                actually fake and dog shit
            */

            hexagonBeforeHoverStyle.innerHTML = ".hex:hover::before" + hexagonBeforeStyling.slice(11).replace('border-color:inherit', 'border-color:#0080ff');
            hexagonAfterHoverStyle.innerHTML = ".hex:hover::after" + hexagonAfterStyling.slice(10).replace('border-color:inherit', 'border-color:#0080ff');
        
        } else if (width < 750) {

            hexagonWidth = '64px';
            hexagonHeight = '44.8px';

            widthCalc = Math.floor(parseInt(hexagonWidth));
    
            hexagon.style.width = hexagonWidth;
            hexagon.style.height = hexagonHeight;

            // Need to make this transformation first so hover styling doesn't use stylings up in scope
            hexagonBeforeStyling = `.hex:before{content:"";width:0;height:0;border-bottom:${widthCalc * 0.3}px solid;border-color:inherit;border-left:${widthCalc * 0.5}px solid transparent;border-right:${widthCalc * 0.5}px solid transparent;position:absolute;top:-${widthCalc * 0.3}px;right:0;}`;
            hexagonAfterStyling = `.hex:after{content:"";width:0;position:absolute;right:0;bottom:-${widthCalc * 0.3}px;border-top:${widthCalc * 0.3}px solid;border-color:inherit;border-left:${widthCalc * 0.5}px solid transparent;border-right:${widthCalc * 0.5}px solid transparent;}`;

            hexagonBeforeStyle.innerHTML = hexagonBeforeStyling;
            hexagonAfterStyle.innerHTML = hexagonAfterStyling;
             
            // This is the simplest way I can think to transform the existing pseudo styles for hovering
            hexagonBeforeHoverStyle.innerHTML = ".hex:hover::before" + hexagonBeforeStyling.slice(11).replace('border-color:inherit', 'border-color:#0080ff');
            hexagonAfterHoverStyle.innerHTML = ".hex:hover::after" + hexagonAfterStyling.slice(10).replace('border-color:inherit', 'border-color:#0080ff');
       
        } else if (width > 1280) {

            hexagon.style.width = '104px';
            hexagon.style.height = '72px';

            hexagonBeforeStyling = `.hex:before{content:"";width:0;height:0;border-bottom:31.2px solid;border-color:inherit;border-left:52px solid transparent;border-right:52px solid transparent;position:absolute;top:-31.2px;right:0;}`;
            hexagonAfterStyling = `.hex:after{content:"";width:0;position:absolute;right:0;bottom:-31.2px;border-top:31.2px solid;border-color:inherit;border-left:52px solid transparent;border-right:52px solid transparent;}`;
                        
            hexagonBeforeStyle.innerHTML = hexagonBeforeStyling;
            hexagonAfterStyle.innerHTML = hexagonAfterStyling;

            hexagonBeforeHoverStyle.innerHTML = ".hex:hover::before" + hexagonBeforeStyling.slice(11).replace('border-color:inherit', 'border-color:#0080ff');
            hexagonAfterHoverStyle.innerHTML = ".hex:hover::after" + hexagonAfterStyling.slice(10).replace('border-color:inherit', 'border-color:#0080ff');
            
        };

    });
  
}

// Call the function initially and on window resize
resizeHexagons();
window.addEventListener('resize', resizeHexagons);
