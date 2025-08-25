
describe('Acessar home', () => {
  it('rotas', () => {
    cy.visit('http://localhost:5173/')
    cy.url().should('include', '/')
  })
})
describe('Criar Livro', () => {
  it('cadastro livro', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Adicionar Livro").click();
    cy.url().should('include', '/livros/novo');
    cy.get("input[placeholder=Título]").type("It - A Coisa"), { delay: 1000 };
    cy.get("input[placeholder=Autor]").type("Stephen King"), { delay: 1000 };
    cy.get("input[placeholder=Ano]").type("1986"), { delay: 1000 };
    cy.get("input[placeholder=Gênero]").type("Terror"), { delay: 1000 };
    cy.get("input[placeholder=Preço]").type("79.90"), { delay: 1000 };
    cy.contains("Salvar").click();
  })
  it('cadastro com dados vazios', () => {
    cy.visit('http://localhost:5173/')
    cy.contains("Adicionar Livro").click();
    cy.url().should('include', '/livros/novo');
    cy.contains("Salvar").click();
    cy.on('window:alert', (msg) => {
      expect(msg).to.equal("Todos os campos são obrigatórios");
    });
  })
})
describe('Editar Livro', () => {
  it('Editar livro', () => {
    cy.visit('http://localhost:5173/livros');
    cy.url().should('include', '/livros');
    cy.contains('Editar').click();
    cy.url().should('include', '/livros/editar/1')
    cy.get("input[placeholder=Título]").should('value', "It - A Coisa");
    cy.get("input[placeholder=Autor]").should('value', "Stephen King");
    cy.get("input[placeholder=Ano]").should('value', "1986");
    cy.get("input[placeholder=Gênero]").should('value', "Terror");
    cy.get("input[placeholder=Preço]").should("value", "79.9");
    cy.contains('Salvar Alterações').click();
  })
  
})
describe('Excluir Livro', () => {
  it('Excluir livro', () => {
    cy.visit('http://localhost:5173/livros');
    cy.url().should('include', '/livros');
    cy.contains("Excluir").click();
    cy.url().should('include', '/livros');
  })
})