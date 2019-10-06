npm install @babel / core @babel / polyfill @babel / preset - env babel - loader--save - dev
// bu komuttaki babel loader yüklemesi ile webpack babel'a ulaşır ve ortak çalışırlar
// webpack babel sayesinde ES5'e göre çalışır
// @babel/core : babel'ın çalışması için
// @babel/polyfill : async ve awaitin çalışması için
// @babel/preset-env : ES6 ve sonrası gelen özellikleri kullanmak işin
// babel-loader : webpack ve babel'in ortak çalışabilmesi için

// webpack
npm install webpack - cli webpack--save - dev
// webpack kuruldu
// webpack çalıştırmak için package.json içerisine aşağıdaki eklemeler yapılrı
{
    "name": "webpack_test",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --watch"  // eklenen kısım
    },
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "@babel/core": "^7.4.3",
        "@babel/polyfill": "^7.4.3",
        "@babel/preset-env": "^7.4.3",
        "babel-loader": "^8.0.5",
        "webpack": "^4.30.0",
        "webpack-cli": "^3.3.0"
    }
}
//webpack çalıştırmak için
npm run build