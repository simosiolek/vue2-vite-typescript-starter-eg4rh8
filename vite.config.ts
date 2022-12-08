import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'HelloLib',
      // the proper extensions will be added
      fileName: (format) => `hello-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        inlineDynamicImports: true, // to import svg files to Icon
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^@\/(.+)/,
        replacement: path.resolve(path.resolve(__dirname), 'src') + '/$1',
      },
    ],
  },
})

// const { createVuePlugin } = require('vite-plugin-vue2');

// module.exports = {
//   plugins: [createVuePlugin()],
// };

// import { defineConfig } from 'vite'
// import { createVuePlugin } from 'vite-plugin-vue2'

// const path = require('path')

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [createVuePlugin()],
//   resolve: {
//     alias: [
//       {
//         find: /^@\/(.+)/,
//         replacement: path.resolve(path.resolve(__dirname), 'src') + '/$1'
//       }
//     ]
//   }
// })
