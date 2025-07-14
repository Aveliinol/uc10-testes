const calculaDesconto = require('../modules/questao05');

describe('Testes para validar a função calculacDesconto', () => {
    test('Testando se calcula corretamente o desconto', () => {
        expect(calculaDesconto(100,10)).toBe(90.00);
        expect(calculaDesconto(100,10)).toBeLessThan(100.00);
    });
    test('Testando se exibe mensagem de erro ao passar parametros incorretos', () =>{
        expect(() => calculaDesconto()).toThrow('Não é possivel realizar o calculo de desconto.')
    });
    test('Testando se exibe mensagem de erro ao passar parametros negativos', ()=>{
        expect(()=>calculaDesconto(-100,-10)).toThrow('Não é possivel realizar o calculo de desconto.');
    });
    test('Testando se exibe mensagem de erro ao passar parametros de texto', ()=>{
        expect(()=>calculaDesconto('-100','-10')).toThrow('Não é possivel realizar o calculo de desconto.');
    });
    test('Testando se exibe mensagem de erro ao passar parametros de texto e número', ()=>{
        expect(()=>calculaDesconto('-100',-10)).toThrow('Não é possivel realizar o calculo de desconto.');
    });

})