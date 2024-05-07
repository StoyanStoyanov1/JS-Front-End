import {expect} from "chai";
import createCalculator from './addSubtract.js'

describe('Test createCalculator', () => {
	it('should return an object with add, subtract, and get functions', () => {
		const calculator = createCalculator();
		expect(calculator).to.be.an('object');
		expect(calculator).to.have.property('add').that.is.a('function');
		expect(calculator).to.have.property('subtract').that.is.a('function');
		expect(calculator).to.have.property('get').that.is.a('function');
	});

	it('should return initial value of 0', () =>{
		const calculator = createCalculator();
		expect(calculator.get()).to.equal(0);
	})

	it('should return correct value after adding numbers', () => {
		const calculator = createCalculator();
		calculator.add(5);
		calculator.add(10);
		expect(calculator.get()).to.equal(15)
	})

	it('should return correct value after subtracting numbers', () => {
		const calculator = createCalculator();
		calculator.subtract(4);
		calculator.subtract(9);
		expect(calculator.get()).to.equal(-13);
	})

	it('should return correct after subtracting and adding', () => {
		const calculator = createCalculator();
		calculator.add(10);
		calculator.subtract(5);
		expect(calculator.get()).to.equal(5)
	})

	it('should handle negative numbers correctly', () => {
		const calculator = createCalculator();
		calculator.add(-5);
		calculator.subtract('-2');
		expect(calculator.get()).to.equal(-3);
	});

	it('should keep an internal sum that can\'t be modified from the outside', () => {
		const calculator = createCalculator();
		expect(calculator.get()).to.equal(0);
		calculator.add(5);
		expect(calculator.get()).to.equal(5);
		calculator.subtract(2);
		expect(calculator.get()).to.equal(3);
	});

	it("should return NaN for add(string)", () => {
		const calculator = createCalculator();
		calculator.add('Number');
		expect(calculator.get()).to.be.NaN;
	});
})