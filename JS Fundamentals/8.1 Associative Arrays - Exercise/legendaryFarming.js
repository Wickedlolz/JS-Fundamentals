function legendaryFarming(input) {
    let materials = {
        items: {
            'shards': 0,
            'fragments': 0,
            'motes': 0
        },
        junk: {}
    };

    let tokens = input.split(' ');
    for (let i = 0; i < tokens.length; i += 2) {
        let quantity = Number(tokens[i]);
        let materialName = tokens[i + 1].toLocaleLowerCase();

        if ((materialName == 'shards') || (materialName === 'fragments') || (materialName === 'motes')) {
            materials['items'][materialName] += quantity;
        } else {
            if (!materials['junk'].hasOwnProperty(materialName)) {
                materials['junk'][materialName] = 0;
            }
            materials['junk'][materialName] += quantity;
        }

        if (materials['items'].hasOwnProperty(materialName)) {
            if (materials['items'][materialName] >= 250) {
                materials['items'][materialName] -= 250;
                if (materialName === 'shards') {
                    console.log(`Shadowmourne obtained!`);
                    break;
                } else if (materialName === 'fragments') {
                    console.log(`Valanyr obtained!`);
                    break;
                } else if (materialName === 'motes') {
                    console.log(`Dragonwrath obtained!`);
                    break;
                }
            }
        }
    }

    let sorted = Object.entries(materials);

    for (let [key, items] of sorted) {
        if (key === 'items') {
            let sortedItems = Object.entries(items).sort((a, b) => {
                return (b[1] - a[1]) || a[0].localeCompare(b[0]);
            });

            for (let [materialName, quantity] of sortedItems) {
                console.log(`${materialName}: ${quantity}`);
            }
        } else {
            let sortedJunks = Object.entries(items).sort((a, b) => {
                return a[0].localeCompare(b[0]);
            });

            for (let [materialName, quantity] of sortedJunks) {
                console.log(`${materialName}: ${quantity}`);
            }
        }
    }
}

// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');