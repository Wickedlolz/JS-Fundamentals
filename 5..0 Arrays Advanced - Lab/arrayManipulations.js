function arrayManipulations(array) {
    let copyArray = array.slice();
    let numbers = copyArray.shift().split(' ').map(Number);

    for (let i = 0; i < copyArray.length; i++) {
        let token = copyArray[i].split(' ');
        let command = token[0];

        switch (command) {
            case 'Add':
                let numberForAdd = Number(token[1]);
                numbers.push(numberForAdd);
                break;
            case 'Remove':
                let numberForRemove = Number(token[1]);
                
                while (numbers.includes(numberForRemove)) {
                    let index = numbers.indexOf(numberForRemove);
                    numbers.splice(index, 1);
                }
                break;
            case 'RemoveAt':
                let indexForRemove = Number(token[1]);
                numbers.splice(indexForRemove, 1);
                break;
            case 'Insert':
                let numberForInsert = Number(token[1]);
                let indexForInsert = Number(token[2]);
                numbers.splice(indexForInsert, 0, numberForInsert);
                break;
        }
    }

    return numbers.join(' ');
}

console.log(arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
));