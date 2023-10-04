import { fetchJson } from '../client/utils/fetchJson.js'
import { createTable } from '../client/utils/createTable.js'

var form = document.getElementById('form')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const params = new URLSearchParams(`theme=${document.getElementById('tema').value}`).toString()
    const { data, statusCode } = await fetchJson(`http://${window.location.host}/src/api/Search.php?${params}`, 'GET',)
    createTable(data, ['ID', 'titulo', 'tema', 'autor', 'created_at', 'updated_at'])

});