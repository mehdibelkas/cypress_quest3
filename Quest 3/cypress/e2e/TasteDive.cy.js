///<reference types= "Cypress" />
describe('TasteDive', () => {
  it('Get API', () => {
    cy.fixture('filmNames')
      .then(getData => {
        cy.apiSearch(getData.movie)      
                          })
      
                             })
                                })