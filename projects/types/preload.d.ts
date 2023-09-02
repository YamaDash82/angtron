export interface MyAPI {
  loadUsers: () => Promise<{ userId: number, userName: string}[]>;
}

declare global {
  interface Window {
    myAPI: MyAPI;
  }
}