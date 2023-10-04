export function createTable(data, headerLabels) {
    document.querySelectorAll('table').forEach((table) => table.remove())
    document.querySelectorAll('h3').forEach((h3) => h3.remove())
    
    const table = document.createElement('table')
    const thead = table.createTHead()
    const headerRow = thead.insertRow()
  
    for (let i = 0; i < headerLabels.length; i++) {
      const headerCell = headerRow.insertCell()
      if(i > 0) headerCell.textContent = headerLabels[i]
    }
  
    const tbody = table.createTBody()

    if(data.length > 0) {
      data.map((row) => {
        const tRow = tbody.insertRow()
        Object.keys(row).map((key, i) => {
          if(i > 0) {
            const cell = tRow.insertCell()
            cell.textContent = row[key]
          }
        })
      })
      document.body.appendChild(table)
    } else { 
      const h3 = document.createElement('h3')
      h3.textContent = 'Resultado no encontrado'
      document.body.appendChild(h3)
    }
}