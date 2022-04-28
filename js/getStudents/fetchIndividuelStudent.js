const inputSearch = document.querySelector("#inputSearch");
const formSearch = document.querySelector("#searchStudentForm");
const getAllSearch = "http://localhost:8080/managing/student/student?searchInput=";
const outerDivSearch = document.querySelector("#studentsReturned");

formSearch.addEventListener("submit", showSearched);


async function fetchSearched() {
  const search = inputSearch.value;

  return await fetch(getAllSearch + search).then(response => response.json().catch(reason => alert(reason)));
}

async function showSearched(event) {
  event.preventDefault();
  outerDivSearch.innerHTML = "";
  const students = await fetchSearched();
  students.forEach(student => createStudentTemplate(student, outerDivSearch));
}
