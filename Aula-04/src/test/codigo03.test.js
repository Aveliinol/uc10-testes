const calculaImposto = require('../modules/codigo03');

describe('Testes para validar a função calculaImposto', ()=>{
    test('Teste do caminho 01 - (1-2-fim) null', ()=>{
        expect(calculaImposto("d")).toBeNull();
        expect(calculaImposto(-5)).toBeNull();
    });
    test('Teste do caminho 02 - (1-2-3-fim) 0', ()=>{
        expect(calculaImposto(2000)).toBe(0);
    });
    test('Teste do caminho 03 - (1-2-3-4-fim) 15%', ()=>{
        expect(calculaImposto(2005)).toBe(2005*0.15);
    });
    test('Teste do caminho 04 - (1-2-3-4-fim) 15%', ()=>{
        expect(calculaImposto(5001)).toBe(5001*0.275);
    });
})