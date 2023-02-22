export interface MyAPI {
  greet: () => string;
}

declare global {
  interface Window {
    myAPI: MyAPI;
  }
}