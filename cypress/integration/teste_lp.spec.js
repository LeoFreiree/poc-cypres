/// <reference types="cypress" />

import {getDados} from '../support/util/getdados';

const dados = getDados();

context('Suite de teste do Tim Pre', () => {
    
    describe('Fluxo Tim Pre TOP', () => {
        
        before(() => {

            cy.visit("/");

        });

        it('Validando a LP', () =>{
            
            cy.get('div.price-bar-module--priceBar--1IOC_')
            .contains('p','Aproveite todas as vantagens de ser TIM Pré Top').should('be.visible');

            cy.get('li.price-bar-module--item--3ljpg')
            .first().should('have.text', 'R$10')
            .next().should('have.text', 'R$15')
            .next().should('have.text', 'R$20')
            .next().should('have.text', 'R$30')
            .next().should('have.text', 'R$40')
            .next().should('have.text', 'R$50')
            .next().should('have.text', 'R$60')
            .next().should('have.text', 'R$100');
            
            
            
          });

        /* it('Validando a tela de ativação', () =>{

            cy.ValidaTelaAtivação();
        });

        it('Preenchendo dados', () => {

            cy.Preenchedados(dados.ddd,dados.telefone,dados.email);

        });

        it('Validando tela de SMS', () => {

            cy.ValidaTelaSMS(dados.ddd,dados.telefone);

        });

        it('Preenchendo código SMS', () => {

            cy.PreencheSMS(dados.sms);
         
        });  
      
        it('Validando tela de parabéns', () => {

            cy.ValidaParabens();

        });   */
    });

})