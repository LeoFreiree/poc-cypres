/// <reference types="cypress" />

import {getDados} from '../support/util/getdados';

const dados = getDados();

context('Suite de teste do Tim Pre', () => {
    
    describe('Fluxo Tim Pre TOP', () => {
        
        before(() => {

            cy.visit("/");

        });

        it.only('Validando a LP', () =>{
            
            cy.contains('p', 'Aproveite todas as vantagens de ser TIM Pré Top')
            
          })

        it('Validando a tela de ativação', () =>{

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

        });  
    });

})