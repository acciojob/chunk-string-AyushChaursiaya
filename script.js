function stringChop(str, length) {
  // your code here
	if (str === null) {
		return [];
	}

	const result = [];
	for (let i = 0; i < str.length; i++) {
		result.puch(str.substring(i, i + length));
		i += length-1;
	}
	return result;
}

console.log(chunkString("Hello, world!", 5));
console.log(chunkString("12345", 2));
console.log(chunkString("abc", 5));
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
