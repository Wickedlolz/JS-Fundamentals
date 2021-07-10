function solve(input) {
    let budged = Number(input.shift());
    let students = Number(input.shift());
    let priceOfFlour = Number(input.shift());
    let priceOfEgg = Number(input.shift());
    let priceForSigleApron = Number(input.shift());

    let percentage = Math.ceil(students + (students * 0.2));
    let packagesFlour = students;
    let freePackages = 0;

    for (let i = 1; i <= packagesFlour; i++) {
        if (i % 5 === 0) {
            freePackages++;
        }
    }
    let result = priceForSigleApron * percentage + priceOfEgg * 10 * (students) + priceOfFlour * (students - freePackages);


    if (result <= budged) {
        console.log(`Items purchased for ${result.toFixed(2)}$.`);
    } else {
        let diff = result - budged;
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}

// solve([50, 2, 1.0, 0.10, 10.0]);
solve([100, 25, 4.0, 1.0, 6.0]);