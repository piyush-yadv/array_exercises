const students = [
  { name: "Anu", marks: 80 },
  { name: "Rahul", marks: 65 },
  { name: "Meera", marks: 91 },
  { name: "Vikram", marks: 72 },
];


function studentMoreThan70(array) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i].marks >= 70) {
      newArray.push(array[i].name);
    }
  }

  return newArray;
}

console.log(studentMoreThan70(students));