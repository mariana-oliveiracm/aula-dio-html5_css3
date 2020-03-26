(() => {
    this.name = 'arrow function';
    const getNameArrowFn = () => this.name; //arrow function vai apontar sempre para o this do escopo

    function getName(){
        return this.name; //a função "normal" vai apontar para o this da execução
    }

    const user = {
        name: 'Nome no contexto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());

})();

