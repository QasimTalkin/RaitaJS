const {sum} = require('../../Node JS. helper code/myNodeFile.js');
test('should give us 4', () => {
      const text = sum(3,5);
      expect(text).toBe(`The sum is 8`);
});   
