const cubo = require('../modules/cubo')

test('Vomule do cubo', () => {
    expect(cubo('4', 2, 6)).toBe("Erro no parâmetro");
  });

  test('Vomule do cubo', () => {
    expect(cubo(-4, -2, -6)).toBe('Erro valor negativo');
  });

  test('Vomule do cubo', () => {
    expect(cubo(0, 0, 0)).toBe('Erro valor negativo');
  });