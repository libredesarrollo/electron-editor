const {Menu, app, BrowserWindow} = require('electron')

const menu = require('./menu')

function createWindow(){

    let win = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    win.loadFile("index.html")
}

app.whenReady().then(createWindow)

Menu.setApplicationMenu(menu)