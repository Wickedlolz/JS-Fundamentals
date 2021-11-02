function searchNumber(array, actions) {
    let [range, howManyToDelete, searchedNumber] = actions;
    let resultArray = array.slice(0, range);
    resultArray.splice(0, howManyToDelete);

    let counter = 0;

   for (const digit of resultArray) {
       if (digit === searchedNumber) {
           counter++;
       }
   }

   console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}

searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);