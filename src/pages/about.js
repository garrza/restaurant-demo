const createAbout = () => {
    const about = document.createElement("div");
    about.classList.add("about");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "📞 +52 1 81 2642 3652";

    const address = document.createElement("p");
    address.textContent = "🏠 Rosa Roja 103, Rincon del Valle";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = "assets/images/location.png";
    restaurantLocation.alt = "Big Cesar Navarro";
    
    about.appendChild(phoneNumber);
    about.appendChild(address);
    about.appendChild(restaurantLocation);

    return about;
}

const loadAbout = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
};

export default loadAbout;