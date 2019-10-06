// package oluşturmak için
npm init

npm install @babel / cli @babel / core @babel / polyfill @babel / preset - env--save - dev
    // cli=command line interface

    // src'deki ES6'ları ES5'e çevirip lib klasörüne kaydeder
    // windows için
    .\node_modules\.bin\ babel src - d lib
    // ubuntu veya mac için
    . / node_modules / .bin / babel src - d lib

// yukarıdaki kodu sürekli tekrar etmemek için package.json'a aşağıdaki ekleme yapılır
{
    "name": "babel",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "babel src -d lib"
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@babel/cli": "^7.4.3",
        "@babel/core": "^7.4.3",
        "@babel/polyfill": "^7.4.3",
        "@babel/preset-env": "^7.4.3"
    }
}
// ve sonra aşağıdaki komut çalıştırılır
npm run build