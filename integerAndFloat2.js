function solveForSecondTime(num1, num2, num3){
let sum = Number(num1) + Number(num2) + Number(num3) ;

let isInteger = false;
let isFloat = false;

if(sum % 1 ==  0) {
    isInteger = true;
} 
 if( sum % 1 !== 0) {
isFloat = true;
} 


if(isInteger){
    console.log(`${sum} - Integer`);
} 
if(isFloat) {

    console.log(`${sum} - Float`);
}

}

solveForSecondTime(100, 200, 303)