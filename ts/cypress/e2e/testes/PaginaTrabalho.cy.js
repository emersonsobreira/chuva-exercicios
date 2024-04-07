/// <reference types="Cypress"/>

describe('Testes pagina de trabalho', () => {
    it('deve expandir o resumo', () => {
        cy.visit("http://localhost:4200/")
        cy.get('.btn-show-more').click()
    });
});

    it('Funcionalidade topico', () => {
        cy.visit("http://localhost:4200/")
        cy.get('.btn-create-topic').click()
        cy.get('.subject').type('assunto')
        cy.get('.content').type('ola Mundo')
        cy.get('.answered-topic > .card > .topic > .info > [src="assets/icons/more_info.svg"]').click()
    });
