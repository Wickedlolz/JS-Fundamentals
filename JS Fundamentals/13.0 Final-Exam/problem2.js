function solve(input) {
    let n = Number(input.shift());
    let pattern = /([A-Za-z0-9\W]{1,})>(?<pass>\d{3}\|[a-z]{3}\|[A-Z]{3}\|[^<>]{3})<(\1)/;

    for (let i = 0; i < n; i++) {
        let match = pattern.exec(input[i]);

        if (match != null) {
            let pass = match.groups.pass;
            let encrypted = pass.split('|').join('');
            console.log(`Password: ${encrypted}`);
        } else {
            console.log(`Try another password!`);
        }
    }
}

// solve([
//     "3",
//     "##>00|no|NO|!!!?<###",
//     "##>123|yes|YES|!!!<##",
//     "$$<111|noo|NOPE|<<>$$"
// ]);

solve(["5",

    "aa>111|mqu|BAU|mqu<aa",

    "()>111!aaa!AAA!^&*<()",

    "o>088|abc|AAA|***<o",

    "asd>asd|asd|ASD|asd<asd",

    "*>088|zzzz|ZzZ|123<*"]);