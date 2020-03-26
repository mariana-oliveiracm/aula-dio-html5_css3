function getName(){
    return 'Mariana Oliveira';
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);