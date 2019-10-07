
// Array holding all of our employees
var employees = [];

var employee1 = {
    firstName: "Eduardo",
    lastName: "Garcia",
    age: 29,
    salary: 70000,
    status: "alive",
    life: "San Francisco",
    startDate: "November 2017"
};

var employee2 = {
    firstName: "Phil",
    lastName: "Johnson",
    age: 50,
    salary: 80000,
    status: "dead",
    life: "Los Angeles",
    startDate: "January 1954"
}

var employee3 = {
    firstName: "Sally",
    lastName: "Peters",
    age: 70,
    salary: 250000,
    status: "alive",
    life: "New York",
    startDate: "January 1999"
}


// Array with 3 Objects in them. adding index item to line 3 code [ ]
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

console.log(employees);

// ONly use employees array

//Eduardo is zero, Phil 1 , Sally 2,
employees [1] ["life"] = "San Diego";

// Dot Notation access for Objects. does same as above
employees[0].status;


// Bracket Notation access for Objects and ARrayss.
employees[0]["status"];


