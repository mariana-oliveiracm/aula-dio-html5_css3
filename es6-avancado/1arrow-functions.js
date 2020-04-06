var sum = (a, b) => a + b; //return implícito

var sum2 = (a, b) => {
    if (a > b) {
        return a + b;
    }
}

var sum3 = a => a + 3; //não é necessário escrever () se for apenas um argumento

var createObj = () => ({ test: 123 });


var obj = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};

console.log(sum(2,1));
console.log(sum2(2,1));
console.log(sum3(2));
console.log(createObj());
obj.showContext();