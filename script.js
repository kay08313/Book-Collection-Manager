
const name = "kay"
const pw = "asdf"

function login(){
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const result = document.getElementById("result")

    const tlusernm = username.value.toLowerCase()
    const tluserpw = password.value.toLowerCase()

    if (tlusernm === name && tluserpw === pw){

        window.location.href = "page2.html";

    }else{

        result.textContent = "Wrong User id or Password!!!"

    }

}




