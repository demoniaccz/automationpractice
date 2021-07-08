/// <reference types="cypress" />

import {navigate} from '../page_objects/objectlist.js';  /// imports shortcuts

// E2E Cart test
it("Cart Test", () => {
    //Visit website
    navigate()
    //Click on dresses
    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    //Check for assert
    cy.contains("Add to cart")
    //Click on add to cart button
    cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    //Check for assert - continue shopping and click it
    cy.contains("Continue").click()
    //Click on add to cart button
    cy.get('.last-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
    //Check for assert - proceed to checkout and click it
    cy.contains("checkout").click()
    //Delete an item, check for presence afterwards
    cy.get('#product_4_16_0_0 > .cart_delete > div').click().should('not.exist')
    //Click on plus (Add more items)
    cy.get('#cart_quantity_up_7_34_0_0 > span').click()
    //Click on proceed to checkout button
    cy.get('.cart_navigation > .button > span').click()
    //Fill in login info
    cy.get('#email').type("testuser123@test.abc")
    cy.get('#passwd').type(12345)
    //Click Sign in button
    cy.get('#SubmitLogin > span').click()
    //Check for assert
    cy.contains("delivery address")
    //Untick delivery address is same as billing address
    cy.get('#addressesAreEquals').click()
    //Select different delivery address
    cy.get('#id_address_invoice').select("NewAddress")
    //Check for assert
    cy.contains("Texas")
    //Add a comment
    cy.get('#ordermsg > .form-control').type("TestTestTest")
    //Click on proceed to checkout button
    cy.get('.cart_navigation > .button > span').click()
    //Check for assert
    cy.contains("shipping option")
    //Tick Terms of service
    cy.get('#cgv').click()
    //Click on proceed to checkout button
    cy.get('.cart_navigation > .button > span').click()
    //Check for assert
    cy.contains("pay")
    //Click on pay by bank wire
    cy.get('.bankwire').click()
    //Check for assert
    cy.contains("bank")
    //Click on confirm order button
    cy.get('#cart_navigation > .button > span').click()
    //Check for assert
    cy.contains("complete")
})