import { fetchJson } from '../client/utils/fetchJson.js'
import { populateSelect } from '../client/utils/populateSelect.js'

window.addEventListener('load', async () => {
    const select = document.getElementById('author-select')
    const { data, statusCode } = await fetchJson(`http://${window.location.host}/src/api/Authors.php?`, 'GET')
    populateSelect(select, data, 'AUTHOR')
})