import { fetchJson } from '../client/utils/fetchJson.js'

var form = document.getElementById('form')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const tema = document.getElementById('tema').value
    const { data, statusCode } = await fetchJson('http://localhost:8080/src/api/MainSearch.php', 'POST', {tema: tema})
    
});