
describe('Acessar home', () => {
  it('rotas', () => {
    cy.visit('http://localhost:5173/')
  })
})
describe('Criar Livro', () => {
  it('cadastro livro', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Adicionar Livro").click();
    cy.get("input[placeholder=Título]").type("It - A Coisa");
    cy.get("input[placeholder=Autor]").type("Stephen King");
    cy.get("input[placeholder=Ano]").type("1986");
    cy.get("input[placeholder=Gênero]").type("Terror");
    cy.get("input[placeholder=Preço]").type("79.90");
    cy.contains("Salvar").click();
  })
  it('cadastro com dados vazios', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Adicionar Livro").click();
    cy.contains("Salvar").click();
    cy.on('window:alert', (msg) => {
      expect(msg).to.equal("Todos os campos são obrigatórios");
    });
  })
})