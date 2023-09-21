import { defineConfig } from 'vite';
import { resolve } from 'path';
import autoprefixer from "autoprefixer";
import handlebars from 'vite-plugin-handlebars';

// const pageData = {
//   '/index.html': {
//     title: 'トップページ',
//   },
//   '/contact.html': {
//     title: 'お問い合わせ',
//   },
// };

// HTMLの複数出力を自動化
import fs from 'fs';
import path from 'path';

const files = [];
function readDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);

    if (fs.statSync(itemPath).isDirectory()) {
      if (item === 'components') {
        continue;
      }

      readDirectory(itemPath);
    } else {
      if (path.extname(itemPath) !== '.html') {
        continue;
      }

      let name;
      if (dirPath === path.resolve(__dirname, 'src')) {
        name = path.parse(itemPath).name;
      } else {
        const relativePath = path.relative(path.resolve(__dirname, 'src'), dirPath);
        const dirName = relativePath.replace(/\//g, '_');
        name = `${dirName}_${path.parse(itemPath).name}`;
      }

      const relativePath = path.relative(path.resolve(__dirname, 'src'), itemPath);
      const filePath = `/${relativePath}`;

      files.push({ name, path: filePath });
    }
  }
}
readDirectory(path.resolve(__dirname, 'src'));
const inputFiles = {};
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  inputFiles[file.name] = resolve(__dirname, './src' + file.path );
}


export default defineConfig({
  base: "./",
  root: "./src",
  build: {
		outDir: "../dist",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.')[1];
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
						extType = "fonts";
					}
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }
          if(extType === 'css') {
            return `assets/css/style.css`;
          }
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/script.js',
      },
      input: inputFiles,
    },
	},
  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, './src/components'),
      //各ページ情報の読み込み
      // context(pagePath) {
      //   return pageData[pagePath];
      // },
    }),
  ], 
});