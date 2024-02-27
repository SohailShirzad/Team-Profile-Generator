// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
}
Employee.prototype.getName = function(){
    return this.name;

};
Employee.prototype.getId = function(){
    return this.id;

};
Employee.prototype.getEmail = function(){
    return this.email
};
Employee.prototype.getRole = function(){
    const text = `${this.name}
    Id = ${this.getId()}
    Email = ${this.getEmail()}
    `
    console.log(text);
    console.log('======================');
};

// const emp = new Employee('Sohail', '1', 'ss@hotmail.com');

// emp.getRole();

module.exports  = Employee;