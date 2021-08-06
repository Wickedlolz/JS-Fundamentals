function thePianist(input) {
    let actions = {
        'Add': add,
        'Remove': remove,
        'ChangeKey': changeKey
    };

    let piecesInCollection = Number(input.shift());
    let collection = {};

    for (let i = 0; i < piecesInCollection; i++) {
        let [piece, composer, key] = input.shift().split('|');
        collection[piece] = {
            composer,
            key
        }
    }

    for (let line of input) {
        if (line == 'Stop') {
            break;
        }

        let [command, piece, composer, key] = line.split('|');
        let action = actions[command];
        action(piece, composer, key);
    }

    let sorted = Object.entries(collection).sort(comparePieces);

    for (let [piece, parts] of sorted) {
        console.log(`${piece} -> Composer: ${parts.composer}, Key: ${parts.key}`);
    }

    function comparePieces(a, b) {
        let pieceA = a[0];
        let pieceB = b[0];

        let composerA = a[1].composer;
        let composerB = b[1].composer;


        return (pieceA.localeCompare(pieceB)) || (composerA.localeCompare(composerB));
    }

    function add(piece, composer, key) {
        if (collection[piece] != undefined) {
            console.log(`${piece} is already in the collection!`);
        } else {
            collection[piece] = {
                composer,
                key
            };

            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }
    }

    function remove(piece) {
        if (collection[piece] != undefined) {
            delete collection[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey(piece, newKey) {
        if (collection[piece] != undefined) {
            collection[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);

// thePianist([
//     '4',
//     'Eine kleine Nachtmusik|Mozart|G Major',
//     'La Campanella|Liszt|G# Minor',
//     'The Marriage of Figaro|Mozart|G Major',
//     'Hungarian Dance No.5|Brahms|G Minor',
//     'Add|Spring|Vivaldi|E Major',
//     'Remove|The Marriage of Figaro',
//     'Remove|Turkish March',
//     'ChangeKey|Spring|C Major',
//     'Add|Nocturne|Chopin|C# Minor',
//     'Stop'
// ]);