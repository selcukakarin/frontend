// projeyi çalıştırmak için 
npm install // package.json'daki devDependencies'e göre nodemodules oluşur
npm run build // webpack sayesinde bundle klasörünü oluşturur
npm run start   // node server başlatıldı

// projede REST api kullanmak için (json-server)
sudo npm install -g json-server
// yukarıdaki kod ile gerekli dosyaları indirdik ve daha bir json dsyası oluşturup içerisini aşağıdaki gibi doldurduk
// dosya yolumuz fake-api/employee.json
{
    "posts": [
      { "id": 1, "title": "json-server", "author": "typicode" }
    ],
    "comments": [
      { "id": 1, "body": "some comment", "postId": 1 }
    ],
    "profile": { "name": "typicode" }
  }
// ardından bu dosyanın yolunu aşağıdaki kodda işaret ettik
json-server --watch fake-api/employee.json
// server çalıştı 

// linkler
https://github.com/typicode/json-server
https://github.com/typicode/jsonplaceholder
https://jsonplaceholder.typicode.com/
