const inputHouse = document.querySelector("#houseInput");
const form = document.querySelector("#houseForm");
const getAllByHouseURL = "http://localhost:8080/managing/student/all/house?name=";
const getAllByHouse = document.querySelector("#StudentsByHouse");

form.addEventListener("submit", showAllStudentsByHouse);


async function fetchAllByHouse() {
  const house = inputHouse.value;

  return await fetch(getAllByHouseURL + house).then(response => response.json().catch(reason => alert(reason)));
}

async function showAllStudentsByHouse(event) {
  event.preventDefault();
  getAllByHouse.innerHTML = "";
  const students = await fetchAllByHouse(getAllByHouseURL);
  students.forEach(student => createStudentTemplate(student, getAllByHouse));
}
