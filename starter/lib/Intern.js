// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee(){
    constructor(name, id, email, school ){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Intern";
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern";
    }
    
}
modul.export = Intern