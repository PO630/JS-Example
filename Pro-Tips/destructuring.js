const turtle = {
    name : 'bob',
    legs : 4,
    shell : true,
    type : 'green',
    meal : 10,
    diet : 'berries'
}

// Bad Code 💩
function feed1(animal){
    return 'Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}' ;
}
console.log(feed1(turtle));

// Good Code 💪
function feed2( { name , meal , diet} ){
    return 'Feed ${name} ${meal} kilos of ${diet}' ;
}
console.log(feed2(turtle));

// OR
function feed3(animal){
    const { name , meal , diet } = animal;
    return 'Feed ${name} ${meal} kilos of ${diet}' ;
}
console.log(feed3(turtle));