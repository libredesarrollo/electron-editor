const { app, ipcMain, Menu, shell, BrowserWindow, globalShortcut } = require('electron')
const { open_file, save_file } = require("./editor-options")

const template = [
    {
        label: 'About us',
        submenu: [
            {
                label: "About us",
                click() {
                    shell.openExternal("https://www.electronjs.org")
                }
            }
        ]
    },
    {
        label: 'File',
        submenu: [
            {
                label: "Save",
                accelerator: 'CommandOrControl+Shift+S',
                click() {
                    const win = BrowserWindow.getFocusedWindow()
                    win.webContents.send('editorchannel', 'file-save')
                }
            },
            {
                label: "Open",
                accelerator: 'CommandOrControl+Shift+O',
                click() {
                    const win = BrowserWindow.getFocusedWindow()
                    open_file(win)
                }
            },
        ]
    },
    {
        label: 'Style and format',
        submenu: [
            {
                label: 'Bold',
                click() {
                    const win = BrowserWindow.getFocusedWindow()
                    win.webContents.send('editorchannel', 'style-bold')

                    console.log("Negritas")
                }
            },
            {
                label: 'Italic',
                click() {
                    const win = BrowserWindow.getFocusedWindow()
                    win.webContents.send('editor-channel', 'style-italic')
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'H1',
                click() {
                    const win = BrowserWindow.getFocusedWindow()
                    win.webContents.send('editor-channel', 'style-h1')
                }
            },
            {
                label: 'H2',
                click() {
                    const win = BrowserWindow.getFocusedWindow()
                    win.webContents.send('editor-channel', 'style-h2')
                }
            },

        ]
    }
]

if (process.platform == 'win32' || process.platform == 'darwin') {
    template.push(
        {
            label: 'Default',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                {
                    type: 'separator'
                },

                { role: 'togglefullscreen' },
            ]
        }
    )
}

ipcMain.on('editor-channel', (event, arg) => {
    console.log("Mensaje recibido del canal 'editor-channel': " + arg)
})

ipcMain.on('file-open', (event, arg) => {
    const win = BrowserWindow.getFocusedWindow()
    open_file(win)
})

ipcMain.on('file-save', (event, arg) => {
    const win = BrowserWindow.getFocusedWindow()
    save_file(win, arg)
})

app.on('ready', () => {

    globalShortcut.register('CommandOrControl+Shift+S', () => {
        const win = BrowserWindow.getFocusedWindow()
        win.webContents.send('editor-channel', 'file-save')
    })

    globalShortcut.register('CommandOrControl+Shift+O', () => {
        const win = BrowserWindow.getFocusedWindow()
        open_file(win)
    })
});

const menu = Menu.buildFromTemplate(template);

module.exports = menu
