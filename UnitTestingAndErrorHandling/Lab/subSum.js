function subSum(array, startIndexInput, endIndexInput) {
	if (!Array.isArray(array)) return NaN;

	const startIndex = Math.max(startIndexInput, 0);
	const endIndex = Math.min(endIndexInput, array.length - 1);

	if (startIndex > endIndex || startIndex > array.length - 1) return 0;

	if (array.slice(startIndex, endIndex + 1).some(isNaN)) return NaN;

	const sum = array.slice(startIndex, endIndex + 1).reduce((result, number) => result + number, 0);

	return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([10, 'twenty', 30, 40], 0, 2))