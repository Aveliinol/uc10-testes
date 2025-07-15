const validarLogin = require('../modules/questao04')

describe('Função validarLogin', () => {
    test('Retorna falso (falsy) se usuário ou senha forem vazios ou indefinidos', () => {
      expect(validarLogin('', '1234')).toBeFalsy();
      expect(validarLogin('admin', '')).toBeFalsy();
      expect(validarLogin(null, '1234')).toBeFalsy();
      expect(validarLogin('admin', null)).toBeFalsy();
    });
  
    test('Retorna verdadeiro (truthy) para usuário admin com senha correta', () => {
      expect(validarLogin('admin', '1234')).toBeTruthy();
    });
  
    test('Retorna falso (falsy) para usuário admin com senha incorreta', () => {
      expect(validarLogin('admin', '4321')).toBeFalsy();
    });
  
    test('Retorna falso (falsy) para usuário diferente de admin, qualquer senha', () => {
      expect(validarLogin('user', '1234')).toBeFalsy();
      expect(validarLogin('user', 'senhaqualquer')).toBeFalsy();
    });
  
  });