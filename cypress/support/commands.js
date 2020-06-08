Cypress.Commands.add("ValidaTelaAtivação", () => {

    cy.contains('h1','Ative agora seuTIM Pré TOP NACIONAL')

});

Cypress.Commands.add("Preenchedados", (ddd,telefone,email) => {
    
    cy.get('form').contains('DDD').should('be.visible').type(ddd);
    cy.get('form').contains('TELEFONE').should('be.visible').type(telefone);
    cy.get('input[id=email]').should('be.visible').type(email);
    cy.get('[type=submit]')
    .should('be.visible')
    .and('contain.text', 'Ativar')
    .click();
});

Cypress.Commands.add("ValidaTelaSMS", (ddd,telefone) => {

    cy.get('p.title')
    .should('be.visible')
    .and('have.text', 'Verifique em seucelular o sms como código desegurança');

    cy.get('p.description')
    .should('be.visible')
    .and('have.text',`Enviamos um SMS para o número (${ddd}) ${telefone} com um código de segurança.`);
});

Cypress.Commands.add("PreencheSMS", (sms) => {

    cy.get('input[name=token]')
    .should('be.visible')
    .and('have.attr', 'placeholder', 'X X X X')
    .type(sms);
    
    cy.get('[type=submit]')
    .should('be.visible')
    .and('have.text', 'Ativar')
    .click();
});

Cypress.Commands.add("ValidaParabens", () => {

    cy.get('div.congratulations-wrapper')  
    .should('contain.text', 'Seu TIM PRÉ TOP foi ativado com sucesso!')
    .and('contain.text', 'Parabéns! Em instantes você receberá um SMS confirmando a ativação da sua oferta.');
});
 