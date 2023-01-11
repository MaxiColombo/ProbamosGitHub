function suma(num1,num2){
    return num1 + num2;
 }

function resta(num1,num2){
    return num1 - num2;
 }

function multiplicar(num1,num2){
    return num1 * num2;
 }

 function dividir(num1,num2){
    if(num2!=0){
        return num1/num2;
    }else{
        return "El divisor no puede ser 0";
    }
 }
console.log(dividir(5,2));