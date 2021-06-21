function sortingByTwoCriteries(list) {
    let sortedArray = list.sort(custumSorting);

    console.log(sortedArray.join('\n'));

    function custumSorting(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }
}

function solve(input) {
    input.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);

        return firstCriteria || secondCriteria;
    });

    console.log(input.join('\n'));
}

console.log(sortingByTwoCriteries(["gamma", "alpha", "beta"]));