function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const tableBody = document.getElementById('userTable');
        tableBody.innerHTML = '';
        users.forEach(user => {
          const card = document.createElement('div');
          card.classList.add('user-card');
          card.innerHTML = `
            <p id="name"><strong>${user.name}</strong></p>
            <p class="label">Email:</p> <p>${user.email}</p>
            <p class="label">Phone:</p> <p>${user.phone}</p>
            <p class="label">Company Name:</p> <p>${user.company.name}</p>
            <p class="label">Catch Phrase:</p> <p>${user.company.catchPhrase}</p>
          `;
          tableBody.appendChild(card);
        });
      })
      .catch(error => console.error(error));
}
