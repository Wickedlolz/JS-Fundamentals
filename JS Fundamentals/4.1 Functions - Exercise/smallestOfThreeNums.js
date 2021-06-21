function printSmallestNumber(numOne, numTwo, numThree) {
    let smallest = 0;

    if (numOne < numTwo && numOne < numThree) {
        smallest = numOne;
    } else if (numTwo < numOne && numTwo < numThree) {
        smallest = numTwo;
    } else {
        smallest = numThree;
    }

    console.log(smallest);
}

printSmallestNumber(2, 5, 3);