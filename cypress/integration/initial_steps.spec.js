import React from "react"

describe('The home page', function () {
    it('successfully loads', function() {
        cy.visit('/')

        cy.get('h1')
        .should('contain', "Rock, Paper, Scissors")

        cy.get('.user_choice')
        .should('contain', "Rock, Paper, Scissors")
    })
})