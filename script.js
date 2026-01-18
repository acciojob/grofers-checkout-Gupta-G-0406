const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";
document.body.appendChild(getSumBtn);



const getSum = () => {
  let prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach((elem) => {
    sum += Number(elem.innerText);
  });
	const ansDiv = document.createElement("div");
	document.body.appendChild(ansDiv);
	ansDiv.setAttribute('id', 'ans');
	ansDiv.innerText = sum;
};

getSumBtn.addEventListener("click", getSum);
