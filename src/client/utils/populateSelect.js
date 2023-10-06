export function populateSelect(select, data, key = '') {
    data.forEach((item) => {
        const option = document.createElement('option');
        option.value = item[key]
        option.textContent = item[key]
        select.appendChild(option)    
    })
}