const { app, BrowserWindow, ipcMain } = require('electron')
const si = require('systeminformation')
const { sendInfo } = require('./sendinfo')

app.whenReady().then(()=>{
    let mainWindow = new BrowserWindow({
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
    })


    si.wifiConnections().then(data => console.log(data[0]))

    mainWindow.webContents.once('dom-ready',()=>{
        sendInfo(mainWindow)
    })    

    mainWindow.loadFile("./view/mainWindow.html")

})