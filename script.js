const collapseBtn = document.querySelector('.btn-toggle-nav');
const navBar = document.querySelector('.collapse-nav');

collapseBtn.addEventListener('click', function() {
    navBar.classList.toggle('show');
});

function scroll(target, duration) {
    var target = document.querySelector(target);
    var position = target.getBoundingClientRect().top;
    var start = window.pageYOffset;
    var distance = position - start;
    var startTime = null;

    function scrollAnimation(timestamp) {
        if(startTime === null) {
            startTime = timestamp;
        }
        var timeElapsed = timestamp - startTime;
        var exe = Math.easeInOutQuad(timeElapsed, start, distance, position);
        window.scrollTo(0, exe);
        if(timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };
    

    requestAnimationFrame(scrollAnimation);
}

// const homepage = document.querySelector('a[href="#home"]');
// const aboutus = document.querySelector('a[href="#aboutus"]');
// const services = document.querySelector('a[href="#services"]');
// const contact = document.querySelector('a[href="#contact"]');

// homepage.addEventListener('click', function() {
//     scroll('#home', 1000);
// });

// aboutus.addEventListener('click', function() {
//     scroll('#aboutus', 1000);
// });

// services.addEventListener('click', function() {
//     scroll('#services', 1000);
// });

// contact.addEventListener('click', function() {
//    scroll('#contact', 1000); 
// });