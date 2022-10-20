const particlesJS = window.particlesJS;
particlesJS.load('particles-js', 'particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

const benefits = document.querySelectorAll('.benefits-container .benefit');
const benefitContainer = document.querySelector('.benefits');
const intersectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        benefits.forEach(benefit => {
            if (entry.isIntersecting) {
                benefit.classList.add('animate');
            } else {
                benefit.classList.remove('animate');
            }
        }
        )
    });
}, {
    threshold: 0.5
    });
intersectionObserver.observe(benefitContainer);

const particle = document.querySelector("#particles-js");
window.addEventListener("mousemove",e=>{
    particle.style.left = (e.clientX-200)/15+"px";
    particle.style.top = (e.clientY-200)/15+"px";
})