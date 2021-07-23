function cutAndReverse(text) {
    let firstHalf = text.substring(0, text.length / 2);
    let secondHalf = text.substring(text.length / 2);

    console.log(reverseString(firstHalf));
    console.log(reverseString(secondHalf));

    function reverseString(str) {
        let result = str.split('').reverse().join('');

        return result;
    }
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');