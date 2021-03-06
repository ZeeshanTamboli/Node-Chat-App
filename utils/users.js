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
    room = room.toLowerCase();
    let user = { id, name, room };
    this.users.push(user);
    return user;
  }

  removeUser(id) {
    //return user that was removed
    let user = this.getUser(id);
    if (user) {
      this.users = this.users.filter(user => user.id !== id);
    }
    return user;
  }

  getUser(id) {
    let user = this.users.filter(user => user.id === id);
    return user;
  }

  getUserList(room) {
    let users = this.users.filter(user => user.room === room);
    let namesArray = users.map(user => user.name);

    return namesArray;
  }

  isDuplicateUser(name) {
    return this.users.filter(user => user.name === name)[0] ? true : false;
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
