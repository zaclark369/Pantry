// calculate correct height for masthead

calculateHeight = () => {
    // get the header and masthead elements
    const header = document.querySelector(".navbar")
    const masthead = document.querySelector(".masthead");

    // change the masthead's height to fit inside the webpage without unnecessary scrolling
    masthead.setAttribute("style", `height: calc(100vh - ${header.offsetHeight}px)`)
}

calculateHeight();

window.addEventListener('resize', calculateHeight);