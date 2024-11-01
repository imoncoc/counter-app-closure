const sumElement = document.querySelector(".sum");
const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");

function createCalculator() {
  let sum = 0;

  return {
    add: function () {
      sum += 1;
      return sum;
    },
    subtract: function () {
      sum -= 1;
      return sum;
    },
  };
}

const calculator = createCalculator();

increaseButton.addEventListener("click", () => {
  const newSum = calculator.add();
  sumElement.textContent = newSum;
});
decreaseButton.addEventListener("click", () => {
  const newSum = calculator.subtract();
  sumElement.textContent = newSum;
});
