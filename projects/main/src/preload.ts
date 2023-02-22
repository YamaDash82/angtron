import { contextBridge } from "electron";

contextBridge.exposeInMainWorld('myAPI', {
  greet: (): string => 'From electron with hello(^_^)!'
});