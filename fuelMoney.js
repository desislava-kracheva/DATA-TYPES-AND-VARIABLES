function solve (distance, passengers, priceFor1Liter) {


    let neededfuel= (distance / 100) *7;
    neededfuel += passengers*0.100;
    let neededMoney = neededfuel*priceFor1Liter






    console.log(`Needed money for that trip is ${neededMoney} lv`);



}

solve(90, 14, 2.88)