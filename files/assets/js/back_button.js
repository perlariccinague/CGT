let calcScrollValue = () => {
    let toTopButton = document.querySelector('.back-to-top');
    let topValue = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((topValue * 100) / calcHeight);
    if (topValue > 300) {
        toTopButton.style.display = "";
    } else {
        toTopButton.style.display = "none";
    }
    toTopButton.addEventListener("click", () => {
        document.querySelector('body,html').getBoundingClientRect().top;
        window.scrollTo({
            behavior: 'smooth',
            top: scroll,
        });
    });
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


