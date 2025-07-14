const mensagemDeBoasVindas = require('../modules/questao04')

describe('Testes para a função messagemDeBoasVindas', () => {

    test('Testando se exibi corretamente a mensagem de boas-vindas', () => {
        expect(mensagem-  DeBoasVindas('Lucas')).toContain('Lucas');
        expect(mensagemDeBoasVindas('Lucas')).toMatch(/Olá/);
        expect(mensagemDeBoasVindas('Lucas')).toMatch(/^[A-Z][a-z]+/);
    });
    test('Testando se retorna uma mensagem de erro em relação para os parametros incorretos', () => {
        expect(() => mensagemDeBoasVindas()).toThrow('Erro ao exibir mensagem');
        expect(() => mensagemDeBoasVindas(3)).toThrow('Erro ao exibir mensagem');
        expect(() => mensagemDeBoasVindas([])).toThrow('Erro ao exibir mensagem');
        expect(() => mensagemDeBoasVindas({nome: "Lucas"})).toThrow('Erro ao exibir mensagem');
    })

})