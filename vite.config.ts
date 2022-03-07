import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import svgrPlugin from '@arco-plugins/vite-plugin-svgr';
import vitePluginForArco from '@arco-plugins/vite-react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import setting from './src/settings.json';
import { visualizer } from 'rollup-plugin-visualizer';
console.log(process.env.vis, process.env.NODE_ENV);

const plugins = [
  react(),
  svgrPlugin({
    svgrOptions: {},
  }),
  vitePluginForArco({
    theme: '@arco-themes/react-arco-pro',
    modifyVars: {
      'arcoblue-6': setting.themeColor,
    },
  })
]
if (process.env.vis) {
  plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
  );
}

const server =  {
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
    // Proxying websockets or socket.io
    '/socket.io': {
      target: 'ws://localhost:3000',
          ws: true,
    },
  },
}

const css =  {
  // https://www.jianshu.com/p/a45f48448be9
  postcss: {
    plugins: [
      {
        postcssPlugin: 'internal:charset-removal',
        AtRule: {
          charset: (atRule) => {
            if (atRule.name === 'charset')
              atRule.remove();
          }
        }
      }
    ]
  },
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
    },
  },
}
// https://vitejs.dev/config/
export default defineConfig({
  // https://www.bianchengquan.com/article/221536.html
  optimizeDeps: {
    include: ["lodash"]
  },
  build: {
      commonjsOptions: {
          transformMixedEsModules: false
      },
      sourcemap: false,
      minify: 'terser',
      chunkSizeWarningLimit: 3500,
      terserOptions: {
          compress: {
              drop_console: true,
              drop_debugger: true
          }
      },
      rollupOptions: {
          output: {
              manualChunks(id) {
                  if (id.includes('node_modules')) {
                      return id
                          .toString()
                          .split('node_modules/')[1]
                          .split('/')[0]
                          .toString();
                  }
              },
              chunkFileNames: (chunkInfo) => {
                  const facadeModuleId = chunkInfo.facadeModuleId
                      ? chunkInfo.facadeModuleId.split('/')
                      : [];
                  const fileName =
                      facadeModuleId[facadeModuleId.length - 2] || '[name]';
                  return `js/${fileName}/[name].[hash].js`;
              }
          }
      }
  },
 server,
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  css,
});
