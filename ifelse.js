function verificarLogin(){
    let txtlogin = document.getElementById("txtlogin");
    let txtSenha = document.getElementById("txtSenha");

    let login = "teste";
    let Senha = "teste";

    if(txtlogin.value == login && txtSenha.value == senha) {
        console.log("logado com sucesso!");
    } else{
        console.log("Login ou senha incorretos! Digite e tente novamente")
    }
}