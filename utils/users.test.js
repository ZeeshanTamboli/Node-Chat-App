const expect = require('expect');
const { Users } = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Zeeshan',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Javed',
        room: 'React Course'
      },
      {
        id: '3',
        name: 'Reshma',
        room: 'Node Course'
      }
    ];
  });

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

  it('should remove a user', () => {
    const user = users.removeUser('2');
    expect(user[0].id).toBe('2');
  });

  it('should not remove a user', () => {
    const user = users.removeUser('123');
    expect(user[0]).toNotExist();
  });

  it('should find a user', () => {});

  it('should not find a user', () => {});

  it('should return name for node course', () => {
    const userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Zeeshan', 'Reshma']);
  });

  it('should return name for react course', () => {
    const userList = users.getUserList('React Course');
    expect(userList).toEqual(['Javed']);
  });
});
