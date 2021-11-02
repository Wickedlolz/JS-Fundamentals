function reverseStrings(array = []) {
    for (let i = 0; i < array.length / 2; i++) {
        swapElements(array, i, array.length - 1 - i);
    }

    console.log(array.join(' '));

    function swapElements(arr, i, j) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

reverseStrings(['a', 'b', 'c', 'd', 'e']);