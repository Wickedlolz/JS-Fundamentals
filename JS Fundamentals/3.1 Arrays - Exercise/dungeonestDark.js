function dungeonestDark(array = []) {
    let rooms = array[0].split('|');
    let health = 100;
    let coins = 0;
    let roomCount = 0;

    for (let i = 0; i < rooms.length; i++) {
        let roomAction = rooms[i].split(' ');
        let roomItem = roomAction[0];

        switch (roomItem) {
            case 'potion':
                let potionHeal = Number(roomAction[1]);
                if (health === 100) {
                    roomCount++;
                    console.log(`You healed for 0 hp.`);
                    console.log(`Current health: ${health} hp.`);
                } else {
                    if (health + potionHeal <= 100) {
                        health += potionHeal;
                        roomCount++;
                        console.log(`You healed for ${potionHeal} hp.`);
                        console.log(`Current health: ${health} hp.`);
                    } else {
                        roomCount++;
                        let counter = 0;
                        for (let i = health; i < 100; i++) {
                            counter++;
                        }

                        health += counter;
                        console.log(`You healed for ${counter} hp.`);
                        console.log(`Current health: ${health} hp.`);
                    }
                }
                break;
            case 'chest':
                let foundedCoins = Number(roomAction[1]);
                roomCount++;
                coins += foundedCoins;
                console.log(`You found ${foundedCoins} coins.`);
                break;
            case 'boss':
                let bossDmg = Number(roomAction[1]);
                if (health - bossDmg > 0) {
                    roomCount++;
                    console.log(`You slayed ${roomItem}.`);
                } else {
                    roomCount++;
                    health = 0;
                    console.log(`You died! Killed by ${roomItem}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
                break;
            default:
                let monsterDmg = Number(roomAction[1]);
                if (health - monsterDmg > 0) {
                    health -= monsterDmg;
                    roomCount++;
                    console.log(`You slayed ${roomItem}.`)
                } else {
                    roomCount++;
                    health = 0;
                    console.log(`You died! Killed by ${roomItem}.`);
                    console.log(`Best room: ${roomCount}`);
                    return;
                }
                break;
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}