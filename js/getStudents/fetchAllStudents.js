const getAllURL = "http://localhost:8080/managing/student/all";

async function showAllStudents() {
  const students = await fetchAllStudents();
  students.forEach(student => createStudentTemplate(student));
}

async function fetchAllStudents() {
  return (await fetch(getAllURL)).json();
}

showAllStudents().catch(reason => alert(reason));
