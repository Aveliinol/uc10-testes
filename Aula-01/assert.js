//validador
function assertEquals(actual, expect, message = '') {
    if (actual !== expect) {
        throw new Error(`❌ Falhou: ${message} - Esperado: ${expect}, Obtido: ${actual}`);
    }
    console.log(`👍 Passou: ${message}`);
}

function soma(a, b){
    return a + b;
}

function multiplicar(a, b){
    return a * b
}

function Par(a){
    return a % 2 === 0;
}
function reverter(a) {
    return a.split('').reverse().join('');
}

function contar(a) {
    const vogais = 'aeiou';
    return a.split('').filter(char => vogais.includes(char)).length;
}

assertEquals(soma(2,2), 4,'Soma')
assertEquals(multiplicar(4,2), 8, 'Multiplicação')
assertEquals(Par(4), true, 'Par')
assertEquals(reverter('lucas'), 'sacul', 'Reverte')
assertEquals(contar('lucas'), 2, 'contar vogais')