const moment = require('moment');

// const date = moment();
// date.add(100, 'y').subtract(9, 'M');
// console.log(date.format('MMM Do, YYYY'));

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const createdAt = 1234;
const date = moment(createdAt);
console.log(date.format('h:mm a'));
