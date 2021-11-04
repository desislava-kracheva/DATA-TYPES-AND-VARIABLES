function solve(losFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let equipmentPrice = 0;
    let shieldCount = 0;


    for (let i = 1; i <= losFights; i++) {
        if (i % 2 == 0) {

            equipmentPrice += helmetPrice;
        }
        if (i % 3 == 0) {

            equipmentPrice += swordPrice;
        }

        if (i % 2 == 0 && i % 3 == 0) {
            equipmentPrice += shieldPrice;
            shieldCount++;
        }
        if (shieldCount % 2 == 0 && shieldCount > 0) {

            equipmentPrice += armorPrice;
            shieldCount = 0;
        }


       
    }

    console.log(`Gladiator expenses: ${equipmentPrice.toFixed(2)} aureus`);
}


solve(7,
    2,
    3,
    4,
    5
)