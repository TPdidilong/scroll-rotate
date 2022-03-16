const circle = document.querySelector('.circle');

document.addEventListener('scroll', () => {
    circle.style.transform = `rotate(${window.scrollY * 0.1}deg)`;
});
