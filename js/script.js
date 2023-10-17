// user Name collection
const userName = prompt("Hello User, what's your name");
const lowerCaseUserName = userName.toLowerCase();
console.log(lowerCaseUserName);

// user Surname collection
const userSurname = prompt("Hello User, what's your surname");
const lowerCaseUserSurame = userSurname.toLowerCase(); 
console.log(lowerCaseUserSurame);

// user favourite color collection
const favouriteColor = prompt("Hello User, what's your favourite color?");
const lowerCaseFavouriteColor = favouriteColor.toLowerCase();
console.log(lowerCaseFavouriteColor);

// random number between 1 and 99
let randomNumber = Math.ceil(Math.random() * 98 + 1);
console.log(randomNumber);

// generate a random password
let randomPassword = `Hello User, your random password is <span class="red-text">${lowerCaseUserName}${lowerCaseUserSurame}${lowerCaseFavouriteColor}${randomNumber}</span>`;
console.log(randomPassword);


// html output
document.getElementById('generatedPassword').innerHTML = randomPassword;

