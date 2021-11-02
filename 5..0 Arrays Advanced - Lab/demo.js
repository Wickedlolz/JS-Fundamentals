function myIncludes(list, value) {
    for (const element of list) {
        if (element == value) {
            return true;
        }
    }

    return false;
}

function myIndexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element == value) {
            return i;
        }
    }

    return -1;
}

function mySlice(array, start = 0, end = array.length) {
    let result = [];

    for (let i = start; i < end; i++) {
        result.push(array[i]);
    }

    return result;
}

function mySplice(array, start, count, insert = []) {
    let left = array.slice(0, start);
    let removed = array.slice(start, start + count);
    let rigth = array.slice(start + count);

    array.length = 0;

    for (let element of left) {
        array.push(element);
    }

    for (let element of insert) {
        array.push(element);
    }

    for (let element of rigth) {
        left.push(element);
    }

    return removed;
}