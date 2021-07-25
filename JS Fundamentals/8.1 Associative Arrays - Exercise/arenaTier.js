function arenaTier(input) {
    let tier = {};

    for (let line of input) {
        if (line == 'Ave Cesar') {
            break;
        }

        if (line.split(' ').includes('->')) {
            addGladiator(line);
        } else {
            duel(line);
        }
    }

    let sorted = Object.entries(tier).sort(compareByTotalSkills);

    for (let [name, tech] of sorted) {
        let totalSkill = Object.values(tech).reduce((a, b) => a + b);
        console.log(`${name}: ${totalSkill} skill`);

        let sortedTech = Object.entries(tech).sort((a, b) => {
            return (b[1] - a[1]) || a[0].localeCompare(b[0]);
        });

        for (let tech of sortedTech) {
            console.log(`- ${tech[0]} <!> ${tech[1]}`);
        }
    }


    function addGladiator(line) {
        let [name, tech, skill] = line.split(' -> ');
        skill = Number(skill);

        if (!tier.hasOwnProperty(name)) {
            tier[name] = {};
        }

        if (!tier[name].hasOwnProperty(tech)) {
            tier[name][tech] = 0;
        }

        if (skill > tier[name][tech]) {
            tier[name][tech] = skill;
        }
    }

    function duel(line) {
        let [a, b] = line.split(' vs ');
        compareGladiatorsTech(a, b);
    }

    function compareGladiatorsTech(a, b) {
        if (tier.hasOwnProperty(a) && tier.hasOwnProperty(b)) {
            let gladiatorA = Object.keys(tier[a]);
            let gladiatorB = Object.keys(tier[b]);

            for (let tech of gladiatorA) {
                if (gladiatorB.includes(tech)) {
                    if (tier[a][tech] > tier[b][tech]) {
                        delete tier[b];
                    } else if (tier[b][tech] > tier[a][tech]) {
                        delete tier[a];
                    }
                    break;
                }
            }
        }
    }

    function compareByTotalSkills(a, b) {
        let totalSkillA = 0;
        for (let [tech, value] of Object.entries(a[1])) {
            totalSkillA += value;
        }

        let totalSkillB = 0;
        for (let [tech, value] of Object.entries(b[1])) {
            totalSkillB += value;
        }

        return (totalSkillB - totalSkillA) || a[0].localeCompare(b[0]);
    }
}

// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);