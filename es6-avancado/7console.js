console.log('black text');
console.warn('yellow text with alert');
console.error('red error text');

console.trace();

console.group('my group');
console.log('info inside group');
console.log('more info inside group');
console.groupEnd('my group');

console.time ('log time');
setTimeout(() => {
    console.timeEnd('log time');
}, 2000);

console.table (['Carlos Joaquim', 'Digital Innovation One']);

console.assert(1 === 0, 'ops');

console.log ('%c styled log', 'color: orange; font-size: 30px');
