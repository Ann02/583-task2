let side1 = prompt("Enter side 1");
let side2 = prompt("Enter side 2");
let side3 = prompt("Enter side 3");

let sideA = Number(side1);
let sideB = Number(side2);
let sideC = Number(side3);

if (sideA < 0 || sideB < 0 || sideC < 0) {
  console.log("Incorrect data");
} else {
  let halfPerimeter = (sideA + sideB + sideC) / 2;
  let square = Math.sqrt(
    halfPerimeter *
      (halfPerimeter - sideA) *
      (halfPerimeter - sideB) *
      (halfPerimeter - sideC)
  );
  console.log("The square is:" + square.toFixed(3));

  if (
    sideA ** 2 == sideB ** 2 + sideC ** 2 ||
    sideB ** 2 == sideC ** 2 + sideA ** 2 ||
    sideC ** 2 == sideB ** 2 + sideA ** 2
  ) {
    console.log("The triangle is right");
  } else {
    console.log("The triangle is not right");
  }
}

