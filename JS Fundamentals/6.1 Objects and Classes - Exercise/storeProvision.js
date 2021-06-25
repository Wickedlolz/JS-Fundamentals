function storeProvision(arrayOne = [], arrayTwo = []) {
    let localStore = {};

    for (let i = 0; i < arrayOne.length; i++) {
        if (i % 2 === 0) {
            localStore[arrayOne[i]] = 0;
        } else {
            localStore[arrayOne[i - 1]] = Number(arrayOne[i]);
        }
    }

    for (let i = 0; i < arrayTwo.length; i++) {
        if (i % 2 === 0) {
            if (!localStore.hasOwnProperty(arrayTwo[i])) {
                localStore[arrayTwo[i]] = 0
            }
        } else {
            localStore[arrayTwo[i - 1]] += Number(arrayTwo[i]);
        }
    }

    for (let product of Object.keys(localStore)) {
        console.log(`${product} -> ${localStore[product]}`);
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);