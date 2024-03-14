function fecthData () {
    fetch('http://localhost:3000/studentDetails/')
    .then(response => {
        if (!response.ok) {
            throw new Error("Network Not Working");
        }
        return response.json();
    })
    .then(data => {
        displayData(data);
    })
    .catch(error => {
        console.error("There was problem with fecth");
    });
}

fecthData();

function displayData(data) {
    const dataBox = document.getElementById("students-list");
    data.forEach(student => {
        const studentInfo = document.createElement("div");
        studentInfo.classList.add("students-box");
        studentInfo.innerHTML = `
        <p>Student ID: ${student.id}</p>
        <p>Student Name: ${student.student_name}</p>
        <p>Gender: ${student.gender}</p>
        <p>Age: ${student.age}</p>
        <p>Branch: ${student.branch}</p>
        <p>Rank: ${student.rank}</p>
        <p>Phone Number: ${student.phone_number}</p>`;
        dataBox.appendChild(studentInfo);
    });
}