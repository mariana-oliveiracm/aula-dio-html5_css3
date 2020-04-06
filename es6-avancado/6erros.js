//ReferenceError: name is not defined
/*console.log(name);
const name = 'Rafaela Macedo';*/

//The error: ReferenceError: name is not defined
//Keep going...
try {
    console.log(name);
    const name = 'Rafaela Macedo';
} catch (err) {
    console.log('The error:', err);
} finally {
    console.log ('Keep going...');
}

//The error: Error: Custom message on custom error
//Keep going...
try {
    const name = 'Rafaela Macedo';
    const myError = new Error ('Custom message on custom error');
    throw myError;
} catch (err) {
    console.log('The error:', err);
} finally {
    console.log ('Keep going...');
}