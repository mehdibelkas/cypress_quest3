describe('TasteDive', () => {
  it('Get API', () => {
    cy.request('https://tastedive.com/api/similar?q=movie:godzilla')
      .then(response =>{
        alert(JSON.stringify(response.body))})
  })
})