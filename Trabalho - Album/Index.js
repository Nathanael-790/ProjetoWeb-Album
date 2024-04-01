let albuns = [
    {
        id: 1,
        descricao: 'New York',
        endereco: 'EUA',
        estado: 'Estado: New York',
        latlong: [-74.01544771512599, 40.714715219087985],
        url: 'album-2.html',
        cor: 'blue'
    },
    {
        id: 2,
        descricao: 'Londres',
        endereco: 'Reino Unido',
        estado: '',
        latlong: [-0.11671754923565446, 51.503742594009594],
        url: 'album-3.html',
        cor: 'red'
    },
    {
        id: 3,
        descricao: 'Barcelona',
        endereco: 'Espanha',
        estado: 'Região: Catalunha',
        latlong: [2.164904531729665, 41.38619913801493],
        url: 'album-1.html',
        cor: 'green'
    }
]

const centralLatLong = [-34.536280872624005, 48.91472945620038]

mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aGFkZWxlaXRlIiwiYSI6ImNscG9nYzZkeDBvNmoya3I0ZTJhMWtyOWUifQ.zyyX9NI9NSpbM6AKJ0MZ7w';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: centralLatLong,
    zoom: 3.6
});

albuns.forEach((uni) => {
    let popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3><a href="${uni.url}" target="_blank">${uni.descricao}</a></h3><br>
                  ${uni.endereco} <br> ${uni.estado}`);
    const marker = new mapboxgl.Marker({ color: uni.cor })
        .setLngLat(uni.latlong)
        .setPopup(popup)
        .addTo(map);
})

function processarGeo(local) {
    let popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3> Estou aqui!!! </h3>`);
    const marker = new mapboxgl.Marker({ color: 'yellow' })
        .setLngLat([local.coords.longitude, local.coords.latitude])
        .setPopup(popup)
        .addTo(map);
}

navigator.geolocation.getCurrentPosition(processarGeo, () => { alert('Erro ao obter localização.') })


