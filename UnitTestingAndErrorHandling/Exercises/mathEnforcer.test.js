import {expect} from "chai";
import mathEnforcer from "./mathEnforcer.js";

describe('mathEnforcer', () => {
	describe('addFive', () => {
		it('should return undefined if input is not a number', () => {
			expect(mathEnforcer.addFive('number')).to.be.undefined;
			expect(mathEnforcer.addFive([1, 2, 3])).to.be.undefined;
			expect(mathEnforcer.addFive({})).to.be.undefined;
			expect(mathEnforcer.addFive(true)).to.be.undefined;
		})

		it ('should return the result', () => {
			expect(mathEnforcer.addFive(3)).to.equal(8);
			expect(mathEnforcer.addFive(-7)).to.equal(-2);
			expect(mathEnforcer.addFive(3.1)).to.equal(8.1);
		})
	})

	describe('subtractTen', () => {
		it('should return undefined if input is not a number', () => {
			expect(mathEnforcer.subtractTen('number')).to.be.undefined;
			expect(mathEnforcer.subtractTen([])).to.be.undefined;
			expect(mathEnforcer.subtractTen({})).to.be.undefined;
			expect(mathEnforcer.subtractTen(false)).to.be.undefined;
			;
		})

		it ('should return the result', () => {
			expect(mathEnforcer.subtractTen(3)).to.equal(-7);
			expect(mathEnforcer.subtractTen(-7)).to.equal(-17);
			expect(mathEnforcer.subtractTen(3.1)).to.equal(-6.9);
		})
	})

	describe('sum', () => {
		it('should return undefined if input is not a number', () => {
			expect(mathEnforcer.sum('number', 2)).to.be.undefined;
			expect(mathEnforcer.sum(2, 'number')).to.be.undefined;
			expect(mathEnforcer.sum([], true)).to.be.undefined;
			expect(mathEnforcer.sum({}, false))

		})

		it ('should return the result', () => {
			expect(mathEnforcer.sum(2, 6)).to.equal(8);
			expect(mathEnforcer.sum(-7, 5)).to.equal(-2);
			expect(mathEnforcer.sum(3.1, 5)).to.equal(8.1);
			expect(mathEnforcer.sum(3.1, 5.2)).to.equal(8.3);
		})
	})


})