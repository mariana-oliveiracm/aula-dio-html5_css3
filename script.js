var nome = "convidado";
var data = new Date();
var idade = prompt("Qual sua idade?");
if (idade >=18){
    alert ("Olá " + nome + ". Você chegou ao meu site! Sua idade é " + idade + " anos. A data completa de hoje é: " + data);
}else{
    alert ("Olá " + nome + ". Você chegou ao meu site! Sua idade é " + idade + " anos, você é menor de idade.");
};

console.log("Dia: " + data.getDay());
console.log("Hora: " + data.getHours());
console.log("Minutos: " + data.getMinutes());

frase = "Atlético é o melhor time de Minas Gerais"
console.log(frase.replace("Atlético", "América"));
console.log (frase.toUpperCase());
console.log (frase.toLowerCase());

num1 = 5;
num2 = 6;
alert("MULTIPLICAÇÃO: O primeiro número é " + num1 + ". O segundo é " + num2 + ". O resultado da conta é: " + num1 * num2);



var lista = ["Lorem", "ipsum", "dolor", "sit"];
console.log (lista[2]);

lista.push("amet");
console.log(lista);
lista.pop();
console.log(lista);

console.log(lista.length);
console.log(lista.reverse());

console.log(lista.toString()[2]);
console.log(lista.join(" | "));

var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[0].nome);
console.log(frutas[1].cor);

var count = 0;
while (count < 5){
    console.log(count);
    count++;
};

var contador;
for (contador=5; contador > 0; contador--){
    console.log(contador);
};

function soma (n1, n2){
    return n1+n2;
}
console.log(soma(35,30));

function substituir(frase, time, novotime){
    return frase.replace(time, novotime)
}
console.log(substituir("Vai Palmeiras", "Palmeiras", "Corinthians"));

function validaIdade (idade){
    if (idade >= 18) {
        validar = true
    }else {
        validar = false
    }
    return validar;
};

validaIdade(idade);
console.log(validar);

function clicou(){
    alert("Obrigado por clicar!");
}

function clicar(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar. Clique no texto";

}

function redirecionar(){
    window.open("http://www.google.com");
    //window.location.href="http://www.google.com";
}
 
function trocar(elemento){
    //document.getElementById("movemouse").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}


function voltar(elemento){
    //document.getElementById("tiramouse").innerHTML = "Passe o mouse aqui também";
    elemento.innerHTML = "Passe o mouse aqui também";
}

function load(){
    alert("página carregada com sucesso");
}

function funcaoChange(elemento){
    console.log(elemento.value)

}

function mudacor(cor){
    var elemento = document.getElementById("saudacao");
    elemento.style.color = cor;
}

function mudafundo(cor){
    var elemento = document.getElementById("saudacao");
    elemento.style.backgroundColor = cor;
}

function fontsize(tamanho){
    var elemento = document.getElementById("saudacao")
    elemento.style.fontSize = tamanho
}




