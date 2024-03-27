
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

    async function studentDetails(url, value) {
        try {
<<<<<<< HEAD
            const response = await fetch(`http://localhost:3000/studentDetails/${url}/${value}/`, {
                method:'GET'
=======
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
   
    
    async function fetchData(url, errorMessage) {
        try {
            const response = await fetch(url,{
                method: 'DELETE'
>>>>>>> 9df0a10f32d2d71dd2b3683048a49126a3c06335
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            alert("No, Student Details Found");
        }
    }

    async function studentID() {
        const student_ID = document.getElementById("studentID").value;
        await studentDetails("ID", student_ID);
    }

    async function studentName() {
        const student_name = document.getElementById("name").value;
        await studentDetails ("name", student_name);
    }

    async function studentGender() {
        const student_gender = document.getElementById("gender").value;
        await studentDetails("gender", student_gender);
    }

    async function studentAge() {
        const student_age = document.getElementById("age").value;
        await studentDetails("age", student_age);
    }

    async function studentBranch() {
        const student_branch = document.getElementById("branch").value;
        await studentDetails("branch", student_branch);
    }

    async function studentRank() {
        const student_rank = document.getElementById("rank").value;
        await studentDetails("rank", student_rank);
    }
   

    async function deleteStudentDetails(endpoint, value) {
        try {
            const response = await fetch(`http://localhost:3000/DeleteStudentDetails/${url}/${value}/`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete student details');
            }
            const responseData = await response.text();
            alert(responseData); 
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('No, Student Details Found');
        }
    }


    async function deleteStudentID() {
        const studentID = document.getElementById('deleteID').value;
        await deleteStudentDetails("studentID", studentID);
    }
    
    async function deleteName() {
        const name = document.getElementById('deleteName').value;
<<<<<<< HEAD
        await deleteStudentDetails("name", name);
=======
        await fetch(`http://localhost:3000/DeleteStudentDetails/name/${name}/`)
>>>>>>> 9df0a10f32d2d71dd2b3683048a49126a3c06335
    }
    
    async function deleteGender() {
        const gender = document.getElementById('deleteGender').value;
<<<<<<< HEAD
        await deleteStudentDetails("gender", gender);
=======
        await fetch(`http://localhost:3000/DeleteStudentDetails/gender/${gender}/`)
>>>>>>> 9df0a10f32d2d71dd2b3683048a49126a3c06335
    }
    
    async function deleteAge() {
        const age = document.getElementById('deleteAge').value;
<<<<<<< HEAD
        await deleteStudentDetails("age", age);
=======
        await fetch(`http://localhost:3000/DeleteStudentDetails/age/${age}/`)
>>>>>>> 9df0a10f32d2d71dd2b3683048a49126a3c06335
    }
    
    async function deleteBranch() {
        const branch = document.getElementById('deleteBranch').value;
<<<<<<< HEAD
        await deleteStudentDetails("branch", branch);
=======
        await fetch(`http://localhost:3000/DeleteStudentDetails/branch/${branch}/`)
>>>>>>> 9df0a10f32d2d71dd2b3683048a49126a3c06335
    }
    
    async function deleteRank() {
        const rank = document.getElementById('deleteRank').value;
<<<<<<< HEAD
        await deleteStudentDetails("rank", rank);
    }
    

   
=======
        await fetch(`http://localhost:3000/DeleteStudentDetails/rank/${rank}/`)
    } 
>>>>>>> 9df0a10f32d2d71dd2b3683048a49126a3c06335
