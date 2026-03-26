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

function calculateAverage(marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    return (total / marks.length).toFixed(2);
}

let table = document.getElementById("studentTable");

students.forEach(function(student) {

    let avg = calculateAverage(student.marks);

    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let marksCell = row.insertCell(1);
    let avgCell = row.insertCell(2);

    nameCell.innerHTML = student.name;
    marksCell.innerHTML = student.marks.join(", ");
    avgCell.innerHTML = avg;

});
