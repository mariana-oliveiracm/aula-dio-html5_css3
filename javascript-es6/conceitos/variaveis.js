/*var test = 'example';

(() => {
    console.log (`Valor dentro da função "${test}"`);
    if (true){
        var test = 'example';
        console.log (`Valor dentro do if "${test}"`);
    }
    console.log (`Valor após execução do if "${test}"`);
})();
*/

/*
(() => {
    let test = 'valor função';
    console.log (`Valor dentro da função "${test}"`);
    if (true){
        let test = 'valor if';
        console.log (`Valor dentro do if "${test}"`);
    }
    if (true){
        let test = 'valor outro if';
        console.log (`Valor dentro do if "${test}"`);
    }
    console.log (`Valor após execução do if "${test}"`);
})();
*/

const name = "Mariana";

//Não pode alterar o valor
/*name = "Mariana";*/

//Mas se for um objeto, podemos trocar suas propriedades
const user = {
    name: "Mariana"
};

user.name = "Outro nome";

//Não podemos fazer o objeto apontar para outro lugar
/*user = {
    name: "Guilherme"
};*/

const persons = ["Guilherme", "Pietra", "Jennifer"];

//Podemos alterar itens
persons.push("João");
persons.shift();
persons[1] = "James";

console.log("\nArray após alterações: ", persons);
