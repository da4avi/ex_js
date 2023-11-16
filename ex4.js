function promocao() {
    let preco = Number(document.querySelector("#preco").value);
    let promo = Math.floor(preco * 2);

    let outpromo = document.querySelector("#outpromo");

    outpromo.innerText = `Leve 2 por apenas R$: ${promo},00`
}

let botao = document.querySelector("#botao");
botao.addEventListener('click', function() {
    promocao();
});