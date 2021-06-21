function sumFirstAndLast(list) {
    let first = Number(list.shift());
    let last = Number(list.pop());

    return first + last;
}

console.log(sumFirstAndLast(['20', '30', '40']));