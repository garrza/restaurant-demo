const createMenu = () => {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(createMenuItem("Poop","Delicious, homemade, poop"));
    menu.appendChild(createMenuItem("Pizza", "Pizza, a la Bertram!"));
    return menu;
}

const createMenuItem = (name, description) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    const foodImage = document.createElement("img");
    foodImage.src = `assets/images/${name.toLowerCase()}.gif`;
    foodImage.alt = `${name}`;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

const loadMenu = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
};

export default loadMenu;