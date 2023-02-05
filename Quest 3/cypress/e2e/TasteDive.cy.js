///<reference types= "Cypress" />
describe('TasteDive', () => {
  it('Get API', () => {
    cy.fixture('filmNames')
      .then(getData => {
        cy.apiSearch(getData.movie)
          .then(response =>{
                expect(response.body.Similar.Info[0].Name)
                .eq("Godzilla")})   
                          })})
  }
)