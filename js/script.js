let sliderElement = document.querySelector("#slider");
let btnElement = document.querySelector("#btn");

let tamanho = document.querySelector("#tamanho");
let senha = document.querySelector("#senha");
let copiado = document.querySelector("#copiado")

let senhaPanel = document.querySelector("#senhaPanel");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novaSenha = "";


//ajustando tamanho da senha
tamanho.innerHTML = sliderElement.value

sliderElement.oninput = function(){
    tamanho.innerHTML = this.value
}

//Gerando a senha
function gerarSenha(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() *n))      
    }
    
    senhaPanel.classList.remove("hide")
    senha.innerHTML = pass;
    novaSenha = pass;
}

//Copiar senha
function copiarSenha(){
    copiado.classList.remove("hideCopy");
    navigator.clipboard.writeText(novaSenha);
};

function esconderCopiar(){
    copiado.classList.add("hideCopy");
};

if(copiarSenha){
    setInterval(esconderCopiar, 3000);
}
