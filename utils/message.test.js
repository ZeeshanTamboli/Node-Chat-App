const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Zeeshan';
    const text = 'Test should pass';
    const res = generateMessage(from, text);

    expect(res).toInclude({ from, text });
    expect(res.createdAt).toBeA('number');
  });
});
