const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Zeeshan';
    const text = 'Test should pass';
    const res = generateMessage(from, text);

    expect(res).toInclude({ from, text });
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Admin';
    const latitude = 15;
    const longitude = 19;
    const url = 'https://www.google.com/maps?q=15,19';
    const res = generateLocationMessage(from, latitude, longitude);

    expect(res.createdAt).toBeA('number');
    expect(res).toInclude({ from, url });
    expect(res.url).toBe(url);
  });
});
