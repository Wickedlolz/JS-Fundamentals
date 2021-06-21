function palindrome(array = []) {
    array.map(digit => isPalindrome(digit) ? console.log('true') : console.log('false'));

    function isPalindrome(number) {
        let numberAsStr = number.toString();
        let reversedStr = '';

        for (let i = numberAsStr.length - 1; i >= 0; i--) {
            reversedStr += numberAsStr[i];
        }

        if (numberAsStr === reversedStr) {
            return true;
        } else {
            return false;
        }
    }
}

palindrome([123,323,421,121]);