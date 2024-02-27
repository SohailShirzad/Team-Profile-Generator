// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }

    getName() {return this.name;}
    getId() {return this.id;}
    getEmail() {return this.email}
    getRole(){return this.title}
}

// const emp = new Employee('Sohail', '1', 'ss@hotmail.com');

// emp.getRole();

module.exports  = Employee;