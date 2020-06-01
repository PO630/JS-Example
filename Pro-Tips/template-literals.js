const horse = {
    name : 'Jack',
    size : 'small',
    skills : ['jousting','racing'],
    age : 2
}

// Bad Code 💩

let bio = horse.name + ' is a ' + horse.size + ' horse age ' + horse.age;
console.log(bio);

// Good Code 💪
const { name , size , age } = horse;
let bio2 = '${name} is a ${size} horse skilled in ${age} ';
console.log(bio2);