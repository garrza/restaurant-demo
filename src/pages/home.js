const createHome = () => {
    const home = document.createElement("div");
    home.classList.add("home");

    const dimensionCesar = document.createElement("img");
    dimensionCesar.src = "assets/images/3d.gif";
    dimensionCesar.alt = "Dimensional Cesar";

    home.appendChild(createHeader("Big Cesar Navarro"));
    home.appendChild(dimensionCesar);
    home.appendChild(createParagraph("The pizza from the future"));
    home.appendChild(createParagraph("Made with passion since tomorrow!"));
    
    return home;
};

const createHeader = (text) => {
    const header = document.createElement("h1");
    header.textContent = text;
    header.classList.add("header");
    return header;
};

const createParagraph = (text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.classList.add("info");
    return paragraph;
};

const loadHome = () => {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
};

export default loadHome;