// Add scroll event to show the bottom border on scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");

    // Add "sticky" class when you scroll down 50px or more
    if (window.pageYOffset > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
};
