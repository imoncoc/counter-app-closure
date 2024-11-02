const sumElement = document.querySelector(".sum");
const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");

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
    reset: function () {
      sum = 0;
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
resetButton.addEventListener("click", () => {
  const newSum = calculator.reset();
  sumElement.textContent = newSum;
});
