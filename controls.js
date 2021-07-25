const {ipcRenderer} = require('electron');
const closeWindow = document.getElementById('close');
const minWindow = document.getElementById('min');
const maxWindow = document.getElementById('max');

closeWindow.addEventListener('click', () => {
    ipcRenderer.send('close')
});

minWindow.addEventListener('click', () => {
    ipcRenderer.send('min')
});

maxWindow.addEventListener('click', () => {
    ipcRenderer.send('max')
});
