[
  {
    id: '/as1243nb5b',
    name: 'Zeeshan',
    room: 'Game of Thrones Fans'
  }
];

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor() {
    this.users = [];
  }

  addUser(id, name, room) {
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }
}

module.exports = { Users };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old`;
//   }
// }

// const me = new Person('Zeeshan', 22);
// console.log(me.getUserDescription());
