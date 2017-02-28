// Write a function duckCount that returns the number of
// arguments passed to it which have a property 'quack'
// defined directly on them.
// Do not match values inherited from prototypes.

const duckCount = (...xs) => xs.filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack')).length;

const n = Object.create(null);
n.quack = true;

const result = duckCount({ quack: true }, { quack: true }, n);
console.log('result: ', result);

module.exports = duckCount;

// Official Impl:
function duckCountOfficial() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;
}
