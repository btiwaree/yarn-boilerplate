test("Summing 3 and 4 equals 7", function(){
	const add = require('../index.js');
	expect(add(3,4)).toBe(7);
});