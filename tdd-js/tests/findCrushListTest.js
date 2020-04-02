const should = require('should')
const findCrushs = require ('../findCrushs')

describe ('find crushs', () => {
    it ('soma crushs', () => {
        findCrushs.somaCrush(2,3).should.be.equal(5)
    })
    it ('deve somar dois numeros e retornar 30', () => {
        findCrushs.somaCrush(10,20).should.be.equal(30)
    })
    it ('passar um nome e deve retornar mensagem de pessoa não encontrada', () => {
        findCrushs.encontraCrush('Shannon Irvine').should.be.equal('Crush não encontrado')
    })
    it ('retorna a mensagem de campo nome vazio', () => {
        findCrushs.encontraCrush().should.be.equal('Campo nome está vazio')
    })
    it ('retorna a mensagem de tipo inválido', () => {
        findCrushs.encontraCrush(123).should.be.equal('Tipo inválido')
    })
    it ('deve retornar o nome da lista', () => {
        findCrushs.encontraCrush('Miles Lee').should.be.equal('Miles Lee')
    })
})

//comando: npm run test