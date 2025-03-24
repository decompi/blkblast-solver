const { app, BrowserWindow, ipcMain, desktopCapturer } = require("electron")
const path = require("node:path")
const fs = require("node:fs")

let mainWindow;

const configPath = path.join(__dirname, "config.json")
const config = JSON.parse(fs.readFileSync(configPath, "utf-8"))


app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js"),
            webviewTag: true,
            nodeIntegrationInSubFrames: true
        }        
    })

    mainWindow.loadFile("index.html")


    async function captureScreen() {
        const sources = await desktopCapturer.getSources({
            types: ["window"],
            thumbnailSize: { width: 1920, height: 1080 }
        })

        const mirrorWindow = sources.find(source => source.name.includes(config.windowName))

        if(mirrorWindow) {
            return mirrorWindow.thumbnail.toDataURL()
        }

        return null
    }

    ipcMain.handle("capture-screen", captureScreen);
})