// school.js

// What does a school have?
// - Students
// - Teachers

// What does a school do?
// - Motivate/Inspire
// - Direct/Guide (provide a pathway)
// - Teach/Educate

// What do students have?
// Knowledge/Skills

// What do student do?
// - Learn

// What do teachers have?
// Experience/Knowledge
// Patients/Perspective
// Maturity/Critiques

// What do teachers do?
// - Teach

// Base Class / Parent Class, we inherit from "Person"
class Person{
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    };
};

class Student extends Person { // Student is_a Person inherits the constructor

    learn(skill){
        this.skills.push(skill);
    };
};
class Teacher extends Person{ // Student is_a Person inherits the constructor

    teach(studenet, skill_index){
        studenet.learn(this.skills[skill_index])
    };
};
class School {
    // Compostion - has_a relationships netween Objects
    // A school is Composed of students and teachers
    constructor(teachers, students) {
        this.teachers = teachers; // School has teachers
        this.students = students; // School has students
    };
};
// Tests
let s = new School([
    new Teacher("Bob",["code", "draw"]),
    new Teacher("Alexia",["accounting", "statistics"]),
], [
    new Student("Ted",["cooking"]),
    new Student("Alice",["draw"]),
]);

let alice = s.students[1];
let bob = s.teachers[0];
bob.teach(alice, 0);
console.log(alice.skills[1]==="code")
console.log(alice.skills);
console.log(bob.skills);


