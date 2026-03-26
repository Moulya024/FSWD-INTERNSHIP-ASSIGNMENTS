// Array of student objects
let students = [
    {
        name: "Alice",
        marks: [80, 75, 90]
    },
    {
        name: "Bob",
        marks: [60, 70, 65]
    },
    {
        name: "Charlie",
        marks: [85, 95, 90]
    }
];

// Function to calculate average
function calculateAverage(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return total / marks.length;
}

// Display student averages
students.forEach(function(student) {

    let avg = calculateAverage(student.marks);

    console.log("Student:", student.name);
    console.log("Average Marks:", avg);
    console.log("-------------------");

});
