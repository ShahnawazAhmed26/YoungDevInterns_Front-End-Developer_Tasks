fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('data-list');
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            list.appendChild(li);
        });
    });
