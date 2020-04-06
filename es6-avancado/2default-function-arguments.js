 //atribui um valor padrão para o valor não for passado, pode ser usado no primeiro ou no segundo parâmetro
function multiply (a, b = 1) {
    return a * b;
}

console.log(multiply(4));
console.log(multiply(3, undefined));

//referencia o primeiro parâmetro
function multiply2 (a, b = a) { //não é possível referenciar antes de declarar a variável, por exemplo  (a = b, b)
    return a * b;
}

console.log(multiply2(4));
console.log(multiply2(3, undefined));



//lazy evaluation
function randomNumber() {
    return Math.random()*10;
}

function multiply3(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply3(3));
