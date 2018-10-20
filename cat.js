function cat(name,age) {
	// body...
	this.name = name;
	this.age = age;
	this.dead;
};

cat.prototype.dead = function() {
	// body...
	this.dead = true;
};

module.exports = cat;