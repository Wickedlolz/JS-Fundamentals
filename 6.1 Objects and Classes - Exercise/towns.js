function towns(array) {
    let townsList = [];

    for (let line of array) {
        let townInfo = line.split(' | ');
        let town = townInfo[0];
        let latitude = Number(townInfo[1]).toFixed(2);
        let longitude = Number(townInfo[2]).toFixed(2);
        let obj = {
            town,
            latitude,
            longitude
        };

        townsList.push(obj);
    }

    townsList.forEach(element => console.log(element));
}

towns(
    [
        'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
    ]
);