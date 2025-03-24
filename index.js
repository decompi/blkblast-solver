const { app, BrowserWindow, ipcMain, desktopCapturer } = require("electron");
const path = require("node:path");

let mainWindow;

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
    });

    mainWindow.loadFile("index.html");

    async function captureScreen() {
        const sources = await desktopCapturer.getSources({
            types: ["window"],
            thumbnailSize: { width: 1920, height: 1080 }
        });

        const letsViewWindow = sources.find(source => source.name.includes("LetsView [Cast]"));

        if (letsViewWindow) {
            return letsViewWindow.thumbnail.toDataURL();
        }
        return null;
    }

    ipcMain.handle("capture-screen", captureScreen);
});
