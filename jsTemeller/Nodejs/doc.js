// node js ubuntu kurulum
sudo apt update
sudo apt install nodejs npm

// versiyon kontrol
nodejs --version
npm --version
// node js 10.x kurulumu
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

// versiyon kontrol
node -v
npm -v

// aşağıdaki kodlar js dosyasını tarayıcıdaki mantıkta terminalden çalıştırır.
node index
node index.js

npm root -g     // paketlerimizin bulunduğu genel dizin - global package

// local paket kurulumu 
// npm paketlerini kurmak için
npm install simple-is // simple-is paket adı

// global paket kurulumu
sudo npm install -g simple-is

// package oluşturmak için
npm init

package name: (nodejs) selcuk-akarin
version: (1.0.0) 
description: deneme paketi
entry point: (index.js) index.js
test command: 
git repository: 
keywords: deneme,paket
author: selçuk akarın
license: (ISC) 
About to write to /home/selcuk/Desktop/frontend/jsTemeller/Nodejs/package.json:

{
  "name": "selcuk-akarin",
  "version": "1.0.0",
  "description": "deneme paketi",
  "main": "index.js",
  "dependencies": {
    "simple-is": "^0.2.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "deneme",
    "paket"
  ],
  "author": "selçuk akarın",
  "license": "ISC"
}

// package.sjon dosyasındaki script'leri çalıştırmak için
npm run start  // script key'i

// eğer elimizde package.json dosyamız var ise ve node_modules klasötümüz silinmişse aşağıdaki komutla tüm paketleri yeniden yükleyebiliriz.
npm install

// eğer package'ın sadece geliştirme ortamında kullanılmasını ister isek aşağıdaki kod kullanılır
npm install webpack-cli --save-dev

// npmjs.com da package yayınlamak için 
npm login
npm publish
npm selcuk-deneme-paket
npm login
npm unpublish selcuk-deneme-paket -- force      // package yayından kaldırma


