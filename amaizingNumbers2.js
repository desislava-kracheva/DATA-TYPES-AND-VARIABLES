function solveForSecondTime(num){

let sum = num.toString().split('').map(Number).reduce((a,b) =>a+b);

sum = sum.toString();
let isAmaizing = false;

for(let line of sum){

    if(line == 9){
isAmaizing = true;
break;
    }
}

if(isAmaizing){
    console.log(`${num} Amazing? True`);
} else {
    console.log(`${num} Amazing? False`);
}

}

solveForSecondTime(999)
solveForSecondTime(1233)