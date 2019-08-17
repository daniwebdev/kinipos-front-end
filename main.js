const {app, BrowserWindow} = require('electron');

var mainWindow;

function mainWindow() {

    mainWindow = new BrowserWindow({
        center: true,
        Height: 800,
        Width: 950,
        webPreferences: {
            nodeIntegration: true
        },
    })
    // mainWindow.loadURL('https://google.com')
    mainWindow.loadFile('./dist/index.html')
    mainWindow.maximize()
}

app.on('ready', mainWindow);