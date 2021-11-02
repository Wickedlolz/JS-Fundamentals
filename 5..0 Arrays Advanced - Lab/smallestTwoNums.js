function smallestTwoNumbers(list) {
    let sortedInAscending = list.sort((a, b) => a - b);
    let firstTwoSmallestNums = sortedInAscending.slice(0, 2);

    console.log(firstTwoSmallestNums.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);