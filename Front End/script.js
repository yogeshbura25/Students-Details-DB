
async function displayData(data) {
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

    async function fetchData(url, errorMessage) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert(errorMessage);
        }
    }

    async function studentID() {
        const student_ID = document.getElementById("studentID").value;
        await fetchData(`http://localhost:3000/studentDetails/${student_ID}/`, "No Student ID Found in list");
    }

    async function studentName() {
        const student_name = document.getElementById("name").value;
        await fetchData(`http://localhost:3000/studentDetails/name/${student_name}`, "No Student Name Found in list");
    }

    async function studentGender() {
        const student_gender = document.getElementById("gender").value;
        await fetchData(`http://localhost:3000/studentDetails/gender/${student_gender}`, "No Student Gender Found in list");
    }

    async function studentAge() {
        const student_age = document.getElementById("age").value;
        await fetchData(`http://localhost:3000/studentDetails/age/${student_age}`, "No age Student Found in list");
    }

    async function studentBranch() {
        const student_branch = document.getElementById("branch").value;
        await fetchData(`http://localhost:3000/studentDetails/branch/${student_branch}`, "No Branch Student Found in list");
    }

    async function studentRank() {
        const student_rank = document.getElementById("rank").value;
        await fetchData(`http://localhost:3000/studentDetails/rank/${student_rank}`, "No rank Student Found in list");
    }
   
    /*
    async function fetchData(url, errorMessage) {
        try {
            const response = await fetch(url,{
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert(errorMessage);
        }
    }

    async function deleteStudentID() {
        const deleteID = document.getElementById('deleteID').value;
        await fetch(`http://localhost:3000/DeleteStudentDetails/${deleteID}`)
    }

    async function deleteName() {
        const name = document.getElementById('deleteName').value;
        await fetch(`http://localhost:3000/DeleteStudentDetails/name/${name}`)
    }

    async function deleteGender() {
        const gender = document.getElementById('deleteGender').value;
        await fetch(`http://localhost:3000/DeleteStudentDetails/gender/${gender}`)
    }

    async function deleteAge() {
        const age = document.getElementById('deleteAge').value;
        await fetch(`http://localhost:3000/DeleteStudentDetails/age/${age}`)
    }

    async function deleteBranch() {
        const branch = document.getElementById('deleteBranch').value;
        await fetch(`http://localhost:3000/DeleteStudentDetails/branch/${branch}`)
    }

    async function deleteRank() {
        const rank = document.getElementById('deleteRank').value;
        await fetch(`http://localhost:3000/DeleteStudentDetails/rank/${rank}`)
    } */