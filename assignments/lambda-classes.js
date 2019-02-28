// CODE here for your Lambda Classes
class Person {
  constructor(peopleOptions) {
    this.name = peopleOptions.name;
    this.age = peopleOptions.age;
    this.location = peopleOptions.location;
    this.gender = peopleOptions.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(instructorOptions) {
    super(instructorOptions);
    this.specialty = instructorOptions.specialty;
    this.favLanguage = instructorOptions.favLanguage;
    this.catchPhrase = instructorOptions.catchPhrase;
    this.correctGrades = function(studentOptions) {
      let grade = studentOptions.grade;
      let min = 95;
      let max = 100;
      grade = Math.floor(Math.random() * (max - min) + min);
      return grade >= 95 && grade;
    };
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentOptions) {
    super(studentOptions);
    this.previousBackground = studentOptions.previousBackground;
    this.className = studentOptions.className;
    this.favSubjects = studentOptions.favSubjects;
    this.grade = studentOptions.grade;
  }
  listOfSubjects() {
    return this.favSubjects.map(item => {
      return item;
    });
  }
  PRassignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade > 70) {
      return `${this.name} is set to graduate with a grade of ${this.grade}`;
    } else {
      console.log(instructor1.correctGrades(this));
      return `${this.name}'s work was graded again. His score is ${this.grade}`;
    }
  }
}

class ProjectManager extends Instructor {
  constructor(pmOptions) {
    super(pmOptions);
    this.gradClass = pmOptions.gradClass;
    this.favInstructor = pmOptions.favInstructor;
  }
  standup(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const instructor1 = new Instructor({
  name: "Instructor1",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "JavaScript is an object-oriented, inheritance based language.",
  location: "Boston, MA"
});
const student1 = new Student({
  name: "student1",
  previousBackground: "Part-time web developer",
  className: "Web18",
  favSubjects: ["CSS", "JavaScript", "Node"],
  grade: (function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  })(1, 100)
});

const projectManager1 = new ProjectManager({
  name: "PM1",
  gradClass: "Web13",
  favInstructor: "Instructor1"
});

console.log(instructor1.speak());
console.log(instructor1.demo("JavaScript"));
console.log(instructor1.grade(student1, "Prototypal Inheritance"));
console.log(student1.listOfSubjects());
console.log(
  student1.PRassignment("Prototype function Conversion into classes")
);
console.log(student1.sprintChallenge('JavaScript IV - "this" keyword'));
console.log(projectManager1.standup("#pm-group-chat"));
console.log(projectManager1.debugsCode(student1, "Prototypal inheritance"));

// Stretch
console.log(instructor1.correctGrades(student1));
console.log(projectManager1.correctGrades(student1));
console.log(student1.graduate());
console.log(instructor1.correctGrades(student1));
console.log(projectManager1.correctGrades(student1));
console.log(student1.graduate());
