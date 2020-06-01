
const pikachu = { name : 'Pikachu'};
const stats = { hp : 40 , attack : 60 , defense : 45 };

// Bad Code 💩

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR

const lv10 = Object.assign( pikachu , stats );
const lv10 = Object.assign( pikachu , { hp : 45 } );

// Good Code 💪

const lv10 = { ...pikachu, ...stats };
const lv11 = { ...pikachu, hp : 45 };

// Arrays

let pokemon = [ 'Arbok' , 'Raichu' , 'Mew' ];

// Bad Code 💩

pokemon.push('Bulbasaur');
pokemon.push('Pikachu');
pokemon.push('Metapod');

// Good Code 💪

// Push
pokemon = [...pokemon , 'Bulbasaur' , 'Pikachu' , 'Metapod' ];

// Shift
pokemon = ['Bulbasaur' , 'Pikachu' , 'Metapod', ...pokemon ];

