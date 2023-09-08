window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("leav-img");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}