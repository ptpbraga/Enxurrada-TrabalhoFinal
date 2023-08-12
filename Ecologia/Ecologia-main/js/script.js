const hamburguerEl = document.querySelector('#hamburguer');
const navEl = document.querySelector('nav');

hamburguerEl.addEventListener('click', function () {
    navEl.classList.toggle('ativo');
});
