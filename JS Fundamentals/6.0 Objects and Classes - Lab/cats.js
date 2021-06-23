function printCat(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    let cats = [];

    for (let prop of array) {
        let [name, age] = prop.split(' ');
        age = Number(age);
        let cat = new Cat(name, age);
        cats.push(cat);
    }

    for (let cat of cats) {
        console.log(cat.meow());
    }
}

printCat(['Mellow 2', 'Tom 5']);