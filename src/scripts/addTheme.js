import { fetchJson } from '../client/utils/fetchJson.js'
var form = document.getElementById('form')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const title = document.getElementById('titulo').value
    const theme = document.getElementById('tema').value
    const author = document.getElementById('autor').value

    const { data, statusCode } = await fetchJson(`http://${window.location.host}/src/api/Add.php`, 'POST', { theme: theme, author: author, title: title })
    
    if(statusCode != 202) alert("No se pudo agregar el tema")
    alert("Se agrego el tema correctamente")

    window.location.replace(`http://${window.location.host}/index.html`)
})