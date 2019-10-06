class Request {
    async get(url) { // GET request
        const response = await fetch(url); // Response object
        const dataget = await response.json(); // Json object
        return dataget;

    }

    async post(url, data) { // POST request
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object
        const datapost = await response.json();
        return datapost;
    }

    async put(url, data) { // PUT
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }) // Response Object

        const dataput = await response.json();
        return dataput;
    }

    async delete(url) { // DELETE
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE'
        }); // Response object
        return "Veri silme işlemi başarılı";
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

// çıktılar
// (100) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// Veri silme işlemi başarılı
// {userId: 1, title: "Selçuk", id: 101}
// {userId: 10, title: "Şeyho Karma", id: 1}