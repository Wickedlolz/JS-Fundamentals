function adAstra(input) {
    let pattern = /(\||#)(?<item>[A-Z(\s)?a-z]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/g;
    let items = [];

    let match = input[0].match(pattern);
    if (match != null) {
        for (let item of match) {
            items.push(item);
        }
    }

    let patternNames = /(\||#)(?<item>[A-Z(\s)?a-z]+)(\1)(?<date>\d{2}\/\d{2}\/\d{2})(\1)(?<calories>\d+)(\1)/;
    let totalCalories = 0;

    for (let item of items) {
        let match = patternNames.exec(item);
        if (match != null) {
            totalCalories += Number(match.groups.calories);
        }
    }

    let days = 0;

    for (let i = 2000; i <= totalCalories; i += 2000) {
        days++;
    }

    console.log(`You have food to last you for: ${days} days!`);
    for (let item of items) {
        let match = patternNames.exec(item);
        if (match != null) {
            console.log(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
        }
    }
}

adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);