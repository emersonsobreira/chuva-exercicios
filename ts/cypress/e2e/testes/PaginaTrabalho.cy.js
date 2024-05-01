/// <reference types="Cypress"/>

describe('Testes página de trabalho', () => {
    it('deve expandir o resumo', () => {
        cy.visit("http://localhost:4200/")
        cy.get('.btn-show-more').click()
    });

    it('Funcionalidade tópico', () => {
        cy.visit("http://localhost:4200/")
        cy.get('.btn-create-topic').click()
        cy.get('.subject').type('assunto')
        cy.get('.content').type('Olá Mundo')
        cy.get('.answered-topic > .card > .topic > .info > [src="assets/icons/more_info.svg"]').click()
    });
});
