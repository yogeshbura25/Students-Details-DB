const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const path = require("path");
const { request } = require("http");

const dbpath = path.join(__dirname, "student.db");
let db = null;

const initializationDBandServer = async () => {
    try {
    db = await open ({
        filename:dbpath,
        driver:sqlite3.Database,
    });
    app.listen(3000);
} catch (e) {
    console.log(`DB error : ${e.message}`);
    process.exit(1);
}
};

initializationDBandServer();

//Get Student Details
app.get("/studentDetails/", async (request, response) => {
    const getDetailsQuery = `
    SELECT
    *
    FROM
    student_db;`;
    const selectQuery = await db.all(getDetailsQuery);
    response.send(selectQuery);
});

//Get Student Details through id
app.get("/studentDetails/:studentID/", async (request, response) => {
    const { studentID } = request.params;
    const getStudentDetails = `
    SELECT 
    *
    FROM
    student_db
    WHERE 
    id = ${studentID};`;
    const selectIDQuery = await db.all(getStudentDetails);
    response.send(selectIDQuery); 
});

//Get Student Details through student_name
app.get("/studentDetails/name/:name", async (request, response) => {
    const { name } = request.params;
    const getNameQuery = `
    SELECT
    *
    FROM
    student_db
    WHERE 
    student_name = "${name}";`;
    const selectNameQuery = await db.all(getNameQuery);
    response.send(selectNameQuery);
});


//Get student Details through gender
app.get("/studentDetails/gender/:gender", async (request, response) => {
    const { gender } = request.params;
    const getGenderQuery = `
    SELECT
    *
    FROM
    student_db
    WHERE 
    gender = "${gender}";`;
    const selectGenderQuery = await db.all(getGenderQuery);
    response.send(selectGenderQuery);
});

//Get student Details through Age 
app.get("/studentDetails/age/:age", async (request, response) => {
    const { age } = request.params;
    const getAgeQuery = `
    SELECT
    *
    FROM
    student_db
    WHERE 
    age = ${age};`;
    const selectAgeQuery = await db.all(getAgeQuery);
    response.send(selectAgeQuery);
});

//Get student Details through branch
app.get("/studentDetails/branch/:branch", async (request, response) => {
    const { branch } = request.params;
    const getBranchQuery = `
    SELECT
    *
    FROM
    student_db
    WHERE 
    branch = "${branch}";`;
    const selectBranchQuery = await db.all(getBranchQuery);
    response.send(selectBranchQuery);
});

//Get student Details through rank
app.get("/studentDetails/rank/:rank", async (request, response) => {
    const { rank } = request.params;
    const getRankQuery = `
    SELECT
    *
    FROM
    student_db
    WHERE 
    rank = ${rank};`;
    const selectRankQuery = await db.all(getRankQuery);
    response.send(selectRankQuery);
});

//Get student Details through phonenumber
app.get("/studentDetails/phoneNumber/:phoneNumber", async (request, response) => {
    const { phoneNumber } = request.params;
    const getRankQuery = `
    SELECT
    *
    FROM
    student_db
    WHERE 
    phone_number = ${phoneNumber};`;
    const selectRankQuery = await db.all(getRankQuery);
    response.send(selectRankQuery);
});

//Post New Student Details In Student_db
app.post("/NewStudentDetails/", async (request, response) => {
    const { ID, StudentName, Gender, Age, Branch, Rank, PhoneNumber } = request.body;
    const AddStudentDetails = `
    INSERT INTO
    student_db (id, student_name, gender, age, branch, rank, phone_number)
    VALUES (
        ${ID},
        "${StudentName}",
        "${Gender}",
        ${Age},
        "${Branch}",
        ${Rank},
        ${PhoneNumber}
    );`;
    await db.run(AddStudentDetails);
    response.send("Successfully Added New Students");
});

//Update Student Name
app.put("/UpdateStudentDetails/:studentID/", async (request, response) => {
    const { studentID } = request.params;
    const { StudentName } = request.body;
    const updateStudentQuery = `
    UPDATE
    student_db
    SET
    student_name = "${StudentName}",
    WHERE 
    id = ${studentID};`;
    await db.run(updateStudentQuery);
    response.send("Student Upadted Sucessfully");
});

