/** Constructor Pattern **/

function Employee(name, role, salary) { //Constructor
	this.name = name;
	this.role = role;
	this.salary = salary;
}

Employee.prototype.toString = function() { //Prototype method available to all objects 
	var totalSalary  = this.salary + this.getBonus();
	return this.name + " is working as a " + this.role + ", and gets paid $" 
	+ totalSalary;
}

Employee.prototype.getBonus = function() { //Prototype method available to all objects 
	if (this.role == "Manager") {
		return 500; // Managers get 500 bonus
	} else {
		return 0; // No bonus for other :'(
	}
}



var developer = new Employee("John Hancock", "Software Developer", 4500); //An object
var manager = new Employee("Sandy Jones", "Manager", 8333); //An object

console.log(developer.toString());
console.log(manager.toString());