function displayData(data) {
    const dataBox = document.getElementById("getStudentDetails");
    dataBox.innerHTML = ""; 

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


async function studentID() {
    const student_ID = document.getElementById("studentID").value;
    try {
        const response = await fetch(`http://localhost:3000/studentDetails/${student_ID}/`);
        if (!response.ok) {
            throw new Error('Network response was not ok'); 
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("No Student ID Found in list")
    }
    
}

async function studentName() {
    const student_name = document.getElementById("name").value;
    try {
        const response = await fetch(`http://localhost:3000/studentDetails/name/${student_name}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("No Student Name Found in list")
    }
}

async function studentGender() {
    const student_gender = document.getElementById("gender").value;
    try {
        const response = await fetch(`http://localhost:3000/studentDetails/gender/${student_gender}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("No Student Name Found in list")
    }   
}

async function studentAge() {
    const student_age = document.getElementById("age").value;
    try {
        const response = await fetch(`http://localhost:3000/studentDetails/age/${student_age}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("No age Student Found in list")
    }
}

async function studentBranch() {
    const student_branch = document.getElementById("branch").value;
    try {
        const response = await fetch(`http://localhost:3000/studentDetails/branch/${student_branch}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("No Branch Student Found in list")
    }
}

async function studentRank() {
    const student_rank = document.getElementById("rank").value;
    try {
        const response = await fetch(`http://localhost:3000/studentDetails/rank/${student_rank}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert("No rank Student Found in list")
    }
}