"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovement = movements => {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = ` 
       <div class="movements__row">
          <div class="movements__type 
          movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovement(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = [23, 45, 78];
// console.log(arr[0]);
// console.log(arr.at(1));

//NEW ARRAY METHODS/////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`movemont ${i + 1}: you deposited ${movement}`);
//     // console.log(` movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`movemont ${i + 1}: you withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log('_____FOREACH_____');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`movemont ${i + 1}: you deposited ${movement}`);
//     // console.log(` movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`movemont ${i + 1}: you withdraw ${Math.abs(movement)}`);
//   }
// });

// ///FOREACH WITH MAPS AND SET////////////////////////
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

//MAP METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const change = 2.3;

//OLD WAY OF DOING THINGS

// const move = movements.map(function (USD) {
//   return USD * change;
//USING THE ARROW FUNCTION METHOD
const move = movements.map(USD => USD * change);
console.log(movements);
console.log(move);

const moved = movements.map(
  (USD, i) =>
    //TERNARY OPERATOR

    `movemont ${i + 1}: you${movements > 0 ? "deposited" : "withdraw"} ${USD}`
  // IF ELSE METHPOD

  // if (movements > 0) {
  //   return `movemont ${i + 1}: you deposited ${USD}`;
  // } else {
  //   return `movemont ${i + 1}: you withdraw ${Math.abs(USD)}`;
  // }
);
console.log(moved);
