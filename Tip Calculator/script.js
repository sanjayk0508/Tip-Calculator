let billInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billInput.value);

  const tipInputPercentage = Number(tipInput.value) / 100;

  const tipAmount = bill * tipInputPercentage;

  const total = bill + tipAmount;

  const perPersonTotal = total / numberOfPeople;

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

const increasePeople = () => {
  numberOfPeople += 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};

const decreasePeople = () => {
  if (numberOfPeople <= 1) {
    return;
  }

  numberOfPeople -= 1;

  numberOfPeopleDiv.innerText = numberOfPeople;

  calculateBill();
};
