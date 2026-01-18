const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  let prices = document.querySelectorAll(".price");
  let sum = 0;

  prices.forEach((elem) => {
    sum += parseInt(elem.innerText);
  });

  let table = document.querySelector("table");

  let row = document.createElement("tr");
  let cell = document.createElement("td");

  cell.setAttribute("colspan", "2");
  cell.innerText = `Total Price: Rs ${sum}`;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
