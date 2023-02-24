// JavaScript Code :- By Lakshya Rathore

const countValue = document.querySelector("#counter"); //Counter ki value nikali

const increment = () => {
  let value = parseInt(countValue.innerText); //ye text string k form me milega
  value = value + 1;
  countValue.innerText = value; //value ko wapis ui me dalege
};

const decrement = () => {
  let value = parseInt(countValue.innerText); //ye text string k form me milega
  value = value - 1;
  countValue.innerText = value;
};
