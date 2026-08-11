function createStudent() {
    return new Promise((resolve, reject) => {
        const student = {
            name: "Tanishq"
        };

        console.log("Task 1: Student Created");

        resolve(student);
    });
}

function addMarks(student) {
    return new Promise((resolve, reject) => {

        student.marks = 85;

        console.log("Task 2: Marks Added");

        resolve(student);
    });
}

function calculateGrade(student) {
    return new Promise((resolve, reject) => {

        if (student.marks >= 80) {
            student.grade = "A";
        } else {
            student.grade = "B";
        }

        console.log("Task 3: Grade Calculated");

        resolve(student);
    });
}

createStudent()
    .then(addMarks)
    .then(calculateGrade)
    .then((student) => {
        console.log("\nFinal Student Details:");
        console.log(student);
    })
    .catch((error) => {
        console.log(error);
    });
