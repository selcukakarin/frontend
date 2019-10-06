class Storage {

    static getSearchedUsersFromStorage() {
        //  Tüm kullanıcıları al
        let users;
        if (localStorage.getItem("searched") === null) {
            users = [];

        }else{
            users = JSON.parse(localStorage.getItem("searched"));   // localstorage deki değeri JSON arrayine çevirdik

        }
        return users;
    }
    static addSearchedUsersToStorage(username) {
        // Kullanıcı ekle

        let users = this.getSearchedUsersFromStorage()
        // let users = Storage.getSearchedUsersFromStorage()  // yukarıdaki kod ile aynı işleve sahip

        // indexOf
        if (users.indexOf(username)===-1){
            users.push(username);   // eğer böyle bir username yok ise localstorage'a ekle
            // users stringi içerisinde username (selcukakarin) var mı diye kontrol eder yoksa -1 döner
        }
        localStorage.setItem("searched",JSON.stringify(users));

    }
    static clearAllSearchedUsersFromStorage() {
        // Tüm kullanıcıları sil
        localStorage.removeItem("searched");
    }

}