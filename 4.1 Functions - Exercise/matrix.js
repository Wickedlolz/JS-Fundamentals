function matrix(number) {
    for (let i = 1; i <= number; i++) {
        let line = getLine(number);
        console.log(line);
    }

    function getLine(n) {
        let output = '';

        for (let i = 1; i <= n; i++) {
            output += n + ' ';
        }

        return output;
    }
}

matrix(3);