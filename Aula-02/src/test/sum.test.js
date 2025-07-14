const sum = require('../modules/sum');

  test('soma de 1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

test('Atividade', () => {
  expect(sum(1, '2')).toBe('Erro não é possivel realizar a soma');
});