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

async function deleteStudent() {
    const studentID = document.getElementById('ID').value;

    try {
        const response = await fetch(`http://localhost:3000/DeleteStudentDetails/${studentID}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Failed to delete student details');
        }

        const responseData = await response.text();
        alert(responseData); 
    } catch (error) {
        console.error('Error deleting student:', error);
        alert('An error occurred while deleting student details');
    }
}
