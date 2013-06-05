/**
 Definition: "One or more observers are interested in the state of a subject and register their interest 
 with the subject by attaching themselves. When something changes in our subject that the observer may 
 be interested in, a notify message is sent which calls the update method in each observer. When the 
 observer is no longer interested in the subject's state, they can simply detach themselves.
 */

 /** ObserverList: provides a update interface for objects that need to be notified of a Subject's changes of state **/

 function ObserverList() {
 	this.observerlist = [];
 }

 ObserverList.prototype.add = function(obj) {
 	this.observerlist.push(obj);
 }

 ObserverList.prototype.remove = function(obj) {
 	var i, 
 		pointer = -1;

 	for (i=0;i<this.observerlist.length; i++) {
 		if (this.observerlist[i] === obj) {
 			this.observerlist[i] = undefined; // !Not the best way to remove objects!
 		}
 	}
 }

 ObserverList.prototype.get = function(index) {
 	return this.observerlist[index];
 }

 ObserverList.prototype.empty = function() {
 	this.observerlist = [];
 }

 ObserverList.prototype.count = function() {
 	return this.observerlist.length;
 }

 /** Subject: maintains a list of observers, facilitates adding or removing observers **/
 function Subject() {
 	this.observers = new ObserverList();
 }

 Subject.prototype.addObserver = function(obj) {
 	this.observers.add(obj);
 }

 Subject.prototype.removeObserver = function(obj) {
 	this.observers.remove(obj);
 }

 Subject.prototype.notify = function(context) {
 	var i = 0;

 	while (i<this.observers.count()) {
 		if (typeof this.observers.get(i) !== "undefined") {
 			this.observers.get(i).update(context);

 		}
 		i++;
 	}
 }

 /** Now the Observer **/
 function Observer(id) {
 	this.id = id;
 	this.update = function(context) {
 		console.log("Observer #" + id + " recieved " + context);
 	}
 }

 
 // Create a subject
 subject = new Subject();

 // Create some observers
 obj1 = new Observer(1);
 obj2 = new Observer(2);
 obj3 = new Observer(3);

 // Attach observers to the subject
 subject.addObserver(obj1);
 subject.addObserver(obj2);
 subject.addObserver(obj3);

 // Send an update
 subject.notify("an update");

 // Now remove the 2nd observer
 subject.removeObserver(obj2);

 console.log("-------");

 // Send one more update
 subject.notify("another update");


