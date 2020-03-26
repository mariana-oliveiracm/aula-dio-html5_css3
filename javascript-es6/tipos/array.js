const users = ['Guilherme', 'Joana', 'Rafaela'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol ('W')
}

const persons = [
    {
        name: 'Guilherme',
        age: 26,
        gender: gender.MAN
    },
    {
        name: 'Joana',
        age: 34,
        gender: gender.WOMAN
    },
    {
        name: 'Rafaela',
        age: 17,
        gender: gender.WOMAN
    },
];

//retornar a quantidade de itens de um array
console.log('Items:', persons.length);

//verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

//iterar os itens do array
persons.forEach((person) =>{
    console.log(`Nome: ${person.name}`);
});

persons.forEach((person, index) =>{
    console.log(`Nome: ${person.name} index: ${index}`);
});


//filtrar array
const women = persons.filter(person => person.gender === gender.WOMAN);
console.log ('\nLista apenas com mulheres:', women);

//retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log ('\nPessoas com adição do course:', personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age; //para cada person está somando a idade nela mesma
    return age; //e retorna a age
}, 0); //o 0 é o valor inicial

console.log('\nSoma de idades das pessoas', totalAge);

const mediaAge = persons.reduce((age, person) => {
    age += person.age; 
    return age; 
}, 0) / persons.length; 

console.log('\nMédia de idades das pessoas', mediaAge);

//juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 ===0)
                        .reduce ((age, person) =>{
                            age += person.age;
                            return age;
                        }, 0);
console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);