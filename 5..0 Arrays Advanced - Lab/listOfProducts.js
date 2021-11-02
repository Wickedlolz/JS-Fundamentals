function listOfProducts(array) {
    let sortedInAscending = array.sort();

    for (let i = 0; i < sortedInAscending.length; i++) {
        console.log(`${i + 1}.${sortedInAscending[i]}`);
    }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);