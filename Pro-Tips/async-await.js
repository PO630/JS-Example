
const random = () => {
    return Promise.resolve(Math.random());
}

// Bad Code 💩

const sumRandomAsyncNums = () => 
{
    let first;
    let second;
    let third;

    return random()
                .then( v => {
                    first = v;
                    return random();
                })
                .then( v => {
                    second = v;
                    return random();
                })                
                .then( v => {
                    third = v;
                    return random();
                });

}

// Good Code 💪

const sumRandomAsyncNums = async() => {
    
    const first = await random();
    const second = await random();
    const third = await random();

    console.log('Result ${first + second + third');
}