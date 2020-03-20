let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza o desenho dentro do canvas
let box = 32; //cada quadrado vai ter 32px
let snake = [];
snake[0]={
    x: 8 * box,
    y: 8 * box
}
let direcao = "right";

//Math.random gera um número aleatório de 0 até 1
//Math.floor tira o ponto flutuante do número
//números setados para a comida não apareça fora do canvas
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}




function criarBG(){
    context.fillStyle = "#ffe6b3"; //cor de fundo
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo onde vai acontecer o jogo
}

function criarCobrinha(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "purple";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }    
}

function desenharComida(){
    context.fillStyle = "black";
    context.fillRect(food.x, food.y, box, box);

}

//define as direções da cobrinha de acordo com o teclado e ela só muda se a direção não for a contrária, ou seja, a cobrinha não volta
document.addEventListener('keydown', update);
function update (event){
    if(event.keyCode == 37 && direcao != "right") direcao = "left";
    if(event.keyCode == 38 && direcao != "down") direcao = "up";
    if(event.keyCode == 39 && direcao != "left") direcao = "right";
    if(event.keyCode == 40 && direcao != "up") direcao = "down";

}


function iniciarJogo(){   

    //faz a cobrinha "atravessar" a parede de um lado outro outro
    if(snake[0].x > 15 * box && direcao == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direcao == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direcao == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direcao == "up") snake[0].y = 16 * box;

    for (i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert ('Game over :(')
        }
    }

    criarBG();
    criarCobrinha();
    desenharComida();

    //posicao inicial da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //a cobrinha andando
    if(direcao == "right") snakeX += box;
    if(direcao == "left") snakeX -= box;
    if(direcao == "up") snakeY -= box;
    if(direcao == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){ //se a posição da cobra não for a da comida
        snake.pop(); //tira o último item do array
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;

    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //acrescenta no primeiro item do array

}

let jogo = setInterval(iniciarJogo, 100);