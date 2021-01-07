const appDiv = document.querySelector('#app');
const helloDiv = document.createElement('div');
helloDiv.className = 'container';
helloDiv.innerText = 'Hello!';
appDiv.appendChild(helloDiv);