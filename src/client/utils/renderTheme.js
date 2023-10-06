export function renderTheme(title, theme, author, created_at, updated_at ) {
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const small = document.createElement('small')

    h2.textContent = title
    p.textContent = theme
    small.textContent = author

    document.body.appendChild(h2)
    document.body.appendChild(p)
    document.body.appendChild(small)
}