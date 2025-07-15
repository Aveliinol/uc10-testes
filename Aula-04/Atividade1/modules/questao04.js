function validarLogin(usuario, senha) {
    if (!usuario || !senha) {
    return false;
    }
    if (usuario === 'admin') {
    if (senha === '1234') {
    return true;
    } else {
    return false;
    }
    } else {
    return false;
    }
   }

module.exports = validarLogin