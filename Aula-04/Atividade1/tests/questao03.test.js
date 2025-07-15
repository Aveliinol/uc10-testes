const calcularDesconto = require('../modules/questao03');

describe('Testes para calcularDesconto', () => {
    test('Deve retornar 0 se preco for zero ou negativo', () => {
      expect(calcularDesconto(0, 5)).toBe(0);
      expect(calcularDesconto(-10, 5)).toBe(0);
    });
  
    test('Deve retornar 0 se quantidade for zero ou negativa', () => {
      expect(calcularDesconto(100, 0)).toBe(0);
      expect(calcularDesconto(100, -3)).toBe(0);
    });
  
    test('Deve retornar 10% de desconto se quantidade for maior que 10', () => {
      expect(calcularDesconto(100, 11)).toBeCloseTo(10);
      expect(calcularDesconto(200, 20)).toBeCloseTo(20);
    });
  
    test('Deve retornar 5% de desconto se quantidade for maior que 5', () => {
      expect(calcularDesconto(100, 6)).toBeCloseTo(5);
      expect(calcularDesconto(200, 10)).toBeCloseTo(10);
    });
  
    test('Deve retornar 0 se quantidade for menor ou igual a 5', () => {
      expect(calcularDesconto(100, 5)).toBe(0);
      expect(calcularDesconto(200, 1)).toBe(0);
    });
  });