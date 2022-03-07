/// <reference types="vite/client" />
/**
 * Vite Environment
 */
declare interface Window {
  dgiotStore: any;
}
declare module '*.json' {
  const value: any;
  export default value;
}