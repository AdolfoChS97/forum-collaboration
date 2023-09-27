var form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    var tema = document.getElementById('tema').value;
    fetch('http://localhost:3000/src/api/busqueda_principal.php', {
        method: 'POST',
        body: JSON.stringify({
            tema: tema
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log(response);
    });
});