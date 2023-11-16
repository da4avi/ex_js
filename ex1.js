function calculo() {
    let nome = document.querySelector("#nome").value;
    let duracao = Number(document.querySelector("#duracao").value);

    let horas = Math.floor(duracao / 60);
    let min = duracao%60;

    //saida de dados
    let outnome = document.querySelector("#outnome");
    let outduracao = document.querySelector("#outduracao");

    outnome.innerText = `titulo: ${nome}`;
    outduracao.innerText = `duracao: ${horas} horas e ${min} minutos`;
};

let botao = document.querySelector('#botao');
botao.addEventListener('click', function(){
    calculo();
});