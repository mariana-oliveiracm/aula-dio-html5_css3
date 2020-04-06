//não precisa definir a variável com o índice, por exemplo var apple = arr[0]
var [apple, banana, orange, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(apple, tomato);


var obj = {
    name: 'Renato',
    props: {
        age: 29,
        favoriteColors: ['purple', 'orange']
    }
};
var { name } = obj;
var {
    props: { 
        age,
        favoriteColors: [color1, color2]
    }
} = obj;
console.log(name);
console.log(age);
console.log(color2);
