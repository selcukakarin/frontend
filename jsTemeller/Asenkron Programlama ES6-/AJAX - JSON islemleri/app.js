document.getElementById("ajax").addEventListener("click", getAllEmployees);

function getAllEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "employees.json", true) // true = asyncronous - bağlantı aç
    xhr.onload = function () { // response alınabilen bir bağlantı olduğunda onload çalışır
        // tbody id = employees
        let list = document.getElementById("employees");

        if (this.status == 200) {
            console.log(this.responseText);
            // çıktı
            //     // JSON
            //     [{
            //         "name": "Selçuk Akarın",
            //         "department": "Bilişim",
            //         "salary": 3500
            //     }, {
            //         "name": "Ricardo Quaresma",
            //         "department": "Muhasebe",
            //         "salary": 100
            //     }, {
            //         "name": "Steven Gerrard",
            //         "department": "IK",
            //         "salary": 20
            //     }]
            console.log(typeof this.responseText); // çıktı string
            console.log(JSON.parse(this.responseText)); // response olarak gelen stringi JSON (array) dönüştürdük
            // çıktı  [{…}, {…}, {…}]
            const employees = JSON.parse(this.responseText);
            employees.forEach(function (employee) {
                list.innerHTML += `
                <tr>
                    <td>${employee.name}</td>
                    <td>${employee.department}</td>
                    <td>${employee.salary}</td>
                </tr>
                `;
            });
        }
    }
    xhr.send()
}