function rotation(array = [], rotations) {
    let copyArray = array.slice();

    for (let i = 0; i < rotations; i++) {
        let rotatedArray = [];
        let tmp = copyArray[0];
        for (let j = 1; j < copyArray.length; j++) {
            rotatedArray.push(copyArray[j]);
        }

        rotatedArray.push(tmp);
        copyArray = rotatedArray;
    }

    console.log(copyArray.join(' '));
}