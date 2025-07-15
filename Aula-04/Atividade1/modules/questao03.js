function calcularDesconto(preco, quantidade) {
    if (preco <= 0 || quantidade <= 0) {
    return 0;
    }
    let desconto = 0;
    if (quantidade > 10) {
    desconto = preco * 0.1;
    } else if (quantidade > 5) {
    desconto = preco * 0.05;
    }
    return desconto;
   }

module.exports = calcularDesconto