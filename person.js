function person(name,age) {
	// body...
	this.name = name;
	this.age = age;
	this.show = function () {
		// body...
		console.log(this.name+ " is "+ this.age + " old");
	}
}

person.prototype.jump = function() {
	// body...
	console.log('jump');
};


person.prototype.run = function() {
	// body...
	console.log('run');
};

module.exports = person;