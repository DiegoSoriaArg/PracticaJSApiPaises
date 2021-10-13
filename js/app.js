const banderas = document.getElementById('banderas')

document.addEventListener('DOMContentLoaded', e => {
    fetchData()
})

const fetchData = async() => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        banderillas(data)
        formularioClinete(data)
        filtros(data)
    } catch (error) {
        console.log('error')
    }
}

const banderillas = data => {
    let elementos = ''
    data.forEach(item => {
        elementos += `
            <article class="card">
                <img src="${item.flag}" alt="" class="img-fluid">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>
                        <b>Poblacion: </b>
                        ${item.population}
                    </p>
                    <p>
                        <b>Capital: </b>
                        ${item.capital}
                    </p>
                    <p>
                        <b>Region: </b>
                        ${item.region}
                    </p>
                    <p>
                        <a href="pais.html?name=${item.name}">Mas Informacion</a>
                    </p>
                </div>
            </article>
        `
    });
    banderas.innerHTML = elementos
}

