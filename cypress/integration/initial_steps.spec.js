import React from "react"

describe('The home page', function () {
    it('successfully loads', function() {
        cy.visit('/')
        cy.contains('Rock, Paper, Scissors')
    })
})