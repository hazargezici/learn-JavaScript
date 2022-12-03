let numbers = [1, 5, 7, 15, 3, 25, 4, 14, 24, 65];
for (let i = 0; i < numbers.length; i++) {
  console.log(
    "square of the " +
      i +
      " th element of the array: " +
      numbers[i] * numbers[i]
  );
}
for (let i in numbers) {
  if (numbers[i] % 5 == 0) {
    console.log(numbers[i] + " is a multiple of 5");
  }
}
let sum = 0;
for (let number of numbers) {
  if (number % 2 == 0) {
    sum += number;
  }
}
console.log("sum of even numbers: " + sum);

let products = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20",
];
for (let product of products) {
  console.log(product.toUpperCase());
}
let j = 0;
for (let product of products) {
  if (product.includes("samsung")) {
    j++;
  }
}
console.log("products list includes samsung: " + j + " times");

let students = [
  { name: "Phyllis", surname: "Bird", points: [60, 70, 60] },
  { name: "Sophia ", surname: "Douglas", points: [90, 70, 80] },
  { name: "Veronica ", surname: "Giles", points: [10, 20, 60] },
];
for (student of students) {
  let point_sum = 0;
  let avarage = 0;
  let no = 0;
  for (point of student.points) {
    point_sum += point;
    no++;
  }
  avarage = point_sum / no;
  console.log(
    `${student.name} ${student.surname} grade point average: ${avarage} `
  );

  if (avarage >= 50) {
    console.log("successful");
  } else {
    console.log("unsuccessful");
  }
}
