module.exports = function reverse (n) {
 const rev = Math.abs(n).toString().split('').reverse().join('');
return Number(rev) 
}
