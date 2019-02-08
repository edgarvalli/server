let session =  localStorage.getItem("session") || sessionStorage.getItem("session");
session =  JSON.parse(this.session);
const headers = {
    headers: {
        "Content-Type": "Application/Json",
        "Accept": "Application/Json",
        "Token": session.token
    },
    method: "get"
}
const setLocalStorage = (data) => localStorage.setItem("session", JSON.stringify(data));
const setSessionStorage = (data) => sessionStorage.setItem("session", JSON.stringify(data));


module.exports = url => {

    return {
        async autenticate(cred, autoLogin) {
        
            const request = await fetch(url, {
                headers: {
                    "Content-Type": "Application/Json",
                    "Accept": "Application/Json"
                },
                method: "post",
                body: JSON.stringify(cred)
            }).catch(error => console.log(error));
            const response = await request.json();

            if (response.error) {
                console.error("Ocurrio un error al realizar la peticion: " + error)
            } else {
                if(autoLogin) {
                    
                }
            }
    
            return response;
        },
        async get() {
    
            const request = await fetch(url, headers).catch(error => console.log(error));
            const response = await request.json();
            if (session.autoLogin) {
                if (response.error) {
                    if (response.tokenExpired) {
                        this.autenticate();
                    } else {
                        console.error("Ocurrio un error al realizar la peticion: " + error)
                    }
                }
            }

            return response;
    
        }
    }


}