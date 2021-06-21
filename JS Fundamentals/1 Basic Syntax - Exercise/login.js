function login(array = []) {
    let copyArray = array.slice();
    let username = copyArray.shift();
    let password = username.split('').reverse().join('');

    for (let i = 0; i < copyArray.length; i++) {
        let incomePassword = copyArray[i];

        if (i == 3 && password !== incomePassword) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (incomePassword == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
    }
}