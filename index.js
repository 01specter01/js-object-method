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
console.log();
console.log("--------Aufgabe2---------");
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
console.log();
console.log("--------Aufgabe3---------");

const MyMath = {
    ceil: function () {
        return Math.ceil();
    },
    floor: function () {
        return Math.floor();
    },
    pow: function () {
        return Math.pow();
    },
    sqrt: function () {
        return Math.sqrt();
    },
    abs: function () {
        return Math.abs();
    },
    abs: function () {
        return Math.abs();
    },
};
console.log(this.ceil(2.4));
console.log(this.floor(2.4));
console.log(this.pow(2.3));
console.log(this.sqrt(16));
console.log(this.abs(-1));
console.log(this.abs(1));
