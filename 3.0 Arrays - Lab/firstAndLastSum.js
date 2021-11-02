function firstAndLastSum(array = []) {
    let firstElement = array[0];
    let lastElement = array[array.length - 1];
    let sum = firstElement + lastElement;
    
    console.log(sum);
}

firstAndLastSum([20, 30, 40]);