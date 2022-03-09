import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import svgrPlugin from '@arco-plugins/vite-plugin-svgr';
import vitePluginForArco from '@arco-plugins/vite-react';
// @ts-ignore
import setting from './src/settings.json';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // https://cn.vitejs.dev/config/#server-proxy
    proxy: {
      // 字符串简写写法
      '/foo': 'http://localhost:4567',
      // 选项写法
      // 正则表达式写法
      '^/fallback/.*': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, ''),
      },
      // 使用 proxy 实例
      '/iotapi': {
        target: 'http://dev.iotn2n.com',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
      },
       // 使用 proxy 实例
       '/datav': {
        target: 'http://192.168.1.106:5000',
        changeOrigin: true,
        rewrite:(path) => path.replace(/\/datav/, ''),
        configure: (proxy, options) => {
          // proxy 是 'http-proxy' 的实例
        },
        
      },
      // Proxying websockets or socket.io
      '/socket.io': {
        target: 'ws://localhost:3000',
        ws: true,
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {},
    }),
    vitePluginForArco({
      theme: '@arco-themes/react-arco-pro',
      modifyVars: {
        'arcoblue-6': setting.themeColor,
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
