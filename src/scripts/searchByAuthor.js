import { fetchJson } from '../client/utils/fetchJson.js'
import { createTable } from '../client/utils/createTable.js'

var form = document.getElementById('form-author')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const params = new URLSearchParams(`author=${document.getElementById('author-select').value}`).toString()
    const { data } = await fetchJson(`http://${window.location.host}/src/api/SearchByAuthors.php?${params}`, 'GET',)
    createTable(data, ['ID', 'titulo', 'tema', 'autor', 'created_at', 'updated_at'])

});