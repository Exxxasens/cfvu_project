const { BrowserWindow, app } = require('electron');
const setMenu = require('./setMenu');
const url = require('url');
const path = require('path');
const isMac = (process.platform === 'darwin');
// создаем окно через конструктор.
let mainWindow;
// событие, когда приложение запустилось.
app.on('ready', () => {
    // создаем окно.
    mainWindow = new BrowserWindow({ 
        height: 800, 
        width: 600, 
        webPreferences: { 
            devTools: true 
        }
    });
    // создаем путь к файлу file://..../mainWindow.html
    let mainWindowUrl = url.format({ 
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    });
    // загружаем этот файл.
    mainWindow.loadURL(mainWindowUrl);
    setMenu();
});