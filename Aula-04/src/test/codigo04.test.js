const divideNumeros = require('../modules/codigo04');

describe('Testes para validar a função divideNumeros', ()=>{
    test('Teste do caminho 01 - (1-2-fim) Entrada inválida ', ()=>{
       expect(()=>divideNumeros('8', '2')).toThrow('Entrada inválida')
    });
    test('Teste do caminho 02 - (1-2-3-fim) Divisão por zero', ()=>{
        expect(()=>divideNumeros(8,0)).toThrow('Divisão por zero')
     });
     test('Teste do caminho 03 - (1-2-3-4-fim) Divisão ok', ()=>{
        expect(divideNumeros(8,2)).toBe(4);
     });
});