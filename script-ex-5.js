const searchInput = document.getElementById('name-search-input');
const apiUserList = document.getElementById('search-user-list');

let apiUsers = [];


async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        apiUsers = await response.json();
        renderUserList(apiUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
    }       
}


function renderUserList(list) {
    apiUserList.innerHTML = "";

    list.forEach(user => {
        const li = document.createElement("li");
        apiUserList.appendChild(li);
        li.innerText = `${user.name}`;
    });
};

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const filteredUsers = apiUsers.filter(user => user.name.toLowerCase().includes(query));
    renderUserList(filteredUsers);
}); 

fetchUsers();