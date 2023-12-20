const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// const copiedArr =[...hobbies];

// console.log(copiedArr);

// const toArr = (...args) => {
//     return args;
// };

// console.log(toArr(1, 2, 3, 4));
