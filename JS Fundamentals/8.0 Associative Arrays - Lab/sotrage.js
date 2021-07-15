function storage(array) {
    let products = new Map();

    for (let product of array) {
        let tokens = product.split(' ');
        let item = tokens[0];
        let quantity = Number(tokens[1]);

        if (products.has(item)) {
            let currentQuantity = products.get(item);
            let newQuantity = currentQuantity + quantity;
            products.set(item, newQuantity);
        } else {
            products.set(item, quantity);
        }
    }

    for (let kvp of products) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);