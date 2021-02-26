beforeEach(() => {
    cy.visit('http://localhost:3000')
})

describe('My first test', function() {
    
    it('Does not do much', function() {
        expect(true).to.equal(true);
    })
})


describe('Check for Header text', () => {

    it('Checks for Text', () => {

        cy.contains('User-OnBoarding')
    })
})


describe('Get the Inputs and submit Form', () => {
    
    const nameInput = () => cy.get('input[name=first_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=terms]')
    const submitButton = () => cy.get(':button')

    it('Types inputs and click on submit button', () => {
        //* Name input with name typed
        nameInput()
        .should('exist')
        .should('have.value', '')
        .type('Randy')
        .should('have.value', 'Randy')

        //* Email input with email typed
        emailInput()
        .should('exist')
        .type('Randy@email.com')

        //* Password input with password typed
        passwordInput()
        .should('exist')
        .type('Ortiz1995')

        //* Terms checkbox with a click
        termsInput()
        .should('exist')
        .click()

        //* Submit button should submit on click
        submitButton()
        .should('exist')
        .click()
    })


describe('Check for form validation when form field is incorrect', () => {
    
    const nameError = () => cy.get('.errors > :nth-child(1)')
    const emailError = () => cy.get('.errors > :nth-child(2)')
    const passwordError = () => cy.get('.errors > :nth-child(3)')

    it('should look for nameInput validation error', () => {
        
        nameInput()
        .should('exist')
        .type('hi')

        nameError()
        .should('exist')
    })
    
    it('should look for email validation error', () => {
        emailInput()
        .should('exist')
        .type('hello')

        emailError()
        .should('exist')
    })
    
    it('should look for  password validation error', () => {
        passwordInput()
        .should('exist')
        .type('hello')

        passwordError()
        .should('exist')
    })
    
    })
})
