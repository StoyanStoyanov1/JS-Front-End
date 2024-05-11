import { expect } from "chai";
import isOddOrEven from "./isOddOrEven.js";

describe('Test isOddOrEven', () => {
	it('schuld return undefined when input is not a string', () => {
		expect(isOddOrEven(['one', 2])).to.be.undefined;
		expect(isOddOrEven(24)).to.be.undefined;
		expect(isOddOrEven({name: 'name'})).to.be.undefined;
	})

	it ('should return even when length input is even', () => {
		expect(isOddOrEven('test')).to.equal('even');
		expect(isOddOrEven('')).to.equal('even');
	})

	it ('should return odd when length input is odd', () => {
		expect(isOddOrEven('odd')).to.equal('odd');
		expect(isOddOrEven(' ')).to.equal('odd');
	})
})