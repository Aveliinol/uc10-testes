const isEmpty = require('../modules/questao06');

describe('Testes para a função isEmpty', ()=>{
    test('Testando se retorna true para uma entrada ""', ()=>{
        expect(isEmpty("")).toBeTruthy();
    });
    test('Testando se retorna true para a entrada []', ()=>{
        expect(isEmpty([])).toBeTruthy();
    });
    test('Testando se retorna true para a entrada null', ()=>{
        expect(isEmpty(null)).toBeTruthy();
    });
    test('Testando se retorna false para nenhuma entrada', ()=>{
        expect(isEmpty()).toBeFalsy();
    });
    test('Testando se retorna false para uma entrada não vazia', ()=>{
        expect(isEmpty("null")).toBeFalsy();
    });
})