class Github {
    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username) {
        const responseUser = await fetch(this.url + username);      // Promise cevabı döndü
        const responseRepo = await fetch(this.url + username + "/repos");      // Promise cevabı döndü

        const userData= await responseUser.json();      // Promise'den dönen değeri json olarak aldık
        const repoData = await responseRepo.json();     // Promise'den dönen değeri json olarak aldık   

        return {
            user:userData,
            repo:repoData
        }
    }
}