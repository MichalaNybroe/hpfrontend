const allStudents = document.querySelector("#AllStudents");

function createStudentTemplate(student) {
  const div = document.createElement('div');
  div.className = "Student";

  const image = document.createElement('img')
  image.className = "StudentImage";
  image.src = student.image;

  const studentName = document.createElement('h3');
  studentName.className = "StudentName";
  if (student.middleName === null) {
    studentName.innerText = student.firstName + " " + student.lastName;
  } else {
    studentName.innerText = student.firstName + " " + student.middleName + " " + student.lastName;
  }
  const id = document.createElement('p');
  id.className = "StudentID";
  id.innerText = student.id;

  const yearOfBirth = document.createElement('p');
  yearOfBirth.className = "StudentYearOfBirth";
  yearOfBirth.innerText = student.yearOfBirth;

  const pet = document.createElement('p');
  pet.className = "StudentPet";
  pet.innerText = student.pet;

  const house = document.createElement('p');
  house.className = "StudentHouse";
  house.innerText = student.house;

  const schoolYear = document.createElement('p');
  schoolYear.className = "StudentSchoolYear";
  schoolYear.innerText = student.schoolYear;

  allStudents.appendChild(div);
  div.appendChild(image);
  div.appendChild(studentName);
  div.appendChild(id);
  div.appendChild(yearOfBirth);
  div.appendChild(pet);
  div.appendChild(house);
  div.appendChild(schoolYear);
}
