var moment = require('moment');

// var date = moment();
// date.subtract(100, 'year')
// console.log(date.format('MMM Do, YYYY'));

// console.log(date.format('h:mm a'));

var createdAt = 1000000000000000;
console.log(createdAt);
var date = moment(createdAt);
console.log(date.format('MMM Do, YYYY'));
