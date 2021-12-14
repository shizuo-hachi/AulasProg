function acontece(estudantes, minimo){
    var pontuais = 0;
    for (var i = 0; i < estudantes.length; i++){
        if (estudantes[i] <= 0){
            pontuais = pontuais + 1;
        }
    }
    if(pontuais >= minimo){
        return true;
    }
    return false;
}

function aberturas(array, minimo){
    var diaSimdiaNao = [];
    for(var i = 0; i < array.length; i++){
        diaSimdiaNao.push(acontece(array[i], minimo));
    }
    return diaSimdiaNao;
}


var alunosDaTerca = [10, -5, 3, 0];
var alunosDaSegunda = [10, -5, 3, 0];
var alunosDaQuarta = [10, -5, 3, 0];

console.log(acontece(alunosDaSegunda, 2));

console.log(acontece(alunosDaTerca, 3));
console.log(acontece(alunosDaQuarta, 3));
array = [alunosDaSegunda, alunosDaTerca, alunosDaQuarta]

console.log(aberturas(array, 3));
//console.log(produto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
