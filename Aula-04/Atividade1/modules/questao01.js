function verificarAcesso(usuario) {
    if (!usuario) {
    return 'Acesso negado';
    }
    if (usuario.idade >= 18) {
    if (usuario.matriculado) {
    return 'Acesso permitido';
    } else {
    return 'Necessário estar matriculado';
    }
    } else {
    return 'Idade insuficiente';
    }
   }

module.exports = verificarAcesso  