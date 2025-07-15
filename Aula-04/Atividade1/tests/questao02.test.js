const calcularFrete = require('../modules/questao02')

describe('Testes para a função calcularFrete', () => {

    test('Deve retornar 0 se peso for 0', () => {
    expect(calcularFrete(0, 100)).toBe(0);
  });

  test('Deve retornar 0 se distância for 0', () => {
    expect(calcularFrete(50, 0)).toBe(0);
  });

  test('Deve retornar 50 se peso for maior que 100', () => {
    expect(calcularFrete(150, 300)).toBe(50);
  });

  test('Deve retornar 40 se distância maior que 500', () => {
    expect(calcularFrete(80, 600)).toBe(40);
  });

  test('Deve retornar 30 se peso e distância estiverem dentro dos limites padrão', () => {
    expect(calcularFrete(80, 400)).toBe(30);
  });

  test('Deve retornar 50 mesmo se distância for alta, mas se o peso for maior que 100 tem prioridade', () => {
    expect(calcularFrete(120, 1000)).toBe(50);
  });
});