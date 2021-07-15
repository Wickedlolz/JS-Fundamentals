function meetinigs(array) {
    let meetingList = {};

    for (let line of array) {
        let tokens = line.split(' ');

        if (meetingList.hasOwnProperty(tokens[0])) {
            console.log(`Conflict on ${tokens[0]}!`);
        } else {
            meetingList[tokens[0]] = tokens[1];
            console.log(`Scheduled for ${tokens[0]}`);
        }
    }

    for (let key in meetingList) {
        console.log(`${key} -> ${meetingList[key]}`);
    }
}

meetinigs(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);