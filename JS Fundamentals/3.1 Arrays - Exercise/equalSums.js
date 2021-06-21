function equalSum(array = []) {
    let hasFoundResult = false;

    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let leftIdx = 0; leftIdx < i; leftIdx++) {
            leftSum += array[leftIdx];
        }

        for (let rightIdx = i + 1; rightIdx < array.length; rightIdx++) {
            rightSum += array[rightIdx];
        }

        if (leftSum === rightSum) {
            console.log(i);
            hasFoundResult = true;
            break;
        }
    }

    if (!hasFoundResult) {
        console.log('no');
    }
}