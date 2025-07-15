const verificarAcesso = require('../modules/questao01');

describe('Testes para a função verificarAcesso', () => {
  test('Deve negar acesso quando o usuário é null', () => {
    expect(verificarAcesso(null)).toMatch('Acesso negado');
  });

  test('Deve negar acesso quando o usuário é undefined', () => {
    expect(verificarAcesso(undefined)).toMatch('Acesso negado');
  });

  test('Deve permitir acesso quando usuário tem idade >= 18 e está matriculado', () => {
    const usuario = { idade: 20, matriculado: true };
    expect(verificarAcesso(usuario)).toMatch('Acesso permitido');
  });

  test('Deve negar acesso por idade insuficiente mesmo se estiver matriculado', () => {
    const usuario = { idade: 17, matriculado: true };
    expect(verificarAcesso(usuario)).toMatch('Idade insuficiente');
  });
});