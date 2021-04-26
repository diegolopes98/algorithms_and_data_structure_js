class Student {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    static enrollStudents(students) {
        return 'Enrolling'
    }
}

const student1 = new Student("Diego", "Lopes", 23)
const student2 = new Student("Lopes", "Diego", 32)
console.log(student1.fullName())
console.log(Student.enrollStudents([student1, student2]))