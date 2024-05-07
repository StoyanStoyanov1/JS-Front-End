import { expect } from "chai";
import rgbToHexColor from "./rgb-to-hex.js";

describe('Rgb to hex color', () => {
	it('should return undefined if red is not an integer or out of range', () => {
		expect(rgbToHexColor('red', 0, 0)).to.be.undefined;
		expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
		expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
	});

	it('should return undefined if green is not an integer or out of range', () => {
		expect(rgbToHexColor(0, 'green', 0)).to.be.undefined;
		expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
		expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
	});

	it('should return undefined if blue is not an integer or out of range', () => {
		expect(rgbToHexColor(0, 0, 'blue')).to.be.undefined;
		expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
		expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
	});

	it('should return the correct hex color for valid RGB values', () => {
		expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
		expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
		expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
		expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
		expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
	});
});
