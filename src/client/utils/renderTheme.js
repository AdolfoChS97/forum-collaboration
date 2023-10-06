export function renderTheme(data) {
    data?.forEach(item => {
        const { TITLE, THEME, AUTHOR } = item

        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const small = document.createElement('small')

        h2.innerText = `Titulo: ${TITLE}`
        p.innerText = `Tema: ${THEME}`
        small.innerText = `autor: ${AUTHOR}`

        document.body.appendChild(h2)
        document.body.appendChild(p)
        document.body.appendChild(small)
    })
}
