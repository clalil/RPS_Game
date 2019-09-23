
describe('The home page', () => {
    it('successfully loads the page content', () => {
        cy.visit('/')
        cy.get('h1')
        .should('contain', "Rock, Paper, Scissors")

        cy.get('.user_choice')
        .should('contain', "Rock")
        .should('contain', "Paper")
        .should('contain', "Scissors")
    })
})