const formAddStudent = document.querySelector("#addStudent");
const fName = document.querySelector("#firstname");
const mName = document.querySelector("#middlename");
const lName = document.querySelector("#lastname");
const birth = document.querySelector("#yearOfBirth");

const addStudentURL = "http://localhost:8080/managing/student/add";


formAddStudent.addEventListener("submit", addStudent);

let body;

async function addStudent(event) {
  event.preventDefault();

  await fetch(addStudentURL, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify( {
      firstName: fName.value,
      middleName: mName.value,
      lastName: lName.value,
      yearOfBirth: birth.value
    })
  }).then(response => response.json().catch(reason => alert(reason)));
}
