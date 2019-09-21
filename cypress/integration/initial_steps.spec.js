import React from "react"

describe('The home page', function () {
    it('successfully loads', function() {
        cy.visit('/')

        cy.get('h1')
        .should('contain', "Rock, Paper, Scissors")

        cy.get('.user_choice')
        .should('contain', "Rock")
        .should('contain', "Paper")
        .should('contain', "Scissors")
    })

    describe('Playing the game', function () {

        it('succeessfully plays the game', function() {
            cy.get('.user_choice').click('#rock')
            cy.contains('You chose "Rock"')
        })

    })
})