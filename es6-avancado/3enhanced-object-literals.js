var prop1 = 'Digital Innovation One';
var obj = {
    /*prop1:*/ prop1 //não é necessária a declaração no ES6
};

console.log(obj);



function method1(){
    console.log('method called');
}
var obj2 = {
    method1
};

obj2.method1();



var obj3 = {
    /*sum: function*/ sum(a,b){ //não é necessária a declaração no ES6
        return a + b;
    }
};

console.log(obj3.sum(1,5));



var propName = 'test';
var obj4 = {
    [propName + 'ando']: 'prop value'
}

console.log(obj4);