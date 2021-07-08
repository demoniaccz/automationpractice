/// <reference types="cypress" />

import {navigate} from '../page_objects/objectlist.js';  /// imports shortcuts


// Registration Test
it('Registration Test', () => {
    //Visit website
    navigate()
    //Click on login
    cy.get('.login').click()
    //Check for assert
    cy.contains("create")
    //Function to generate random email address
    function generateEmailAddress() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var email = "@hey.abc"

        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text+email;
    }
    const generatedEmailAddress = generateEmailAddress()
    //Fill in email address
    cy.get('#email_create').type(generatedEmailAddress)
    //Click Create an account button
    cy.get('#SubmitCreate > span').click()
    //Pick a gender option
    cy.get('#id_gender1')
    //Fill in first name
    cy.get('#customer_firstname').type("Test")
    //Fill in last name
    cy.get('#customer_lastname').type("TestTwo")
    //Fill in password (hardcoded)
    cy.get('#passwd').type(123456)
    //Select day of birth
    cy.get('#days').select("3")
    //Select month of birth
    cy.get('#months').select("January")
    //Select year of birth
    cy.get('#years').select("2000")
    //Select newsletter
    cy.get('#newsletter').click
    //Select special offer
    cy.get('#optin').click
    //Fill in company name
    cy.get('#company').type("7777 Ltd.")
    //Fill in address - street
    cy.get('#address1').type("Nova 1")
    //Fill in address - city
    cy.get('#city').type("Praha")
    //Fill in address - state
    cy.get('#id_state').select("California")
    //Fill in adress - postcode
    cy.get('#postcode').type(90210)
    //Fill in additional information
    cy.get('#other').type("asdasd TEST")
    //Fill in landline number
    cy.get('#phone').type(987654321)
    //Fill in mobile number
    cy.get('#phone_mobile').type(123456789)
    //Click Register button
    cy.get('#submitAccount > span').click()
    //Check for assert
    cy.contains("account")
})