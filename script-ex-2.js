const shoppingList = document.getElementById("shopping-list");
const shoppingListInput = document.getElementById("shopping-list-input");
const addItemButton = document.getElementById("add-item");

let items = [];

loadItems();


addItemButton.addEventListener("click", function() {
    const itemText = shoppingListInput.value.trim();
    if (itemText !== "") {
        items.push(itemText);
        shoppingListInput.value = "";
        saveItems();
        renderList();
    }
        // console.log(items);
});

function renderList() {
    shoppingList.innerHTML = "";

    items.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerText = item;

        const deleteButton = document.createElement("button");
        deleteButton.style.marginLeft = "10px";
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function() {
            removeItem(index);
        });

        listItem.appendChild(deleteButton);
        shoppingList.appendChild(listItem);

    
    });
}

function loadItems() {
    const storedItems = localStorage.getItem('items');  
    if (storedItems) {
        items = JSON.parse(storedItems);
        renderList();
    }  
};

function saveItems() {
    localStorage.setItem('items', JSON.stringify(items));
}

function removeItem(index) {
    items.splice(index, 1);
    saveItems();
    renderList();
}