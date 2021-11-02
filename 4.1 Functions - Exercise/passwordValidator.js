function validator(password) {
    if (!hasValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isContainLetterAndDigit(password)) {
        console.log("Password must consist only of letters and digits");
    }

    if (!isContainMinDigits(password)) {
        console.log("Password must have at least 2 digits");
    }

    if (hasValidLength(password) && isContainLetterAndDigit(password) && isContainMinDigits(password)) {
        console.log('Password is valid');
    }


    function hasValidLength(password) {
        if (password.length >= 6 && password.length <= 10) {
            return true;
        } else {
            return false;
        }
    }

    function isContainLetterAndDigit(password) {
        let isValid = true;

        for (let i = 0; i < password.length; i++) {
            if ((password[i].charCodeAt(0) >= 97 && password[i].charCodeAt(0) <= 122) || 
            (password[i].charCodeAt(0) >= 65 && password[i].charCodeAt(0) <= 90)) {
                isValid = true;
            } else {
                if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
                    isValid = true;
                } else {
                    isValid = false;
                    break;
                }
            }
        }

        return isValid;
    }

    function isContainMinDigits(password) {
        let count = 0;

        for (let i = 0; i < password.length; i++) {
            if (password[i].charCodeAt(0) >= 48 && password[i].charCodeAt(0) <= 57) {
                count++;
            }
        }

        if (count >= 2) {
            return true;
        } else {
            return false;
        }
    }
}

// validator('logIn');
// validator('MyPass123');
// validator('Pa$s$s');