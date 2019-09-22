import React from "react"

describe('The home page', function () {
    it('successfully loads the page content', function() {
        cy.visit('/')
        cy.get('h1')
        .should('contain', "Rock, Paper, Scissors")

        cy.get('.user_choice')
        .should('contain', "Rock")
        .should('contain', "Paper")
        .should('contain', "Scissors")
    })

    describe('Playing the game', function () {

        it('chooses rock, paper or scissors', function() {
            cy.get('.user_choice')
            .find('#rock').as('rockBtn')
            cy.get('@rockBtn').click()
            cy.contains('You chose "Rock"')
        })

        it('renders a choice for the computer', function() {
            cy.get('.runGame')
            .find('#startgame').as('gameBtn')
            cy.get('@gameBtn').click()
            cy.contains('Computer chose')
        })

    })
})