function equalArrays(arrayOne = [], arrayTwo = []) {
    let sum = 0;

    for (let i = 0; i < arrayOne.length; i++) {
        if (Number(arrayOne[i]) !== Number(arrayTwo[i])) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        } else {
            sum += Number(arrayOne[i]);
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    }

    this.age = age;
    this.gender = gender;
    this.interests = interests;

    this.bio = function() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests}`);
    }
    this.greeting = function() {
        console.log(`Hi! I'm ${this.name.first}.`);
    }
}

let person1 = new Person('Jessica', 'Adams', 22, 'female', ['music', 'dancing']);
let person2 = new Person('Annie', 'Asford', 24, 'female', ['marketing', 'social work', 'walking']);

person1.bio();
person2.bio();