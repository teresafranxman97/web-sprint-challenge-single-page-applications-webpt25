// Tests will be written here
describe("Lambda Eats Application", () => {
    const textInput = () => window.cy.get('input[name=name]');
    const submitBtn = () => window.cy.get('button[id=submitBtn]');

    it('Basic test', () => {
        expect(true).to.equal(true)
    })

    it("Check elements are visible on page.", () => {
        window.cy.visit('http://localhost:3000')
        window.cy.get(textInput).should('exist')
        window.cy.get(submitBtn).should('exist')
    })

    // describe("Text Input", () => {
    //   it("New text added to text box", () => {
    //       textInput()
    //         .should('have.value', '')
    //         .type('Teresa')
    //         .should('have.value', 'Teresa')
    //   });
    // })
 
    // describe("Form Submission", () => {
    //     it("Can submit the form", () => {
    //         window.cy.get('form').submit()
    //         .next().should('contain', 'Your form has been submitted!')
    //     })
    // })
   
    // describe('Checkboxes', () => {
    //     it(".check() - check a checkbox", () => {
    //         window.cy.get('.form-group-checkboxes [type="checkbox"]').not('[disabled]')
    //         .check().should('be.checked')
    //     })
    // })
    
});