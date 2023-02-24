export interface MyAPI {
  loadUsers: () => Promise<{ userId: number, userName: string}[]>;
  greet: () => string;
}

declare global {
  interface Window {
    myAPI: MyAPI;
  }
}