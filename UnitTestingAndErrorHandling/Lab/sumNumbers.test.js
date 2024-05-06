import { expect } from 'chai';

import sum from './sumNumbers.js'; // Note the '.js' extension


describe('sum function', () => {
	it('should return the sum of positive numbers', () => {
		const result = sum([1, 2, 3]);
		expect(result).to.equal(6);
	});

	it('should return the sum of negative numbers', () => {
		const result = sum([-1, -2, -3]);
		expect(result).to.equal(-6);
	});

	it('should return the sum of mixed positive and negative numbers', () => {
		const result = sum([1, -2, 3]);
		expect(result).to.equal(2);
	});
});
