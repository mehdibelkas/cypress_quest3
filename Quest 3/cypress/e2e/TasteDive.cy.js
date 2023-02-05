describe('TasteDive', () => {
  it('Get API', () => {
    cy.fixture('filmNames').as('filmNames');
    cy.request({
      method : 'Get',
      url: 'https://tastedive.com/api/similar',
      body: {
        '@filmNames'
      }

                })
                      })
                            })

                              
