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

Cypress.Commands.add("ValidaPlanosLP", (plano) => {

    cy.get('li.price-bar-module--item--3ljpg').as('listaplanos')
    .first().should('have.text', 'R$10').and('be.visible').as('plano10')
    .next().should('have.text', 'R$15').and('be.visible').as('plano15')
    .next().should('have.text', 'R$20').and('be.visible').as('plano20')
    .next().should('have.text', 'R$30').and('be.visible').as('plano30')
    .next().should('have.text', 'R$40').and('be.visible').as('plano40')
    .next().should('have.text', 'R$50').and('be.visible').as('plano50')
    .next().should('have.text', 'R$60').and('be.visible').as('plano60')
    .next().should('have.text', 'R$100').and('be.visible').as('plano100');
    
    if (plano == "R$10") {

        cy.get("@plano10").click();

        cy.get('div.card-module--header--35edM').each(element => {
            element.text()
        }).should('have.text', `Recarregue${plano}E tenha por1 semana`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','1GB');
        
    }
    if (plano == "R$15") {

        cy.get("@plano15").click();

        cy.get('div.card-module--column--3eUX9').each(element => {
            element.show().text();
        }).should('have.text', `Recarregue${plano}E tenha por10 dias`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','1,4GB');
        
    }
    if (plano == "R$20") {

        cy.get("@plano20").click();

        cy.get('div.card-module--column--3eUX9').each(element => {
            element.show().text();
        }).should('have.text', `Recarregue${plano}E tenha por2 semanas`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','2GB');
        
    }
    if (plano == "R$30") {

        cy.get("@plano30").click();

        cy.get('div.card-module--column--3eUX9').each(element => {
            element.show().text();
        }).should('have.text', `Recarregue${plano}E tenha por3 semanas`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','3GB');
        
    }
    if (plano == "R$40") {

        cy.get("@plano40").click();

        cy.get('div.card-module--column--3eUX9').each(element => {
            element.show().text();
        }).should('have.text', `Recarregue${plano}E tenha por4 semanas`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','4GB');
        
    }
    if (plano == "R$50") {

        cy.get("@plano50").click();

        cy.get('div.card-module--column--3eUX9').each(element => {
            element.show().text();
        }).should('have.text', `Recarregue${plano}E tenha por30 dias`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','4,3GB');
        
    }
    if (plano == "R$60") {

        cy.get("@plano60").click();

        cy.get('div.card-module--column--3eUX9').each(element => {
            element.show().text();
        }).should('have.text', `Recarregue${plano}E tenha por30 dias`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','4,3GB');
        
    }
    if (plano == "R$100") {

        cy.get("@plano100").click();

        cy.get('div.card-module--column--3eUX9').each(element => {
            element.show().text();
        }).should('have.text', `Recarregue${plano}E tenha por30 dias`);

        cy.get('div.card-module--internetWrapper--cSeKC').as('qtdGB');
        cy.get("@qtdGB").should('be.visible').and('have.text','4,3GB');
        
    }

    cy.get('button').contains('Contratar agora').click();

});
 