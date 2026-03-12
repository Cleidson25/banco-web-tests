describe('transferencia', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valores validos', () => {
        //Act
        cy.realizarTransferencia('Priscila', 'julio', '11')
        
        //Assert
        cy.verificarMensagemNoToast('Transferencia realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais de 5 mil sem o token', () => {
        //Act
        cy.realizarTransferencia('Priscila', 'julio', '6000')
        
        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$ 5.000,00')
    })
})
