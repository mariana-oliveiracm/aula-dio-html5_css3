let arr = [3, 5, 7];
arr.foo = 'hello';

for (let i in arr){ //indices
    console.log(i);
}

for (let i of arr){ //os itens
    console.log(i);
}