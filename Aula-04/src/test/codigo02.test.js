const classificaTemperatura = require('../modules/codigo02')

describe('classificarTemperatura', () => {
    test('Retorna frio se a temperatura estiver menor que 15°c', () =>{
        expect(classificaTemperatura(8)).toBe('Frio');
    });
    test('Retorna agradável se a temperatura estiver entre 15°c e 25°c', () => {
        expect(classificaTemperatura(23)).toBe('Agradável');
    });
    test('Retorna quente se a temperatura estiver acima de 25°c', () => {
        expect(classificaTemperatura(32)).toBe('Quente');
    });
})