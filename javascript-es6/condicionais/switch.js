/*
switch (expressão){
    case valor1:
        [break;]
    case valorN:
        [break;]

    default:
        [break;]
}
*/

const fruit = 'pera';

switch(fruit){
    case 'banana':
        console.log('R$3,00/kg')
        break;
    case 'mamão':
    case 'pera':
        console.log('R$2,00/kg')
        break;
    case 'maçã':
        console.log('R$3,50/kg')
       // break; //ao tirar o break, ele execuça este case e também o default
    default:
        console.log('Produto não existe no estoque');
        break;
}