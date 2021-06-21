function loading(procents) {
    if (procents >= 100) {
        console.log(`${procents}% Complete!`);
        console.log(printBar(procents));
    } else {
        console.log(`${procents}% ${printBar(procents)}`);
        console.log('Still loading...');
    }

    function printBar(procents) {
        let bar = '';
        if (procents >= 0 && procents < 10) {
            bar = '[..........]';
        } else if (procents >= 10 && procents < 20) {
            bar = '[%.........]';
        } else if (procents >= 20 && procents < 30) {
            bar = '[%%........]';
        } else if (procents >= 30 && procents < 40) {
            bar = '[%%%.......]';
        } else if (procents >= 40 && procents < 50) {
            bar = '[%%%%......]';
        } else if (procents >= 50 && procents < 60) {
            bar = '[%%%%%.....]';
        } else if (procents >= 60 && procents < 70) {
            bar = '[%%%%%%....]';
        } else if (procents >= 70 && procents < 80) {
            bar = '[%%%%%%%...]';
        } else if (procents >= 80 && procents < 90) {
            bar = '[%%%%%%%%..]';
        } else if (procents >= 90 && procents < 100) {
            bar = '[%%%%%%%%%.]';
        } else if (procents >= 100) {
            bar = '[%%%%%%%%%%]';
        }

        return bar;
    }
}

loading(32);