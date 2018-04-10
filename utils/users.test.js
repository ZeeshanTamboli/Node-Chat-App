const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  it('should add new user', () => {
    let users = new Users();
    const user = {
      id: '123',
      name: 'Zeeshan',
      room: 'GOT fans'
    };
    const res = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });
});
