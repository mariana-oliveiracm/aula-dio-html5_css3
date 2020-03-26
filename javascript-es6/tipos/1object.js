let user ={
    name: "Rafael"
};
console.log(user);

//alterando a propriedade de um objeto
user.name = "Outro nome 1";
console.log(user);
user['name'] = "Outro nome 2";
console.log(user);

const prop = 'name';
user[prop] = "Outro nome 3";
console.log(user);

/*function getProp(prop){
    return user[prop]
};*/

//criando uma proprieradade
user.lastName = "de Souza Sampaio";
console.log(user);

//deletando uma propriedade
delete user.name;
console.log(user);

