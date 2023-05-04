var botao = document.getElementById('clique');

botao.onclick = function(){
    if(botao.value === 'troca'){
        p1.src = 'cristiano.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        p1.src = 'ronaldo.jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}