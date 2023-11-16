function promo() {
    let preco = Number(document.querySelector("#preco").value);

    let promo3 = preco + preco + preco / 2;
    let promo = preco / 2;

    let outpromo = document.querySelector("#outpromo");

    outpromo.innerText = `Promoção: Leve 3 por R$: ${promo3} \n\n O 3º produto custa apenas R$: ${promo}`
}

let botao = document.querySelector("#botao");
botao.addEventListener('click', function() {
    promo();
});