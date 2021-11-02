function cardGame(input) {
    let players = {};
    let cardsPower = { "J": 11, "Q": 12, "K": 13, "A": 14, "S": 4, "H": 3, "D": 2, "C": 1 };

    for (let line of input) {
        let tokens = line.split(': ');
        let playerName = tokens[0];
        let playerCards = tokens[1].split(', ');

        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = [];
        }

        for (let card of playerCards) {
            if (!players[playerName].includes(card)) {
                players[playerName].push(card);
            }
        }
    }

    let playersPoints = {};

    for (let [key, value] of Object.entries(players)) {
        let points = 0;
        for (let card of value) {
            let tokens = card.split('');
            let cardValue = tokens.slice(0, tokens.length - 1).join('');
            let cardPower = tokens.slice(tokens.length - 1);

            if (cardsPower.hasOwnProperty(cardValue)) {
                points += cardsPower[cardValue] * cardsPower[cardPower];
            } else {
                points += Number(cardValue) * cardsPower[cardPower];
            }
        }

        playersPoints[key] = points;
    }

    for (let key in playersPoints) {
        console.log(`${key}: ${playersPoints[key]}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);