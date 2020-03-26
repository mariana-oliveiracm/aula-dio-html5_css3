const user ={
    name: 'Rafael',
    lastName: 'de Souza Sampaio'
}

//recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

//retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

//mergear propriedades de objetos
Object.assign(user, { fullName: 'Rafael de Souza Sampaio' });

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, { age: 34 }));

console.log(user); // 'age' não alterou o 'user'



//previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log ('\nVariável newObj após as alterações:', newObj);



//permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Tiago' };
Object.seal(person);

person.name = 'Tiago Fernandes';
delete person.name;
person.age = 74;

console.log('\nVariável person após as alterações:', person);