const number = 12.4032;

//transforma número para string
const numberAsString = number.toString();
console.log('Número transformado em string: ', numberAsString, typeof numberAsString);

//retorna número com um número de casas decimais
const fixedTwoDecimals = number.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//transforma string em float
console.log('\nString parseada para float', typeof parseFloat('13.22'), parseFloat('13.22'));

//transforma string em int
console.log('\nString parseada para int', typeof parseInt('13.20'), parseInt('13.20'));