function arrayManipulator(numbers, commands) {
    for (const command of commands) {
        let token = command.split(' ');

        if (token[0] === 'add') {
            let idx = Number(token[1]);
            let element = Number(token[2]);
            numbers.splice(idx, 0, element);
        } else if (token[0] === 'addMany') {
            let idx = Number(token[1]);
            token.splice(0, 2);
            token = token.map(Number);
            numbers.splice(idx, 0, ...token);
        } else if (token[0] === 'contains') {
            console.log(numbers.indexOf(Number(token[1])));
        } else if (token[0] === 'remove') {
            numbers.splice(Number(token[1]), 1);
        } else if (token[0] === 'shift') {
            let positions = Number(token[1]);
            for (let i = 0; i < positions; i++) {
                numbers.push(numbers.shift());
            }
        } else if (token[0] === 'sumPairs') {
            if (numbers.length % 2 !== 0) {
                numbers.push(0);
            }

            let sumArray = [];
            for (let i = 0; i < numbers.length - 1; i += 2) {
                sumArray.push(numbers[i] + numbers[i + 1]);
            }

            numbers = sumArray;
        } else if (token[0] === 'print') {
            console.log(`[ ${numbers.join(', ')} ]`);
            return;
        }
    }
}

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']

);