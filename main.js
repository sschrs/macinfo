const { app, BrowserWindow, ipcMain } = require('electron')
const { sendInfo } = require('./sendinfo')
const { menubar } = require('menubar');
const path = require('path')


const mb = menubar({
    dir:  app.getAppPath(),
    index: 'file://' + app.getAppPath() + '/view/mainWindow.html',
    showDockIcon : false,
    browserWindow: {
        width : 300,
            height : 330,
            title : "MacInfo",
            resizable: false,
            fullscreen: false,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false, 
                enableRemoteModule: true
              }
    }
});

mb.on('ready', () => {
    mb.on('after-create-window', ()=>{
        app.dock.hide();
        sendInfo(mb.window)
    })
});