// Função para carregar os albuns
function CarregarAlbuns() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/albuns')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                str += `<div class="col p-3">
            <div class="card bg-body-tertiary border-0" style="width: 20rem;">
              <a href="album-${data[i].id}.html"><img src="${data[i].url}" class="card-img-top rounded-3"></a>
              <div class="card-body">
                <h5 class="card-title">${data[i].titulo}</h5>
                <p class="card-text">${data[i].descricao}</p>
              </div>
            </div>
          </div>`

            }
            document.getElementById("albuns").innerHTML = str;
        })
}

// Função para carregar as fotos dos albuns
function CarregarImgBarcelona() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/imgBarcelona')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                str += `<div class="card border-0 r-2" style="width: 26rem;">
              <div class="card-body">
                <a href=""><img id="img1" src="${data[i].url}" class="card-img-top rounded-3"
                    class="card-img-top" alt="..."></a>
                <p>${data[i].descri}</p>
              </div>
            </div>`
            }


            document.getElementById("imgBarcelona").innerHTML = str;
        })
}

//Carregar img principal do album de barcelona
function CarregarImgPrincipalBarcelona() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/imgBarcelona')
        .then(response => response.json())
        .then(data => {
            str += `<div class="w-100">
                    <div class=""><img src="${data[0].url}" class="img rounded-5 ps-2" style="width: 630px; height: 400px;" alt="${data[0].url}"></div>
                </div>
            
                <div class="">
                    <div class="card-text-start p-5 ">
                    <h3>${data[0].titulo}</h3>
                    <p class="card-text">${data[0].descri}</p>
                    </div>
                    <div class="text-start d-flex justify-content-between">
                    <div class="p-5">
                        <h5>Localização</h5>
                        <p class="card-text">| ${data[0].local} |</p>
                    </div>
                    <div class="p-5">
                        <h5>Data</h5>
                        <p class="nunber">${data[0].data}</p>
                    </div>
                    </div>
                </div>`

            document.getElementById("imgPrincipal").innerHTML = str;
        })
}

//Carregar img principal do album de New York
function CarregarImgPrincipalNewyork() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/imgNewYork')
        .then(response => response.json())
        .then(data => {
            str += `<div class="w-100">
                    <div class=""><img src="${data[0].url}" class="img rounded-5 ps-2" style="width: 630px; height: 400px;" alt="${data[0].url}"></div>
                </div>
            
                <div class="">
                    <div class="card-text-start p-5 ">
                    <h3>${data[0].titulo}</h3>
                    <p class="card-text">${data[0].descri}</p>
                    </div>
                    <div class="text-start d-flex justify-content-between">
                    <div class="p-5">
                        <h5>Localização</h5>
                        <p class="card-text">| ${data[0].local} |</p>
                    </div>
                    <div class="p-5">
                        <h5>Data</h5>
                        <p class="nunber">${data[0].data}</p>
                    </div>
                    </div>
                </div>`

            document.getElementById("imgPrincipal").innerHTML = str;
        })
}


// Funcão para carregar as imgs do album de New York
function CarregarImgNewyork() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/imgNewYork')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                str += `<div class="card border-0 r-2" style="width: 26rem;">
                  <div class="card-body">
                    <a href=""><img id="img1" src="${data[i].url}" class="card-img-top rounded-3"
                        class="card-img-top" alt="..."></a>
                    <p>${data[i].descri}</p>
                  </div>
                </div>`
            }


            document.getElementById("imgNewyork").innerHTML = str;
        })
}

//Carregar img principal do album de Londres
function CarregarImgPrincipalNewyork() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/imgNewYork')
        .then(response => response.json())
        .then(data => {
            str += `<div class="w-100">
                    <div class=""><img src="${data[0].url}" class="img rounded-5 ps-2" style="width: 630px; height: 400px;" alt="${data[0].url}"></div>
                </div>
            
                <div class="">
                    <div class="card-text-start p-5 ">
                    <h3>${data[0].titulo}</h3>
                    <p class="card-text">${data[0].descri}</p>
                    </div>
                    <div class="text-start d-flex justify-content-between">
                    <div class="p-5">
                        <h5>Localização</h5>
                        <p class="card-text">| ${data[0].local} |</p>
                    </div>
                    <div class="p-5">
                        <h5>Data</h5>
                        <p class="nunber">${data[0].data}</p>
                    </div>
                    </div>
                </div>`

            document.getElementById("imgPrincipal").innerHTML = str;
        })
}

// Funcão para carregar as imgs do album de Londres
function CarregarImgLondres() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/imgLondres')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                str += `<div class="card border-0 r-2" style="width: 26rem;">
                  <div class="card-body">
                    <a href=""><img id="img1" src="${data[i].url}" class="card-img-top rounded-3"
                        class="card-img-top" alt="..."></a>
                    <p>${data[i].descri}</p>
                  </div>
                </div>`
            }


            document.getElementById("imgLondres").innerHTML = str;
        })
}

// carregar img principal do album de Londres
function CarregarImgPrincipalLondres() {
    let str = '';
    fetch('https://5e5d48a5-6524-4d17-a59c-62feffb47ee8-00-1fh2hw98ebpd7.spock.replit.dev/imgLondres')
        .then(response => response.json())
        .then(data => {
            str += `<div class="w-100">
                    <div class=""><img src="${data[0].url}" class="img rounded-5 ps-2" style="width: 630px; height: 400px;" alt="${data[0].url}"></div>
                </div>
            
                <div class="">
                    <div class="card-text-start p-5 ">
                    <h3>${data[0].titulo}</h3>
                    <p class="card-text">${data[0].descri}</p>
                    </div>
                    <div class="text-start d-flex justify-content-between">
                    <div class="p-5">
                        <h5>Localização</h5>
                        <p class="card-text">| ${data[0].local} |</p>
                    </div>
                    <div class="p-5">
                        <h5>Data</h5>
                        <p class="nunber">${data[0].data}</p>
                    </div>
                    </div>
                </div>`

            document.getElementById("imgPrincipal").innerHTML = str;
        })
}

