import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import debug from 'electron-debug';
/*
require('electron-reload')(path.join(__dirname))
*/

function createWindow() {
  const isDevMode: boolean = !!process.argv.find(val => val === '--development');
  console.log(`isDevMode:${isDevMode}!!(^^;`);
  
  const win = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
  });

  if (isDevMode) {
    //開発モード
    //electron-debugツールを実行する。
    debug();
    //electron-reloaderを実行する。
    //electronReloader(module, { 
    ///  watchRenderer: false //レンダラー側の変更は監視しない。
    //});
    try {
      require('electron-reloader')(module, {
        watchRenerer: false //レンダラー側の変更は監視しない。
      });
    } catch { }

    win.loadURL('http://localhost:4200');
    
    //開発ツールを開く。
    win.webContents.openDevTools();
  } else {
    //本番モード
    win.loadFile(path.join(__dirname, 'renderer/index.html'));
  }
}

app.whenReady().then(async () => {

  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {

  if (process.platform !== "darwin") {
    app.quit();
  }
});