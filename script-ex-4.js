const users = [
    { name: "Anna", age: 22 },
    { name: "Piotr", age: 30 },
    { name: "Kasia", age: 17 },
    { name: "Marek", age: 45 }
];



const userList = document.getElementById("user-list");
renderUserList(users);

function renderUserList(list) {
    list.forEach(user => {
        const li = document.createElement("li");
        userList.appendChild(li);
        li.innerText = `${user.name}, age: ${user.age}`;
    });
};

const names = users.map(user => user.name);
console.log("Names:", names);

const adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults); 



function findUser(searchName) {
    const foundUser = users.find(user => user.name === searchName);

    if (foundUser) {
        console.log("Found user:", foundUser);
    } else {
        console.log(`User with name ${searchName} not found.`);
    }
} 


findUser("Kasia");

findUser("Tomek");
