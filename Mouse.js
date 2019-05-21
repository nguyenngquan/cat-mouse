function Mouse(name) {
	this.name = name;
	this.dead = false;
};

module.exports = Mouse;
Mouse.prototype.die = function() {
	this.dead = true;
};