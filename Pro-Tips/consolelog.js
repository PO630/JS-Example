// https://www.youtube.com/watch?v=Mus_vwhTCq0

// Suivre les variables dans le console

const foo = { name:'tom', age: 30 , nervous: false };
const bar = { name:'rick', age: 40 , nervous: false };
const baz = { name:'harry', age: 50 , nervous: true };

// Bad Code 💩
console.log('%c Nom de variable inconue','color:red;');
console.log(foo,bar,baz);

// Good Code 💪
console.log('%c Affiche aussi le nom de variable','color:green;');
console.log({ foo, bar , baz});

// Tableau exemple
console.log('%c Affiche sous forme tableau','color:blue;');
console.table([foo,bar,baz]);

// Trace d'execution
console.log('%c Trace d execution','color:orange;');
const deleteMe = () => console.trace('deleteMe valide');
deleteMe();

