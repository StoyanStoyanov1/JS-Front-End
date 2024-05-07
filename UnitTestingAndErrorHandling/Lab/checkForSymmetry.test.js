import {expect} from "chai";
import isSymmetric from './checkForSymmetry.js'

describe('Check For Symmetry' ,() => {
	it('should return fasle for non array', () => {
		expect(isSymmetric('Symmetry')).to.be.false;
		expect(isSymmetric({name: 'symmetry'})).to.be.false;
		expect(isSymmetric(3)).to.be.false;
		expect(isSymmetric(undefined)).to.be.false;
	})

	it('should return false for non symmetric array', () => {
		expect(isSymmetric([1, 2, 3, 4])).to.be.false;
		expect(isSymmetric(['one', 'two', 'one', 'four'])).to.be.false;
	})

	it('should return true for symmetric array', () => {
		expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
		expect(isSymmetric([1, 2, 1, 2, 1])).to.be.true;
	})

	it('should return true for an empty array', () => {
		expect(isSymmetric([])).to.be.true;
	})

	it('should return true for array with a single element', () => {
		expect(isSymmetric(['one element'])).to.be.true
	})

	it('should return false on isSymmetric(["2",2])', () => {
		expect(isSymmetric(["2", 2])).to.be.false;
	});
})

