function calcularFrete(peso, distancia) {
    if (peso <= 0 || distancia <= 0) {
    return 0;
    }
    if (peso > 100) {
    return 50;
    } else if (distancia > 500) {
    return 40;
    }
    return 30;
}

module.exports = calcularFrete