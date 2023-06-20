import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import * as fs from 'fs';
import debug from 'electron-debug';
import electronReloader from "electron-reloader";

//Windowsにインストールした時用の処理
//参考URL:https://www.electronforge.io/config/makers/squirrel.windows
if (require('electron-squirrel-startup')) app.quit();

//自動アップデートに対応
require('update-electron-app')();

const loadUsers = async (): Promise<{ userId: number, userName: string }[]> => {
  const loadData = JSON.parse(fs.readFileSync(path.join(__dirname, '../mock', './users.json'), 'utf-8')) as { userId: number, userName: string }[];

  return loadData;
};

function createWindow() {
  const isDevMode: boolean = !!process.argv.find(val => val === '--development');
  
  const win = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    width: 800,
    //icon: path.join(__dirname, 'assets/icon/icon.ico'), 
    icon: path.join(__dirname, '../assets/icon/icon.ico')
  });

  if (isDevMode) {
    //開発モード
    //electron-debugツールを実行する。
    debug();
    
    try {
      //electron-reloaderを実行する。
      electronReloader(module, { 
        watchRenderer: false //レンダラー側の変更は監視しない。
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
  if (require('electron-squirrel-startup')) { 
    console.log(`app.quit実行`);
    app.quit();
  }

  //users.jsonをロードする。
  ipcMain.handle('loadUsers', loadUsers);

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