
class Data{
    constructor(students, courses){
        this.students = students;
        this.courses = courses;
    }
const Sequelize = require('sequelize');
var sequelize = new Sequelize('database', 'user', 'password', {
 host: 'host',
 dialect: 'postgres',
 port: 5432,
 dialectOptions: {
 ssl: { rejectUnauthorized: false }
 },
 query:{ raw: true }
});

}
return new Promise(function (resolve, reject) {
    reject();
   });
    CREATE TABLE IF NOT EXISTS "student" (
        "studentNum" INTEGER AUTOINCREMENT,
        "firstname" VARCHAR(100),
        "latname" VARCHAR(100),
        "email" VARCHAR(100),
        "addresstreet" VARCHAR(100),
        "addresstreet" VARCHAR(100),
        "address" VARCHAR(100),
        "TA" BOOLEAN,
        "status" string
	     PRIMARY KEY ("studentNum")
    );
    CREATE TABLE IF NOT EXISTS "course"(
        "courseid" INTEGER AUTOINCREMENT,
        "coursecode" VARCHAR(100)
        PRIMARY KEY("courseid"),
        
    );

let dataCollection = null;

module.exports.initialize = function () {
    async function poolDemo() {
        const pool = new sequelize(credentials);
        const now = await pool.query("SELECT NOW()");
        await pool.end();
      
        return now;
      }
      
    return new Promise(function (resolve, reject) {
        reject();
       });
}

module.exports.getAllStudents = function(){
    const text = `SELECT * FROM student`;
    const values = [];
    return sequelize.query(text);
  

    return new Promise(function (resolve, reject) {
        reject();
       });
}
module.exports.getCourses = function(){
    {
        const text = `SELECT * FROM courses`;
        const values = [couseid];
        return sequelize.query(text);
      
    return new Promise(function (resolve, reject) {
        reject();
       });
};

module.exports.getStudentByNum = function (num) {
        const text = `SELECT * FROM student WHERE studentNum = ?`;
        const values = [studentNum];
        return sequelize.query(text, values);
      
    return new Promise(function (resolve, reject) {
        reject();
       });
};

module.exports.getStudentsByCourse = function (course) {
        const text = `SELECT * FROM student WHERE courseid = ?`;
        const values = [studentData];
        return sequelize.query(text, values);
      
    return new Promise(function (resolve, reject) {
        reject();
       });
};

module.exports.getCourseById = function (id) {
    
        const text = `SELECT * FROM course WHERE id = ?`;
        const values = [coursecode];
        return sequelize.query(text, values);
      
    return new Promise(function (resolve, reject) {
        reject();
       });
};

module.exports.addStudent = function (studentData) {
    const text = `
    INSERT INTO people (firstname,lastname,email,addresstreet,addresscity,address,TA,status)
    VALUES (? ,? ,? ,? ,? ,? ,? ,?)
    RETURNING id
  `;
  const values = [person.fullname, person.gender, person.phone, person.age];
  return sequelize.query(text, values);
    return new Promise(function (resolve, reject) {
        reject();
       });

};

module.exports.updateStudent = function (studentData) {
    const text = `UPDATE people SET firstname = $2 WHERE id = ?`;
    const values = [personId, fullname];
    return sequelize.query(text, values);
    return new Promise(function (resolve, reject) {
        reject();
       });
};
module.exports.addcourse = function (studentData) {
    const text = `insert into course (courseid,coursecode)values(? ?)`;
    const values = [personId, fullname];
    return sequelize.query(text, values);
    return new Promise(function (resolve, reject) {
        reject();
       });
};
module.exports.course = function (studentData) {
    const text = `UPDATE course SET coursecode = ? WHERE courseid = ?`;
    const values = [personId, fullname];
    return sequelize.query(text, values);
    return new Promise(function (resolve, reject) {
        reject();
       });
};
module.exports.delete = function (studentData) {
    const text = `delete from course coursecode where course = ?`;
    //const values = [personId, fullname];
    return sequelize.query(text, values);
    return new Promise(function (resolve, reject) {
        reject();
       });
};

