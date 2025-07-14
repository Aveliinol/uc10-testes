const calcularMedia = require('../modules/questao01')


describe('Testes para a função calcularMedia', () => {

test('Testando se a função calcula corretamente a média', () =>{
    expect(calcularMedia([8,8,2])).toBe(6);
});

test('Testando se a função retorna um erro ao receber um arry vazio', () => {
    expect(calcularMedia([])).toBeNull();
});

test('Testando se o tipo de dado não é um array', ()=> {
    expect(()=>calcularMedia("Lucas")).toThrow('Não é possível realizar o calculo');
});

test('Testando se a função retorna erro quando nenhum dado é passado como parametro', ()=>{
    expect(()=>calcularMedia()).toThrow('Não é possível realizar o calculo');
})


})