//update student gender
app.put("/UpdateStudentDetails/gender/:gender/", async (request, response) => {
    const { studentID } = request.params;
    const { gender } = request.body;
    const updateStudentQuery = `
    UPDATE
    student_db
    SET
    gender = "${gender}",
    WHERE 
    id = ${studentID};`;
    await db.run(updateStudentQuery);
    response.send("Student Upadted Sucessfully");
});

//update student age
app.put("/UpdateStudentDetails/age/:age/", async (request, response) => {
    const { studentID } = request.params;
    const { age } = request.body;
    const updateStudentQuery = `
    UPDATE
    student_db
    SET
    age = ${age},
    WHERE 
    id = ${studentID};`;
    await db.run(updateStudentQuery);
    response.send("Student Upadted Sucessfully");
});

//update student branch
app.put("/UpdateStudentDetails/branch/:branch/", async (request, response) => {
    const { studentID } = request.params;
    const { branch } = request.body;
    const updateStudentQuery = `
    UPDATE
    student_db
    SET
    branch = "${branch}",
    WHERE 
    id = ${studentID};`;
    await db.run(updateStudentQuery);
    response.send("Student Upadted Sucessfully");
});

//update student rank
app.put("/UpdateStudentDetails/rank/:rank/", async (request, response) => {
    const { studentID } = request.params;
    const { rank } = request.body;
    const updateStudentQuery = `
    UPDATE
    student_db
    SET
    rank = ${rank},
    WHERE 
    id = ${studentID};`;
    await db.run(updateStudentQuery);
    response.send("Student Upadted Sucessfully");
});

//update student phone_number
app.put("/UpdateStudentDetails/phoneNumber/:phoneNumber/", async (request, response) => {
    const { studentID } = request.params;
    const { PhoneNumber } = request.body;
    const updateStudentQuery = `
    UPDATE
    student_db
    SET
    phone_number = ${PhoneNumber},
    WHERE 
    id = ${studentID};`;
    await db.run(updateStudentQuery);
    response.send("Student Upadted Sucessfully");
});

//Deleting Student Based on Details
app.delete("/DeleteStudentDetails/:studentID", async (request, response) => {
    const { studentID } = request.params;
    const deleteStudentDetails = `
    DELETE
    FROM
    student_db
    WHERE
    id = ${studentID};`;
    await db.run(deleteStudentDetails);
    response.send("Student Details Successfully Deteled");
});

//Deleting Student Based on student_name
app.delete("/DeleteStudentDetails/name/:name/", async (request, response) => {
    const { name } = request.params;
    const deleteStudentDetails = `
    DELETE
    FROM
    student_db
    WHERE
    student_name= "${name}";`;
    await db.run(deleteStudentDetails);
    response.send("Student Details Successfully Deteled");
});

//Deleting Student Details Based on gender
app.delete("/DeleteStudentDetails/gender/:gender/", async (request, response) => {
    const { gender } = request.params;
    const deleteStudentDetails = `
    DELETE
    FROM
    student_db
    WHERE
    gender = "${gender}";`;
    await db.run(deleteStudentDetails);
    response.send("Student Details Successfully Deteled");
});

//Deleting student Details Based on age
app.delete("/DeleteStudentDetails/age/:age/", async (request, response) => {
    const { age } = request.params;
    const deleteStudentDetails = `
    DELETE
    FROM
    student_db
    WHERE
    age = ${age};`;
    await db.run(deleteStudentDetails);
    response.send("Student Details Successfully Deteled");
});

//Deleting Student Details Based on branch
app.delete("/DeleteStudentDetails/branch/:branch/", async (request, response) => {
    const { branch } = request.params;
    const deleteStudentDetails = `
    DELETE
    FROM
    student_db
    WHERE
    branch= "${branch}";`;
    await db.run(deleteStudentDetails);
    response.send("Student Details Successfully Deteled");
});

//Deleting student Based on Ranks
app.delete("/DeleteStudentDetails/rank/:rank/", async (request, response) => {
    const { rank } = request.params;
    const deleteStudentDetails = `
    DELETE
    FROM
    student_db
    WHERE
    rank = ${rank};`;
    await db.run(deleteStudentDetails);
    response.send("Student Details Successfully Deteled");
});

