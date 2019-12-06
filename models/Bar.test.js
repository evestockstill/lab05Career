const Bar = require('./Bar');

describe('Bar Model', () => {
  describe('name', () => {
    it('requires a name', () => {
      const bar = new Bar({
        phone: '503-777-7777',
        age: 22,
        averageRating: 7
      });
      const { errors } = bar.validateSync();
      expect(errors.name.message).toEqual('Path `name` is required.');
    });
  });

  describe('phone number', () => {
    it('has a phone number with less than 20 characters', () => {
      const bar = new Bar({
        name: 'some bar',
        phone: '50399999999999999999999999999999999',
        age: 22,
        averageRating: 9

      });
      const { errors } = bar.validateSync();
      expect(errors.phone.message).toEqual('Path `phone` (`50399999999999999999999999999999999`) is longer than the maximum allowed length (20).');
    });
  });

  describe('age', () => {
    it('requires a min age of 21', () => {
      const bar = new Bar({
        name: 'some bar',
        phone: '503-999-9999',
        age: 20,
        averageRating: 9
      });
      const { errors } = bar.validateSync();
      expect(errors.age.message).toEqual('Path `age` (20) is less than minimum allowed value (21).');
    });
    it('should be greater than or equal to 21', () => {
      const age = 21;
      expect(age).toBeGreaterThanOrEqual(21);
    });
  });
  describe('average bar rating', () => {
    it('requires a rating lower than 11', () => {
      const bar = new Bar({
        name: 'some bar',
        phone: '503-999-9999',
        age: 20,
        averageRating: 15
      });
      const { errors } = bar.validateSync();
      expect(errors.averageRating.message).toEqual('Path `averageRating` (15) is more than maximum allowed value (10).');
    });
    it('requires a rating more than 0', () => {
      const bar = new Bar({
        name: 'some bar',
        phone: '503-999-9999',
        age: 20,
        averageRating: 0
      });
      const { errors } = bar.validateSync();
      expect(errors.averageRating.message).toEqual('Path `averageRating` (0) is less than minimum allowed value (1).');
    });
  });
});
