//spread
var partes = ['ombro', 'joelho'];
var musica = ['cabeca', ...partes, 'e', 'pé'];

console.log(musica);

function fn (x, y, z) { }
var args = [0, 1, 2];
fn(...args);