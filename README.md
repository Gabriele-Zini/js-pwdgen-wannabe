## PASSWORD GENERATOR EXERCISE

<br>

### EXERCISE SOLUTION
<br>

**Data collection**

1. Ask the user for their name and set set the promtp result to lower case;

2. Ask the user for their surname and set set the promtp result to lower case;

3. Ask the user for their favorite color and set the promtp result to lower case.

``` javascript
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
```

<br>

**Program logic**

1. generate a random password with "nameSurnameFavoriteColorRandomNumber" using Math.random() method;

2. the randomNumber is between 1 and 99;

3. set up message for user.

``` javascript
// random number between 1 and 99
let randomNumber = Math.ceil(Math.random() * 99);
console.log(randomNumber);

// generate a random password
let randomPassword = `Hello User, your random password is <span class="red-text">${lowerCaseUserName}${lowerCaseUserSurame}${lowerCaseFavouriteColor}${randomNumber}</span>`;
console.log(randomPassword);
``` 
<br>

**Output**

1. print result in html 

``` javascript
// html output
document.getElementById('generatedPassword').innerHTML = randomPassword;
```




