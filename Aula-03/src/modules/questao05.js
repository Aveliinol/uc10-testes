function calculaDesconto(valor, percentual){
    if(!valor || !percentual || valor <= 0 || percentual <= 0 || percentual > 100 || typeof valor !== 'number' || typeof percentual !== 'number'){
        throw new Error('Não é possivel realizar o calculo de desconto.');
    }

    let total = valor - valor*(percentual/100);

    return  parseFloat(total.toFixed(2));
}
module.exports = calculaDesconto;