const getAllURL = "http://localhost:8080/managing/student/all";

showAllStudents(getAllURL).catch(reason => alert(reason));

const allStudents = document.querySelector("#AllStudents");


async function showAllStudents(url) {
  const students = await fetchAllStudents(url);
  students.forEach(student => createStudentTemplate(student, allStudents));
}

async function fetchAllStudents(url) {
  return (await fetch(url)).json();
}
