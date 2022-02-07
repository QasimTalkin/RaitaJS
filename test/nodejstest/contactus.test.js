const {sum} = require('../../models/ContactUs');
test('should give us 4', () => {
      const text = sum(3,5);
      expect(text).toBe(7);
});  