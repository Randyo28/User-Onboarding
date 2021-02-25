beforeEach(() => {
    cy.visit('http://localhost:3000')
})

describe('My first test', function() {

    // beforeEach(() => {
    //     cy.visit('http://localhost:3000')
    // })
    
    it('Does not do much', function() {
        
        // eslint-disable-next-line jest/valid-expect
        expect(true).to.equal(true);
    })

    
})


describe('Check for Header text', () => {

    it('Checks for Text', () => {

        cy.contains('User-OnBoarding')
    })
})


describe('Get the Inputs', () => {
    
    const nameInput = () => cy.get('input[name=first_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=terms]')

    it('Checks for name input', () => {
        nameInput()
        .should('exist')
        .type('Randy')
        .should('have.value', 'Randy')
    })

    it('checks for email input', () => {
        emailInput()
        .should('exist')
        .type('Randy@email.com')
        .should('have.value', 'Randy@email.com')
    })

    it('checks for password input', () => {
        passwordInput()
        .should('exist')
        .type('Ortiz1995')
        .should('have.value', 'Ortiz1995')
    })

    it('check if user can check on checkbox', () => {
        termsInput()
        .should('exist')
        .click()
    })
})

describe('User can submit form', () => {
   
    const submitButton = () +
    
    it('Be able to press submit', () => {
        .should('exist')
        .click()
    })
    
})