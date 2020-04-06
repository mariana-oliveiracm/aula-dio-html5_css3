function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}
console.log(sum(5, 5, 5, 2, 3));



const str = "Digital Innovation One";
const arr = [1, 2, 3, 4];
function logArgs() {
    console.log(arguments);
}
logArgs(...str);
logArgs(...arr);


function logArgs2(a, b, c) {
    console.log(a, b, c);
}
logArgs2(...str);
logArgs2(...arr);


const arr2 = [...arr, 5, 6, 7]
console.log(arr2);

const arrClone = [...arr]
console.log(arrClone);



const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);


const obj3 = {
    test: 456,
    ...obj    //permanece o valor do último declarado
};
console.log(obj3);


const obj4 = {
    test: 789
};
const objMerged = {
    ...obj,
    ...obj4
};
console.log(objMerged);



const original = {
    test: 123,

};

const clone = obj;
clone.test = 456;
console.log(clone);
