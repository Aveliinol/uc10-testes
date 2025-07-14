const verificaIntervalo = require('../modules/codigo05');

describe('Testes para validar a função verificarIntervalo', ()=>{
    test('Teste do caminho 01 - (1-2-fim) false', ()=>{
       expect(verificaIntervalo("u")).toBeFalsy();
    });
    test('Teste do caminho 02 - (1-2-3-fim) false', ()=>{
        expect(verificaIntervalo(3)).toBeFalsy();
     });
     test('Teste do caminho 03 - (1-2-3-4-fim) false', ()=>{
        expect(verificaIntervalo(15)).toBeTruthy();
     });
   
});