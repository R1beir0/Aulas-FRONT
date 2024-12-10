document.getElementById('fetchJoke').addEventListener('click', function() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())  // Transforma a resposta em JSON
        .then(data => {
            document.getElementById('joke').textContent = data.value;
        })
        .catch(error => console.error('Erro:', error));
});