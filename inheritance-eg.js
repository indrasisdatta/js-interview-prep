/* ES5 inheritance */
function Person(name) {
	this.name = name;
}
function Student(name, studentId) {
  // we are executing constructor of Person class from the constructor function of Student class in Student class’s scope. 
  // It is similar to calling super.
	Person.call(this, name);
  this.studentId = studentId;
}

// Create prototype object for Student class from Person class.
Student.prototype = Object.create(Person.prototype);

// We copied prototype from Person class and hence we lost constructor function of Student class.
// Reassign constructor function.
Student.prototype.constructor = Student;

const student1 = new Student('Std', 5);
console.log(student1)

/* ES6 inheritance */
class Person {
	constructor(name) {
  	this.name = name;
  }
  displayInfo() {
  	return `Hi ${this.name}`
  }
}
class Student extends Person {
	constructor(name, studentId) {
  	super(name);
    this.studentId = studentId;
  }
}

const student1 = new Student('Std', 5);
console.log(student1);
console.log(student1.displayInfo())
