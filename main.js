const { app, BrowserWindow, ipcMain } = require('electron')
const si = require('systeminformation')
const { sendInfo } = require('./sendinfo')

app.whenReady().then(()=>{
    let mainWindow = new BrowserWindow({
        width : 250,
        height : 300,
        title : "MacInfo",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, 
            enableRemoteModule: true
          }
    })


    mainWindow.webContents.once('dom-ready',()=>{
        sendInfo(mainWindow)
    })    

    mainWindow.loadFile("./view/mainWindow.html")

})