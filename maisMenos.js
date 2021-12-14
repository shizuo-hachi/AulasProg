function maisMenos(array){
    var pos = 0.0;
    var zero = 0.0;
    var neg = 0.0;
    var resultado = [];
    console.log(array.length);

    for(var i = 0; i < array.length; i++){
        if (array[i] > 0){
            pos++;
        }else if(array[i] == 0){
            zero++;
        }else if(array[i] < 0){
            neg++;
        }
    }
    console.log("after for", pos, zero, neg);

    resultado.push(pos/array.length);
    resultado.push(zero/array.length);
    resultado.push(neg/array.length);

    return resultado;
}

console.log(maisMenos([1]));
console.log(maisMenos([0,0,0,0]));
console.log(maisMenos([0,0,0,0,-2,-3,-4,-5]));
console.log();
console.log();
