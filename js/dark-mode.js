const btnDark = document.querySelector('.btn-dark-mode');

btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.className === 'dark-mode') {
        btnDark.innerHTML = `
            <i class="far fa-sun"></i>
            Modo claro..
        `
    } else {
        btnDark.innerHTML = `
            <i class="far fa-moon"></i>
            Modo oscuro..
        `
    }
})