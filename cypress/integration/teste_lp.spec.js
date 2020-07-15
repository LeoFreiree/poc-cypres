/// <reference types="cypress" />

import {getDados} from '../support/util/getdados';

const dados = getDados();

context('Suite de teste do Tim Pre LP', () => {
    
    describe('Fluxo Tim Pre TOP R$10', () => {
        
        before(() => {

            cy.visit("/");
            cy.title().should('eq', 'TIM Pré Top - Contratar agora');

        })

        it('Validando a descrição da  LP', () =>{
            
            cy.get('div.price-bar-module--priceBar--1IOC_')
            .contains('p','Aproveite todas as vantagens de ser TIM Pré Top').should('be.visible');
           
        });
        
        it('Validando a escolha do plano', () =>{

            cy.ValidaPlanosLP("R$10"); // Verifica se todos os planos estão disponiveis,valida os dados/informações do plano escolhido e realiza a contratação do mesmo
           
        });

        it('Validando a tela de ativação', () =>{

            cy.frameLoaded('#modal-tim-pre')
            cy.iframe('#modal-tim-pre').find('h1').should('have.text', 'Ative agora seuTIM Pré TOP NACIONAL').and('be.visible');

        });

        it('Preenchendo dados', () => {

            cy.iframe('#modal-tim-pre').find('input[id=dddServico]').should('be.visible').type(dados.ddd);
            cy.iframe('#modal-tim-pre').find('input[id=linhaServico]').should('be.visible').type(dados.telefone);
            cy.iframe('#modal-tim-pre').find('input[id=email]').should('be.visible').type(dados.email);
            cy.iframe('#modal-tim-pre').find('[type=submit]').should('be.visible').and('contain.text', 'Ativar').click();

        });

        it('Validando tela de SMS', () => {

            cy.iframe('#modal-tim-pre').find('p.title')
            .should('have.text', 'Verifique em seucelular o sms como código desegurança').and('be.visible');

            cy.iframe('#modal-tim-pre').find('p.description')
            .should('be.visible').and('have.text',`Enviamos um SMS para o número (${dados.ddd}) ${dados.telefone} com um código de segurança.`);

        });

        it('Preenchendo código SMS', () => {

            cy.iframe('#modal-tim-pre').find('input[name=token]')
            .should('be.visible').and('have.attr', 'placeholder', 'X X X X')
            .type(dados.sms);

            cy.iframe('#modal-tim-pre').find('[type=submit]')
            .should('be.visible').and('have.text', 'Ativar')
            .click();
         
        });  
      
        it('Validando tela de parabéns', () => {

            cy.iframe('#modal-tim-pre').find('div.congratulations-wrapper')
            .and('contain.text', 'Seu TIM PRÉ TOP foi ativado com sucesso!')
            .and('contain.text', 'Parabéns! Em instantes você receberá um SMS confirmando a ativação da sua oferta.');

        });  
    });

    describe('Fluxo Tim Pre TOP R$30', () => {
        
        before(() => {

            cy.visit("/");
            cy.title().should('eq', 'TIM Pré Top - Contratar agora');

        })

        it('Validando a descrição da  LP', () =>{
            
            cy.get('div.price-bar-module--priceBar--1IOC_')
            .contains('p','Aproveite todas as vantagens de ser TIM Pré Top').should('be.visible');
           
        });
        
        it('Validando a escolha do plano', () =>{

            cy.ValidaPlanosLP("R$30"); // Verifica se todos os planos estão disponiveis,valida os dados/informações do plano escolhido e realiza a contratação do mesmo
           
        });

        it('Validando a tela de ativação', () =>{

            cy.frameLoaded('#modal-tim-pre')
            cy.iframe('#modal-tim-pre').find('h1').should('have.text', 'Ative agora seuTIM Pré TOP NACIONAL').and('be.visible');

        });

        it('Preenchendo dados', () => {

            cy.iframe('#modal-tim-pre').find('input[id=dddServico]').should('be.visible').type(dados.ddd);
            cy.iframe('#modal-tim-pre').find('input[id=linhaServico]').should('be.visible').type(dados.telefone);
            cy.iframe('#modal-tim-pre').find('input[id=email]').should('be.visible').type(dados.email);
            cy.iframe('#modal-tim-pre').find('[type=submit]').should('be.visible').and('contain.text', 'Ativar').click();

        });

        it('Validando tela de SMS', () => {

            cy.iframe('#modal-tim-pre').find('p.title')
            .should('have.text', 'Verifique em seucelular o sms como código desegurança').and('be.visible');

            cy.iframe('#modal-tim-pre').find('p.description')
            .should('be.visible').and('have.text',`Enviamos um SMS para o número (${dados.ddd}) ${dados.telefone} com um código de segurança.`);

        });

        it('Preenchendo código SMS', () => {

            cy.iframe('#modal-tim-pre').find('input[name=token]')
            .should('be.visible').and('have.attr', 'placeholder', 'X X X X')
            .type(dados.sms);

            cy.iframe('#modal-tim-pre').find('[type=submit]')
            .should('be.visible').and('have.text', 'Ativar')
            .click();
         
        });  
      
        it('Validando tela de parabéns', () => {

            cy.iframe('#modal-tim-pre').find('div.congratulations-wrapper')
            .and('contain.text', 'Seu TIM PRÉ TOP foi ativado com sucesso!')
            .and('contain.text', 'Parabéns! Em instantes você receberá um SMS confirmando a ativação da sua oferta.');

        });  
    });

    describe('Fluxo Tim Pre TOP R$60', () => {
        
        before(() => {

            cy.visit("/");
            cy.title().should('eq', 'TIM Pré Top - Contratar agora');

        })

        it('Validando a descrição da  LP', () =>{
            
            cy.get('div.price-bar-module--priceBar--1IOC_')
            .contains('p','Aproveite todas as vantagens de ser TIM Pré Top').should('be.visible');
           
        });
        
        it('Validando a escolha do plano', () =>{

            cy.ValidaPlanosLP("R$60"); // Verifica se todos os planos estão disponiveis,valida os dados/informações do plano escolhido e realiza a contratação do mesmo
           
        });

        it('Validando a tela de ativação', () =>{

            cy.frameLoaded('#modal-tim-pre')
            cy.iframe('#modal-tim-pre').find('h1').should('have.text', 'Ative agora seuTIM Pré TOP NACIONAL').and('be.visible');

        });

        it('Preenchendo dados', () => {

            cy.iframe('#modal-tim-pre').find('input[id=dddServico]').should('be.visible').type(dados.ddd);
            cy.iframe('#modal-tim-pre').find('input[id=linhaServico]').should('be.visible').type(dados.telefone);
            cy.iframe('#modal-tim-pre').find('input[id=email]').should('be.visible').type(dados.email);
            cy.iframe('#modal-tim-pre').find('[type=submit]').should('be.visible').and('contain.text', 'Ativar').click();

        });

        it('Validando tela de SMS', () => {

            cy.iframe('#modal-tim-pre').find('p.title')
            .should('have.text', 'Verifique em seucelular o sms como código desegurança').and('be.visible');

            cy.iframe('#modal-tim-pre').find('p.description')
            .should('be.visible').and('have.text',`Enviamos um SMS para o número (${dados.ddd}) ${dados.telefone} com um código de segurança.`);

        });

        it('Preenchendo código SMS', () => {

            cy.iframe('#modal-tim-pre').find('input[name=token]')
            .should('be.visible').and('have.attr', 'placeholder', 'X X X X')
            .type(dados.sms);

            cy.iframe('#modal-tim-pre').find('[type=submit]')
            .should('be.visible').and('have.text', 'Ativar')
            .click();
         
        });  
      
        it('Validando tela de parabéns', () => {

            cy.iframe('#modal-tim-pre').find('div.congratulations-wrapper')
            .and('contain.text', 'Seu TIM PRÉ TOP foi ativado com sucesso!')
            .and('contain.text', 'Parabéns! Em instantes você receberá um SMS confirmando a ativação da sua oferta.');

        });  
    });

})