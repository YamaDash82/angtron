import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('myAPI', {
  loadUsers: (): Promise<{ userId: number, userName: string }[]> => {
    return ipcRenderer.invoke('loadUsers');
  } 
});