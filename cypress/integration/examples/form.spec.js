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

    describe("Can fill out input and submit form", () => {
        it("Can type into text input", () => {
            textInput()
                .should('have.value', '')
                .type("Teresa")   
        });
    })
});