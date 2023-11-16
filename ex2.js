function promocao() {
    let veiculo = document.querySelector("#inveiculo").value;
    let preco = Number(document.querySelector("#inpreco").value);

    let metade = preco / 2;
    let parcela = Math.floor(metade / 12);

    let outveiculo = document.querySelector("#outveiculo");
    let outmetade = document.querySelector("#outmetade");
    let outparcela = document.querySelector("#outparcela");

    outveiculo.innerText = `promoção do carro ${veiculo}`;
    outmetade.innerText = `entrada de: R$${metade}`;
    outparcela.innerText = `12x de: R$${parcela}`;
}

let botao = document.querySelector("#botao");
botao.addEventListener('click', function() {
    promocao();
})