import { generateMockData } from '../database/dataGenerator.js';

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
  expect(typeof phoneNumber()).toEqual('string');
});

//testing for 200 entries in the array
test('200 entries in the array', () => {
  expect(generateMockData().length).toEqual(200);
});
