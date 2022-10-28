const {Menu, app, BrowserWindow, ipcMain} = require('electron')

const menu = require('./menu')

function createWindow(){

    let win = new BrowserWindow({
        width: 800,
        height:600,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false 
        }
    })

    win.loadFile("index.html")
    //setTimeout(()=> win.webContents.send('message','Hello world'),1000)
    win.webContents.openDevTools()
}

ipcMain.on('open-window',(event,data)=>{
    // let newWin = new BrowserWindow({
    //     width: 800,
    //     height:600,
    //     // webPreferences:{
    //     //     nodeIntegration: true,
    //     //     contextIsolation: false 
    //     // }
    // })

    // newWin.loadURL('https://www.google.com/')
    // console.log(newWin.id)
    //newWin.loadFile("index.html")
})

app.whenReady().then(createWindow)
Menu.setApplicationMenu(menu)