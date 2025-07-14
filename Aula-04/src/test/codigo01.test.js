const validaSenha = require('../modules/codigo01')

describe('validaSenha', () => {
    test('retorna false se a senha não for uma string', () => {
      expect(validaSenha(12345678)).toBeFalsy();
      expect(validaSenha({})).toBeFalsy();
    });
  
    test('retorna false se a senha tiver menos de 8 caracteres', () => {
      expect(validaSenha('abc123')).toBeFalsy(); 
    });
  
    test('retorna false se não houver nenhuma letra', () => {
      expect(validaSenha('12345678')).toBeFalsy();
    });
  
    test('retorna false se não houver nenhum número', () => {
      expect(validaSenha('abcdefgh')).toBeFalsy();
    });
  
    test('retorna false se houver espaços', () => {
      expect(validaSenha('abc 1234')).toBeFalsy();
    });
  
    test('retorna true se a senha for válida', () => {
      expect(validaSenha('Abc12345')).toBeTruthy();
    });
  });