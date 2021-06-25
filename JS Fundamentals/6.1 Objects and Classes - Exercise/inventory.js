function inventory(array) {
    let heroes = [];

    for (let line of array) {
        let heroDetails = line.split(' / ');
        let heroName = heroDetails[0];
        let heroLevel = Number(heroDetails[1]);
        let heroItems = heroDetails[2].split(', ');

        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }

        heroes.push(hero);
    }

    let sortedByAscending = heroes.sort((a, b) => a['level'] - b['level']);
    for (let hero of sortedByAscending) {
        hero['items'].sort((a, b) => a.localeCompare(b));
    }

    for (let hero of sortedByAscending) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

inventory(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);