const database = require('../database/dataGenerator.js');

//testing longitude generator function for correct output type
test('creates a string value output', () => {
  expect(typeof longitude()).toBe('string'); 
});

//testing latitude generator function for correct output type 
test('creates a string value output', () => {
  expect(typeof latitude()).toBe('string');
});

//testing phone number generator function for correct output type
test('creates a phone number that is a string', () => {
  expect(typeof phoneNumber()).toBe('string');
});
