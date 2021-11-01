//toggle button
const toggle = document.querySelector('.toggle');
const linkContainer = document.querySelector('.nav-links-container');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    linkContainer.classList.toggle('show');
})
