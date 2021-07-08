/// <reference types="cypress" />

import {navigate} from '../page_objects/objectlist.js';  /// imports shortcuts


// Contact us - Webmaster test
it('Contact Us - Webmaster', () => {
    //Visit website
    navigate()
    //Click on contact us
    cy.get('#contact-link > a').click()
    //Picks subject heading option
    cy.get('#id_contact').select('Webmaster')
    //Check for assert
    cy.contains("technical problem")
    //Fill in email
    cy.get('#email').type('test@sdsdsd.com')
    //Fill in Order reference
    cy.get('#id_order').type("asdasd")
    //Upload file using cypress-file-upload plugin
    cy.get('#fileUpload').attachFile('dummy.png')
    //Fill in message
    cy.get('#message').type('This is a test message')
    //Click on Send button
    cy.get('#submitMessage > span').click()
    //Check for assert
    cy.contains("successfully")
})

// Contact us - Customer service test
it('Contact Us - Customer service', () => {
    //Visit website
    navigate()
    //Click on contact us
    cy.get('#contact-link > a').click()
    //Picks subject heading option
    cy.get('#id_contact').select('Customer service')
    //Check for assert
    cy.contains("about a product")
    //Fill in email
    cy.get('#email').type('test@sdsdsd.com')
    //Fill in Order reference
    cy.get('#id_order').type("asdasd")
    //Upload file using cypress-file-upload plugin
    cy.get('#fileUpload').attachFile('dummy.png')
    //Fill in message
    cy.get('#message').type('This is a test message')
    //Click on Send button
    cy.get('#submitMessage > span').click()
    //Check for assert
    cy.contains("successfully")
})


// Contact us - negative test
it('Contact Us - negative test', () => {
    //Visit website
    navigate()
    //Click on contact us
    cy.get('#contact-link > a').click()
    //Picks subject heading option
    cy.get('#id_contact').select('Webmaster')
    //Check for assert
    cy.contains("technical problem")
    //Fill in email
    cy.get('#email').type('test@sdsdsd.com')
    //Click on Send button
    cy.get('#submitMessage > span').click()
    //Check for assert
    cy.contains("error")
})