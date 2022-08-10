console.log("--------Aufgabe1---------");

const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    info: function () {
        return `${
            this.firstName
        } ${this.lastName.toLocaleLowerCase()} is a student in class ${
            this.class
        }`;
    },
};
console.log(student.info());

const teacher = {
    firstName: "John",
    lastName: "Smith",
    age: 41,
    job: "engineer",
    city: "Mahon",
    country: "France",
    text: function () {
        return `${this.firstName} ${this.lastName} is a ${this.age} year old engineer living in ${this.country}`;
    },
};
console.log(teacher.text());
