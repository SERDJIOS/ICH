const _ = require ('lodash')
const numbers = [1, 2, 2, 3, 4, 4, 5];

const users = [
    { name: 'Alice', role: 'admin' },
    { name: 'Bob', role: 'user' },
    { name: 'Charlie', role: 'admin' },
    { name: 'David', role: 'user' },
    { name: 'Eva', role: 'guest' }
  ];

const uniqueNumbers = [...new Set(numbers)]

console.log(uniqueNumbers);

const lodashNumbers = _.uniq(numbers)

console.log(lodashNumbers);

const groupeByRole = _.groupBy(users, "role")
console.log(groupeByRole);
