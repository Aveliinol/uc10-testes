const ehPrimo = require('../modules/questao03');

describe('Testes para validar a função ehPrimo', () => {
    test('Testando se retorna corretamente true para um número primo', () => {
        expect(ehPrimo(7)).toBeTruthy();
    });
    test('Testando se retorna corretamente false para um número que não é primo', () => {
        expect(ehPrimo(1)).toBeFalsy();
    });
    test('Testando se a função retorna erro quando nenhum dado é passado como parametro', ()=>{
        expect(()=>ehPrimo()).toThrow('Não é possível verificar a função');
    });
    test('Testando se a função retorna erro quando o dado é passado no formato incorreto', ()=>{
        expect(() => ehPrimo(-7)).toThrow('Não é possível verificar se o valor é primo');
        expect(() => ehPrimo('sete')).toThrow('Não é possível verificar se o valor é primo');
        expect(() => ehPrimo([7])).toThrow('Não é possível verificar se o valor é primo');
    });

})