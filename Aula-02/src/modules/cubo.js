function cubo (a){
    if(typeof a !== 'number'){
      return 'Erro no parâmetro'
    }
    else if(a <= 0){
      return 'Erro valor negativo'
    }

    return a * a * a;
}
module.exports = cubo