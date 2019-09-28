
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

    describe('Playing the game', () => {

        it('chooses a weapon and plays the game', () => {
            cy
            .get('.userChoice')
            .find('#rock').as('rockBtn')
            .get('@rockBtn').click()
            .get('#cyDivResult').as('resultDiv')
            .get('@resultDiv')
            .contains('You chose rock')

            cy
            .get('.userChoice')
            .find('#paper').as('paperBtn')
            .get('@paperBtn').click()
            .get('@resultDiv')
            .wait(500)
            .contains('You chose paper')

            cy
            .get('.userChoice')
            .find('#scissors').as('scissorsBtn')
            .get('@scissorsBtn').click()
            .get('@resultDiv')
            .wait(500)
            .contains('You chose scissors')
        })

        it('knows who won the game', () => {
            cy
            .get('.userChoice')
            .find('#rock').as('rockBtn')
            cy.get('@rockBtn').click()
            cy.contains('You chose rock')
            cy.contains('Computer chose')
        })

    })
})