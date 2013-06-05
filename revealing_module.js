/** 
 Defintion: "...pattern where we would simply define all of our functions and variables in the private scope and 
 return an anonymous object with pointers to the private functionality we wished to reveal as public."
 Source: http://addyosmani.com/resources/essentialjsdesignpatterns/book/
**/

/** Define a module **/
var employeeRevealingModule = function() {

	// some private variables
	var _name,
		_role,
		_salary;

	// a private function
	function calculateBonus() {
		if (_role == "Manager") {
			return 500; // Managers get 500 bonus
		} else {
			return 0;
		}
	}

	function initialize(n, r, s) {
		_name = n;
		_role = r;
		_salary = s;
	}

	function getName() { //public accessor for _name
		return _name;
	}
	function getSalary() {
		return _salary + calculateBonus();
	}
		
	function getRole() { 
		return _role;
	}

	// Choose which methods to make public
	return {
		initialize: initialize,
		getName: getName,
		getSalary:getSalary,
		getRole:getRole
	}
};

/** Initialize a Manager **/
manager = employeeRevealingModule();
manager.initialize("John Doe", "Manager", 8333); 

/** Initialize an Employee **/
employee = employeeRevealingModule();
employee.initialize("Sandy Jones", "Software Developer", 8333); 

console.log(manager.getName() + ", " + manager.getRole() + ", $" + manager.getSalary());
console.log(employee.getName() + ", " + employee.getRole() + ", $" + employee.getSalary());