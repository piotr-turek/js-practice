const container = document.getElementById("users-container");

async function loadUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  renderUsers(users);
}

function renderUsers(users) {
  container.innerHTML = ""; 

  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>E-mail:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
    `;

    container.appendChild(card);
  });
}

loadUsers();