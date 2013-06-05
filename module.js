/** Define a module **/
var employeeModule = function() {
	
	// some private variables
	var name,
		role,
		salary;

	// a private function
	function getBonus() {
		if (role == "Manager") {
			return 500; // Managers get 500 bonus
		} else {
			return 0;
		}
	}

	// Return public methods
	return {
		initialize : function(n, r, s) {
			name = n;
			role = r;
			salary = s;
		},
		getName: function() { //public accessor for name
			return name;
		},
		getSalary: function() {
			return salary + getBonus();
		},
		getRole: function() { 
			return role;
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