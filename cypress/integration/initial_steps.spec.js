
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

    describe('Playing the game', () => {

        it('chooses rock, paper or scissors', () => {
            cy.get('.user_choice')
            .find('#rock').as('rockBtn')
            cy.get('@rockBtn').click()
            cy.contains('You chose Rock')
        })

        it('renders a choice for the computer', () => {
            cy.get('.runGame')
            .find('#startGame').as('gameBtn')
            cy.get('@gameBtn').click()
            cy.contains('Computer chose')
        })

        it('declares a winner', () => {
            cy.get('.runGame')
            .find('#startGame').as('gameBtn')
            cy.get('@gameBtn').click()
            cy.contains('won')
        })

    })
})