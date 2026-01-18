const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const ansDiv = document.createElement("div");
ansDiv.id = "ans";
document.body.appendChild(ansDiv);

const getSum = () => {
  let prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach((elem) => {
    sum += Number(elem.innerText);
  });

  ansDiv.innerText = sum;
};

getSumBtn.addEventListener("click", getSum);
