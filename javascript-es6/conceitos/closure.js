function init(){
    const exemplo = 'Essa variável';
    return function(){
        console.log(`1 - o valor da variável é: ${exemplo}`);
        return function(){
            console.log(`2 - o valor da variável é: ${exemplo}`);
            return function(){
                console.log(`3 - o valor da variável é: ${exemplo}`);
            }
        }
    }
}

init()()()();