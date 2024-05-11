import {expect} from "chai";
import lookupChar from "./charLookUp.js";

describe('Test charLoopUp', function () {
	it('should return undefined if string is not a string or index is not an Integer', function () {
		expect(lookupChar(25, 2)).to.be.undefined;
		expect(lookupChar('25', 2.5)).to.be.undefined;
		expect(lookupChar(25, 2.5)).to.be.undefined;
	})

	it ('should return incorrect index if index not in range 0 - string length', function () {
		expect(lookupChar('test', -1)).to.equal('Incorrect index');
		expect(lookupChar('test', 4)).to.equal('Incorrect index');
	})

	it ('should return char at index if input is correct', function () {
		expect(lookupChar('test', 0)).to.equal('t');
		expect(lookupChar('test', 2)).to.equal('s');
	})


})