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
    .get('div[class="score-board"]')
    .should('be.visible')
  })

describe('Playing the game', () => {

  it('displays the Player\'s choice', () => {
    cy
    .get('#rock-btn')
    .click()
    .get('.who-won-div').as('resultDiv')
    .get('@resultDiv')
    .contains('You chose rock')

    cy
    .get('#paper-btn')
    .click()
    .get('@resultDiv')
    .wait(500)
    .contains('You chose paper')

    cy
    .get('#scissors-btn')
    .click()
    .get('@resultDiv')
    .wait(500)
    .contains('You chose scissors')
  })

  it('displays the winner', () => {
    cy
    .get('#scissors-btn')
    .click()
    .get('.who-won-div').as('resultDiv')
    .get('@resultDiv')
    .should('contain', 'Computer chose')
  })

  it('resets after a finished game', () => {
    cy
    .get('#scissors-btn')
    .click()
    .get('.who-won-div').as('resultDiv')
    .get('@resultDiv')
    .should(($resultDiv) => {
        expect($resultDiv)
        .to.have.text('')
  })
})
})
})