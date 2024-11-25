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

class Student {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    }
    learn(skill){
        this.skills.push(skill);
    }
}
class Teacher {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
    }
    teach(studenet, skill_index){
        studenet.learn(this.skills[skill_index])
    }
}
class School {
    // Compostion - has_a relationships netween Objects
    // A school is Composed of students and teachers
    constructor(teachers, students) {
        this.teachers = teachers; // School has teachers
        this.students = students; // School has students
    }
}
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
console.log(alice);
console.log(bob);


