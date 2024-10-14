function gravidade() {
console.log('A gravidade do planeta é:');
console.log(9.8);
 } // Se trata de uma caixa isolada, e funciona como se fosse um motor e serve para poder
 //utilixar o código mais de uma vez em diferentes circuntâncias

gravidade()


function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 13;
let verificacao =maiorDeIdade(idade)
console.log(verificacao)

if (verificacao) {
    console.log('É maior de idade')
} else {
    console.log('É menor de idade')
}

// Exercicio:
function calcpct(y, x) {
    let resultado = (x / y) * 100
    console.log('resultado '  + resultado)
}


let x =40;
let y =10;
let pct =calcpct(x, y)
console.log('$(pct)% de $(x) $(y)');

function calcularImovel(metragem, quartos) {
 let m2 = 3000;
 let preco = 0;
    switch(quartos) {
        case 1:
            preco = metragem * m2;

            default:
            break;
    
        case 2:
            preco = metragem * (m2 * 1.2)
            break;

         case 3: 
             preco = metragem * (m2 * 1.5)
             break
    }
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

function validar(usuario, senha){
    if (usuario === 'pedro' && senha === '123') {
        return true;
    } else {
        return false;
    }

}

let usuario = 'Boniek';
let senha = '1234'
let validacao = validar(usuario, senha);
if (validacao) {
    console.log('Acesso concedido');
} else{
    console.log('Acesso negado')
}


let carros = ['BMW', 'Ferrari', 'Mercedez'];
let a = 1;
console.log('1. ' + carros[a]);




let numero = 1;
while (numero <= 100) {
    console.log (`número  ${numero}`)
    numero++;
}

let fruits =['Maca', 'Uva', 'Banana'];
for (let x in fruits); {
    console.log(fruits[x])

}