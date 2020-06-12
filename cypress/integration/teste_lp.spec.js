/// <reference types="cypress" />

import {getDados} from '../support/util/getdados';

const dados = getDados();

context('Suite de teste do Tim Pre', () => {
    
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

            cy.ValidaPlanosLP("R$15"); // Verifica se todos os planos estão disponiveis e valida os dados/informações do plano escolhido
           
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