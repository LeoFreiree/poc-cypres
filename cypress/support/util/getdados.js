export function getDados() {

    return {  
      urlModal: Cypress.env('urlModal'),
      ddd:  Cypress.env('ddd'),
      telefone: Cypress.env('telefone'),
      email: Cypress.env('email'),
      sms: Cypress.env('sms')
    }
  }