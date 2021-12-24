function solve(numOfPages, readPagesInOneHour, days){

let totalTime = numOfPages / readPagesInOneHour;
let requiredHoursPerDay = totalTime / days;

console.log(requiredHoursPerDay);


}
solve(212,
    20 ,
    2 
    )
    solve(432,
        15 ,
        4 
        )