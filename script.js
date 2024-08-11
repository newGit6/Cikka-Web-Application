document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var header = document.querySelector('.main-header');
        var logo = document.querySelector('.logo');

        if (window.pageYOffset > 50) { // Change 50 to the pixel value where you want the effect to trigger
            header.classList.add('scrolled');
            logo.classList.add('small-logo'); // Add a class to decrease the image size
        } else {
            header.classList.remove('scrolled');
            logo.classList.remove('small-logo'); // Remove the class to revert the image size
        }
    });
});