
function isEmpty(valor){
    if( (Array.isArray(valor) && valor.length === 0) || valor == 'undefind' || valor === "" || valor === null ){
        return true
    }
    return false 
}

module.exports = isEmpty;