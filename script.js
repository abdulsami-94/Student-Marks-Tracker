let students = [];

const nameInput = document.getElementById("name");
const gradeInput = document.getElementById("grade");
const rollnoInput = document.getElementById("rollno");
const ageInput = document.getElementById("age");

const englishMarks = document.getElementById("english");
const mathsMarks = document.getElementById("maths");
const dataStructureMarks = document.getElementById("dataStructure");
const datacommunicationMarks = document.getElementById("dataCommunication");
const pythonMarks = document.getElementById("python");
const javascriptMarks = document.getElementById("javascript");

let totalValue;
let averageValue;
const form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameValue = nameInput.value;
    const gradeValue = gradeInput.value;
    const rollnoValue = Number(rollnoInput.value);
    const ageValue = Number(ageInput.value);
        

    const englishValue = Number(englishMarks.value);       
    const mathsValue = Number(mathsMarks.value);  
    const dataStructureValue = Number(dataStructureMarks.value); 
    const datacommunicationValue = Number(datacommunicationMarks.value);
    const pythonValue = Number(pythonMarks.value);
    const javascriptValue = Number(javascriptMarks.value);
        

    totalValue = englishValue + mathsValue + dataStructureValue + datacommunicationValue + pythonValue + javascriptValue ;
    averageValue = totalValue/6;

        const student = {
            name: nameValue,
            grade: gradeValue,
            rollno: rollnoValue,
            age: ageValue,
            marks: [englishValue, mathsValue, dataStructureValue, datacommunicationValue, pythonValue, javascriptValue],
            total: totalValue ,
            average: averageValue
        };

        students.push(student);
        renderList();

})

function renderList() {
    const listDiv = document.getElementById("studentList");
    listDiv.innerHTML = "";

    for (const student of students) {
        const studentDiv = document.createElement("div");
        studentDiv.innerHTML = `
        <h3>${student.name}</h3>
        <p>Grade: ${student.grade}</p>
        <p>Roll No: ${student.rollno}</p>
        <p>Age: ${student.age}</p>
        <p>Marks: ${student.marks.join(", ")}</p>
        <p>Total: ${student.total}</p>
        <p>Average: ${student.average}</p>
        `;
        listDiv.appendChild(studentDiv);
    }
}

form.reset();