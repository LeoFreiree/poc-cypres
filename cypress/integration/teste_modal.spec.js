/// <reference types="cypress" />

import {getDados} from '../support/util/getdados';


const dados = getDados();

context('Suite de teste do Tim Pre Modal', () => {
    
    describe('Fluxo Tim Pre TOP', () => {
        
        before(() => {

          const sku =  'SVAP027RJ';           
          cy.visit(dados.urlModal + sku);
          console.log("acessando a pagina: " + dados.urlModal + sku)

        });

        it('Validando a tela de ativação', () =>{
          cy.ValidaTelaAtivação();
        })

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