/// <reference types="cypress" />

const urlModal = Cypress.env('urlModal');
const ddd = Cypress.env('ddd');
const telefone = Cypress.env('telefone');
const email = Cypress.env('email');
const sms = Cypress.env('sms');

context('Suite de teste do Tim Pre', () => {
    
    describe.only('Fluxo Tim Pre TOP', () => {
        
        before(() => {

          const sku =  'SVAP027RJ';           
          cy.visit(urlModal + sku);
          console.log("acessando a pagina: " + urlModal + sku)

        });

        it('Validando a tela de ativação', () =>{
          cy.ValidaTelaAtivação();
        })

        it('Preenchendo dados', () => {

          cy.Preenchedados(ddd,telefone,email);

        });

        it('Validando tela de SMS', () => {

          cy.ValidaTelaSMS(ddd,telefone);

        });

        it('Preenchendo código SMS', () => {

          cy.PreencheSMS(sms);
         
        });  
      
        it('Validando tela de parabéns', () => {

          cy.ValidaParabens();

        });  
    })

})