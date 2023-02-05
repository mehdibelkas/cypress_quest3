describe('TasteDive', () => {
  it('Get API', () => {
    cy.request('https://tastedive.com/api/similar?q=movie:godzilla')
      .then(response =>{
        expect(response.body.Similar.Info[0].Name)
        .eq("Godzilla")
       })
  })
})