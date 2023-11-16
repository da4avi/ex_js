function calculo() {
    let quilo = Number(document.querySelector("#quilo").value);
    let grama = Number(document.querySelector("#grama").value);

    let preco = (grama / 1000) * quilo;

    let outvalor = document.querySelector("#outvalor");

    outvalor.innerText = `Valor a pagar R$: ${preco}`
};

let botao = document.querySelector("#botao");
botao.addEventListener('click', function() {
    calculo();
});