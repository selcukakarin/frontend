class Request {
    get(url) { // GET request
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        })
    }

    post(url, data) { // POST request
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(data));
        })
    }

    put(url, data) { // PUT
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject.log(err));
        })
    }

    delete(url) { // DELETE
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', {
                    method: 'DELETE'
                })
                .then(response => resolve("Veri silme başarılı"))
                .catch(err => reject(err));
        })
    }

}
const request = new Request();
let albums;

// GET
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(data => {
        albums = data;
        // FETCH de AJAX gibi asenkron çalışır eğer aşağıdaki console'u dışarıda çalıştırmaya kalksaydık çalışmayacaktı.
        console.log(albums);
    })
    .catch(err => console.log(err));

// POST
request.post("https://jsonplaceholder.typicode.com/albums", {
        userId: 1,
        title: "Selçuk"
    })
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err));

// PUT
request.put("https://jsonplaceholder.typicode.com/albums/1", {
        userId: 10,
        title: "Şeyho Karma"
    })
    .then(album => console.log(album))
    .catch(err => console.log(err))

// DELETE
request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => console.log(message))
    .catch(err => console.log(err));