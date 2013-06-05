/** Define a module **/
var employeeModule = function() {

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

	// Return public methods
	return {
		initialize : function(n, r, s) {
			_name = n;
			_role = r;
			_salary = s;
		},
		getName: function() { //public accessor for _name
			return _name;
		},
		getSalary: function() {
			return _salary + calculateBonus();
		},
		getRole: function() { 
			return _role;
		}
	}

};

/** Initialize a Manager **/
manager = employeeModule();
manager.initialize("John Doe", "Manager", 8333); 

/** Initialize an Employee **/
employee = employeeModule();
employee.initialize("Sandy Jones", "Software Developer", 8333); 

console.log(manager.getName() + ", " + manager.getRole() + ", $" + manager.getSalary());
console.log(employee.getName() + ", " + employee.getRole() + ", $" + employee.getSalary());