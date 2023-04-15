var loginName = ['Rony', 'Marianne'];
var senhas = ['0417'];
function enviar(){ 
    let loginDigitado = document.getElementById('login').value; 
    let senhaDigitada = document.getElementById('senha').value;


    if(loginName.indexOf(loginDigitado) > -1 && senhas.indexOf(senhaDigitada) > -1){
        location.href="home/home.html";
    }else{
        alert("Você errou alguma coisa, meu bem.");
    };
}