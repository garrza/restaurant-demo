import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";

const createHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantLogo = document.createElement("img");
    restaurantLogo.src = "assets/images/cesar.png";
    restaurantLogo.alt = "logo";
    restaurantLogo.classList.add("restaurant-image");

    header.appendChild(restaurantLogo);
    header.appendChild(createNav());

    return header
}

const createNav = () => {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const aboutButton = document.createElement("button");
    aboutButton.classList.add("button-nav");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(aboutButton);
        loadAbout();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

const setActiveButton = (selectedButton) => {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== selectedButton) {
            button.classList.remove("active");
        }
    });

    selectedButton.classList.add("active");
}

const createMain = () => {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} @garrza`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/garrza";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}

const initialize = () => {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default initialize;