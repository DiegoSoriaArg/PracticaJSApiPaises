const formulario = document.getElementById('formulario')
const inputFormulario = document.getElementById('inputFormulario')


const formularioClinete = data => {
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const letraCliente = inputFormulario.value.toLowerCase()
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.name.toLowerCase()
            if(letraApi.indexOf(letraCliente) !== -1) {
                return item
            }
        })
        banderillas(arrayFiltrado)
        console.log(arrayFiltrado)
    })
}