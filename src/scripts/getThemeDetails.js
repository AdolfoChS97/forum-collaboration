import { fetchJson } from '../client/utils/fetchJson.js'
import { renderTheme } from "../client/utils/renderTheme.js"

var anchorGoBack = document.getElementById('go-back')

window.addEventListener('load', async () => {
    const themeId = window.location.search.split('=')[1] * 1
    const { data, statusCode } = await fetchJson(`http://${window.location.host}/src/api/GetTheme.php?themeId=${themeId}`, 'GET')
    renderTheme(data)
})

anchorGoBack.addEventListener('click', function (e) {
    e.preventDefault()
    window.history.back()
})