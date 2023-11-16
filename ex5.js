function calcvalor() {
    let valor = Number(document.querySelector("#valor").value);
    let tempo = Number(document.querySelector("#tempo").value);

    let calcvalor = Math.round((15 / tempo) * valor) ;

    let outvalor = document.querySelector("#outvalor");

    outvalor.innerText = `Valor a pagar R$: ${calcvalor},00`
}

let botao = document.querySelector("#botao");
botao.addEventListener('click', function() {
    calcvalor();
});