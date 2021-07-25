const electron = require('electron')
const {ipcMain} = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const url = require('url')
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    titlebarAppearsTransparent: "true",
    frame: "false"
})

mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
}))

mainWindow.on('closed', function () {
    app.quit()
  })
}

app.on('ready', createWindow)

ipcMain.on('close', (evt, arg) => {
  app.quit()
})

ipcMain.on('min', (evt, arg) => {
  mainWindow.isMaximized() ? mainWindow.minimize() : mainWindow.minimize()
})

ipcMain.on('max', () => {
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize()
});
