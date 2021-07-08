/// <reference types="cypress" />

import {navigate} from '../page_objects/objectlist.js';  /// imports shortcuts

// Simple search test
it("Search", () => {
    //Visit website
    navigate()
    //Get a search bar a types in desired search
    cy.get('#search_query_top').type('Dress')
    //Check for assert
    cy.get('#searchbox > .btn').click().url().should('include', 'search_query=Dress')   
})
