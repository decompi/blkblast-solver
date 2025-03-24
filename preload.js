const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    captureScreen: () => ipcRenderer.invoke("capture-screen"),
    onNewScreenshot: (callback) => ipcRenderer.on("new-screenshot", (_event, image) => callback(image))
});
