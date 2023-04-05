var loginName = ['Rony', 'Marianne'];
var senhas = ['1704'];
function enviar(){ 
    let loginDigitado = document.getElementById('login').value; 
    let senhaDigitada = document.getElementById('senha').value;


    if(loginName.indexOf(loginDigitado) > -1 && senhas.indexOf(senhaDigitada) > -1){
        location.href="../index.html";
    }else{
        alert("Você errou alguma coisa, meu bem.");
    };
}