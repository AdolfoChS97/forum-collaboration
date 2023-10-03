import { fetchJson } from '../client/utils/fetchJson.js'

var form = document.getElementById('form')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const params = new URLSearchParams(`theme=${document.getElementById('tema').value}`).toString()
    const { data, statusCode } = await fetchJson(`http://${window.location.host}/src/api/Search.php?${params}`, 'GET',)
    console.log(data, statusCode);
});