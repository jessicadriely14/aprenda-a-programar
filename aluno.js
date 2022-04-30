console.log("Olá, Munod! Sou o primerio programa da Ituring")

let idade = 25
// idade recebe o valor 25

let nome = "Jéssica Adriely"

let boolA = true

let boolB = false 

let lista =[18,20,40, "Aliny", 25, "Leandro"]

let mapa = {
    "faculdade": ["boletim", "carterinha","prova"],
    "casamento": ["casa", "certidão"],
    "anos_de_casado":30
}

//console.log(idade)
//console.log(nome)
//console.log(boolA)
//console.log(boolB)
//console.log(lista)
//console.log(mapa)

//console.log(lista[3])

//console.log(mapa['anos_de_casado'])

//console.log(3*5)

//idade = 17
//if(idade > 18){
    //console.log("Pode entrar")
//}else{
    //console.log("Não pode entrar")
//}

let a = 10
let b = true
let c = []
let d = [1,2,3,4]
let e = "Nome"

//1
if (a == 10) {
    console.log("A"); //A
} else {
    console.log("B");
}
//2
if (a > 10) {
    console.log("A"); 
} else {
    console.log("B"); //B
}
//3
if (a >= 10) {
    console.log("A"); //A
} else {
    console.log("B"); 
}
//4
if (b == true) {
    console.log("A"); //A
} else {
    console.log("B"); 
}
//5
if (b) {
    console.log("A"); 
} else {
    console.log("B");
}
//6
if (c) {
    console.log("A");
} else {
    console.log("B"); 
}
//7
if (d) {
    console.log("A");
} else {
    console.log("B");
}
//8
if (d[0] == 1) {
    console.log("A");//A
} else {
    console.log("B");
}
//9
if (d[1] == 1) {
    console.log("A"); //B
} else {
    console.log("B");
}
//10
if (typeof(e) == 'string') {
    console.log("A");//A
} else {
    console.log("B");
}

//

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if(produtoA["internacional"]){
    console.log("A " + produtoA["nome"] +" custa "+ produtoA["valor"] * 1.2 + " reais")
}else{
    console.log("A " + produtoA["nome"] +" custa "+ produtoA["valor"] * 1.12 + " reais")
}

if(produtoB["internacional"]){
    console.log("O " + produtoB["nome"] +" custa "+ produtoB["valor"] * 1.2 + " reais")
}else{
    console.log("O " + produtoB["nome"] +" custa "+ produtoB["valor"] * 1.12 + " reais")
}

if(produtoC["internacional"]){
    console.log("A " + produtoC["nome"] +" custa "+ produtoC["valor"] * 1.2 + " reais")
}else{
    console.log("A " + produtoC["nome"] + " custa "+ produtoC["valor"] * 1.12 + " reais")
}