function fn(){
    return 'Code here';
}


const arrowFn = () => 'Code here'; //return não explicito e sem bloco por ser apenas uma expressão
const arrowFn2 = () => {
    //mais de uma expressão
    return 'Code here';
}

//funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//receber e retornar funções
const controlFnExec => fnParam => allowed => {
    if (allowed){
        fnParam();
    }
}

const handleFnExecution = controlFnExec(Fn);

handleFnExecution(true); //executará a função fn
handleFnExecution(); //não executará a função fn

//controlFnExec como função "normal"
function controlFnExec(FnParam){
    return function (allowed){
        if (allowed) {
            fnParam();
        }
    }
}