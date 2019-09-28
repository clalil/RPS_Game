
describe('Cypress', () => {
    it('should work', () => {
        expect(true).to.equal(true)
    })
})

describe('When visiting the home page', () => {

    it('successfully loads the page content', () => {
        cy.visit('/')
        cy.get('h1')
        .should('contain', "Rock, Paper, Scissors")
        .get('h3')
        .should('contain', "Welcome, the rules are simple:")

        cy
        .get('ul')
        .should('be.visible')
        .get('li')
        .should('have.length', 3)

        cy
        .get('div[class="userChoice"]')
        .find('img')
        .should('be.visible')

        cy
        .get('button[class="ui inverted black button"]')
        .should('be.visible')

        cy
        .get('div[class="scoreBoard"]')
        .should('be.visible')
    })

    // describe('Playing the game', () => {

    //     it('chooses rock, paper or scissors', () => {
    //         cy.get('.user_choice')
    //         .find('#rock').as('rockBtn')
    //         cy.get('@rockBtn').click()
    //         cy.contains('You chose Rock')

    //         cy.get('.user_choice')
    //         .find('#paper').as('paperBtn')
    //         cy.get('@paperBtn').click()
    //         cy.contains('You chose Paper')

    //         cy.get('.user_choice')
    //         .find('#scissors').as('scissorsBtn')
    //         cy.get('@scissorsBtn').click()
    //         cy.contains('You chose Scissors')
    //     })

    //     it('renders a choice for the computer', () => {
    //         cy.get('.runGame')
    //         .find('#startGame').as('gameBtn')
    //         cy.get('@gameBtn').click()
    //         cy.contains('Computer chose')
    //     })

    //     it('declares a winner', () => {
    //         cy.get('.runGame')
    //         .find('#startGame').as('gameBtn')
    //         cy.get('@gameBtn').click()
    //         cy.contains('won')
    //     })

    // })

    describe('Not getting to play the game', () => {

        // it('forgets to choose a weapon', () => {
        //     cy.get('.runGame')
        //     .find('#startGame').as('gameBtn')
        //     cy.get('@gameBtn').click()
        //     cy.get('.compChoice').should('not.contain', 'Computer')
        // })

    })
})