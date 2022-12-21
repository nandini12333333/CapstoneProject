describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/')
    cy.contains("MAGIC STORE")
    cy.contains('Search')
    cy.visit('http://localhost:4200/about')
    cy.contains('Magic Store App Developers')

  })
})