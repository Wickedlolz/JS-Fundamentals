function furniture(input) {
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(?:\.\d+)?)!(?<qty>\d+)/;
    let furnitureList = [];
    let totalSum = 0;

    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }

        let match = pattern.exec(line);
        if (match != null) {
            let { name, price, qty } = match.groups;
            price = Number(price);
            qty = Number(qty);
            furnitureList.push(name);
            totalSum += (price * qty);
        }
    }

    console.log('Bought furniture:');
    for (let item of furnitureList) {
        console.log(item);
    }

    console.log('Total money spend: ' + totalSum.toFixed(2));
}

furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"]);