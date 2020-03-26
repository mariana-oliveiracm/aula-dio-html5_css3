//retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

//retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Texto', 'txeT');
console.log('\nSubstituição de valor:', replacedText);

//retorna a fatia de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar);

const sencondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última:', sencondToEnd);

//retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2); //inicio e o número de caracteres
console.log('\nAs duas primeiras letras são:', twoCharsBeforeFirstPos);