const form = document.getElementById('form-validacao');

const campo_a = document.getElementById('campo-a');
const campo_b = document.getElementById('campo-b');


function valida_teste(campo_a,campo_b){
    return  campo_b > campo_a;

}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagem_sucesso = `Sucesso! <b>${campo_b.value}</b> é maior que <b>${campo_a.value}</b>`
    const mensagem_erro = `Corrija! o campo A é maior ou igual ao Campo B.`
    if(valida_teste(campo_a.value,campo_b.value)) {
        container_mensagem = document.querySelector('.message');
        container_mensagem.innerHTML = mensagem_sucesso;
        container_mensagem.style.display = 'block';
        container_mensagem.style.backgroundColor = "#045014";

        campo_a.value = '';
        campo_b.value = '';

    } else {
        container_mensagem = document.querySelector('.message');
        container_mensagem.innerHTML = mensagem_erro;
        container_mensagem.style.display = 'block';
        container_mensagem.style.backgroundColor = "#800000";
    }
})


