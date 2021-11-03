function solve(arg1, arg2, arg3){

let result = arg1.replace('_',arg2);

let hasMatch = result === arg3;

if(hasMatch){

    console.log('Matched');
} else {

    console.log('Not Matched');
}



}

solve('Str_ng', 'I', 'Strong')