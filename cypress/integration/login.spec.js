context('login', () => {
    it('login with correct credentials', () => {
        cy.visit('http://localhost:3000/register');
        cy.contains('Email');
        cy.contains('Senha');
        cy.contains('Login');
        cy.contains('Nome');

        cy.get('[data-testid=emailTestId] > .MuiInputBase-root > .MuiInputBase-input').type(
            'testing@mail.com'
        );
        cy.get(
            '[data-testid=passwordRegisterTestId] > .MuiInputBase-root > .MuiInputBase-input'
        ).type('123456');
        cy.get(
            '[data-testid=userNameRegisterTestId] > .MuiInputBase-root > .MuiInputBase-input'
        ).type('cypress test');
        cy.get('.sc-cxpRKc').click();

        cy.get('[data-testid=emailLoginTestId] > .MuiInputBase-root > .MuiInputBase-input').type('testing@mail.com')
        cy.get('[data-testid=passwordTestId] > .MuiInputBase-root > .MuiInputBase-input').type('123456')
        cy.get('.sc-fKVsgm').click()

        cy.contains('Images')
        // cy.get('.sc-furvIG')
    });
});
