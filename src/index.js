import printMe from './print.js';

const component = (() => {
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    return btn;
})();

const contentDiv = document.querySelector('.content');
contentDiv.appendChild(component);