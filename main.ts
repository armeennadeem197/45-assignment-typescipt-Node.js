//Exersices 2
//Q1.Personal Message: Store a person’s name in a variable, 
//and print a message to that person.
// Your message should be simple, such as, 
//“Hello Eric, would you like to learn some Python today?”

let personName : string = "Armeen"
console.log(`Hello${personName},would you like to learn some Python today?”`)

//Exersices 3
//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.

let personNames : string = "Armeen"
console.log("lower casee:", personNames.toLowerCase())
console.log("Upercase", personNames.toUpperCase())
console.log("Titlecase",personNames.replace(/\b\w/g, c=>  c.toUpperCase()))

//Exersices 4
//Famous Quote: Find a quote from a famous person you admire. 
//Print the quote and the name of its author.
// Your output should look something like the following, including the quotation marks:

//Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quotes : string = "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man. Epect the best, prepare for the worst."
let author : string = "Muhammad Ali Jinnah"
console.log(`${author} once said, "${quotes}"`)

//Exersices 5
//Famous Quote 2: Repeat Exercise 4,
// but this time store the famous person’s name in a variable called famous_person.
// Then compose your message and store it in a new variable called message. Print your message.
var famous = "Muhammad Ali Jinnah";
var quote = "Think a hundred times before you take a decision, but once that decision is taken, stand by it as one man. Epect the best, prepare for the worst.";
var message = "".concat(famous, " once said, \"").concat(quote, "\"");
console.log(message);

//Exersices 6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let whiteSpace = "\n\t Armeen \t\n"
 console.log(whiteSpace)
 let withoutwhiteSpace = whiteSpace.trim()
 console.log(withoutwhiteSpace);

 //Exersices 7
 //Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
  //Be sure to enclose your operations in print statements to see the results.
//You should create four lines that look like this:
//console.log(5 + 3)

console.log(5 + 3)
console.log(10 - 2)
console.log(4 * 2)
console.log(16 % 2);

//Exercise 8 & 9
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

let favNumb : number = 7
console.log(`My favorite number is ${favNumb}.`);

//Exersices 10
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//Author :[Armeen]
//Date :[22-may-2024]
let personNam : string = "Armeen"
//printing a message to the person.
console.log(`Hello${personName},would you like to learn some Python today?”`)
//Author :[Armeen]
//Date :[22-may-2024]
//storing my favorite number in a variable.
let favNum : number = 7
//priting my fav number in a message format.
console.log(`My favorite number is ${favNum}.`)

//Exersices 11
//Names: Store the names of a few of your friends in a array called names. 
//Print each person’s name by accessing each element in the list, one at a time.

let names : string[]=["Maryam","Hania","Areeha","Laiba","Neha","Maham"]
console.log(names[0])
console.log(names[1])
console.log(names[2])
console.log(names[3])
console.log(names[4])
console.log(names[5]);

//Exersices 12

let num : string[]=["Maryam","Hania","Areeha","Laiba","Neha","Maham"]
let messages : string ="you have invite to my party."
console.log(names[0]+ " " + message)
console.log(names[1]+ " " + message)
console.log(names[2]+ " " + message)
console.log(names[3]+ " " + message)
console.log(names[4]+ " " + message)
console.log(names[5]+ " " + message);

//Exersices 13

//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples. 
//Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transportations : string[]= ["Audi","Honda City","BMW"]
transportations.map((items)=> console.log(`I would like to own a ${items}.`))

//Exersices 14
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guest : string []=["Maryam","Neha","Laiba","Maham","Areeha"]
guest.map((items)=> console.log(`Dear ${items},"you are invited to the dinner."`))

//Exersices 15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let guestlist : string[]=["Mryam","Neha","Laiba","Areeha"]
//print the name who is not invited for dinner
let unableAttend : string[] = guestlist.splice(2,1)
console.log(`${unableAttend} not invited for dinner.`);

//push
guestlist.push("Hania")

//print a message
guestlist.forEach(guest =>{
    console.log(`Dear ${guest},you are invited to dinner`)
})
console.log(guestlist);

//Exersices 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestlists : string[]=["Maryam","Neha","Areeha","Hania"]
console.log(`Great news! we found the bigger table`)

//unshift
guestlists.unshift("Alishba")

//splice()
guestlists.splice(Math.floor(guestlist.length/2),0,"Faiz");

//push
guestlists.push("Anum");

guestlists.forEach(guest =>{
    console.log(`Dear ${guest},you all are invited a dinner`)
});

//Exersices 17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

let guestslist : string[]= ["Alishba","Maryam","Faiz","Neha","Areeha","Hania","Anum"]

//print message 
console.log("Unfortunately! the new dinner table won't arrive so we can invited only two guest")

//Remove guest from the list 
while(guestslist.length > 2){
   let removeGuest : string | undefined = guestslist.pop()
   if (removeGuest !== undefined){
    console.log(`Sorry ${removeGuest},we can't invited you.`);
   }
}
//• Print a message to each of the two people still on your list,
// letting them know they’re still invited.

guestslist.forEach(guest =>{
    console.log(`Dear ${guest},you are still invited for the dinner.`)
});

//Exersices 18
//Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit: string[] =["pairs","italy","london","china","australia"];
//printin original order 
console.log("Original order:", placesToVisit);

//• Print  array  alphabetical order.
console.log("Alphabetical order :", placesToVisit.slice().sort());

//array is still in original order
console.log("Original order:", placesToVisit);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order :", placesToVisit.slice().sort());

//• array is still in its original order by printing it again.
console.log("Original order after reverse sorting:", placesToVisit);

//• Reverse the order of your list. 
placesToVisit.reverse();
console.log("Reverse the order", placesToVisit);

////• Reverse the order of your list again.
placesToVisit.reverse();
console.log("Back to original order", placesToVisit);

//• Sort  array so it’s stored in alphabetical order. 
console.log("Sorted in alphabetical order :", placesToVisit.slice().sort());

//• Sort to change your array so it’s stored in reverse alphabetical order.
console.log("Stored in reverse alphabetical order :", placesToVisit.slice().sort().reverse());

//Exersices 19
//Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.

let Guests : string []=["Maryam","Neha","Laiba","Maham","Areeha"]

//guestlist.forEach(guest => {console.log(`Dear ${guest},"you are invited to the dinner."`)}));

let lengthGuests :number = guest.length
console.log(`We are invited total ${lengthGuests} guests.`);


//remove lasttwo names from the list
guestslist.splice(0,guestslist.length)

//print updated empty list
console.log("Updated list or guests:",guestslist);

//Exersices 20
//Think of something you could store in a array.
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
// Write a program that creates a list containing these items.

let countries : string[]= ["USA","Canada","Germany","France","Japan"]

//print list of countries

countries.forEach(country =>{
    console.log(country);
});

//Exersices 21
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

interface itCoures {
    name:string;
    location:string;
    consiteStudent:number;
}

let itCoures ={
    name : "Typescript and Javascript",
    location : "Governer House Sindh",
    cositeStudent : 50000
};
console.log(itCoures);

//Exersices 22
//Intentional Error: If you haven’t received an array index error in one of your programs yet,
// try to make one happen. Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.

let errorArray : string []= ["A","B","C","D","E"]

//producing error! by accessing inalited index of array
console.log(errorArray[6]);

//Error Removed
console.log(errorArray[5]);

//Exersices 23
//Conditional Tests: Write a series of conditional tests.
// Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:

//let car = 'subaru';

//console.log("Is car == 'subaru'? I predict True.")

//console.log(car == 'subaru')

//• Look closely at your results, and make sure you understand why each line evaluates to True or False.

//• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let five = 5
let ten = 10

//Test 1
console.log("Test 1: five is equal to 5");
console.log(five == 5);

//Test 2
console.log("Text 2 : ten is equal to 10");
console.log(ten == 10);

//Test 3
console.log("Text 3 : five is not equal to 10");
console.log(five !== 10);

//Test 4
console.log("Text 4 : ten is greater then 5");
console.log(ten > 5);

//Test 5
console.log("Text 5: 5 is less than 10");
console.log(five < 10);

//Test 6
console.log("Text 6: `10 is less than 15");
console.log(ten < 5);

//Test 7
console.log("Text 7: 5 is equal to 10");
console.log(five == ten);

//Test 8
console.log("Text 8: `10 is not equal to ten");
console.log(ten !== ten);

//Test 9
console.log("Text 9: 5 is greater than 10");
console.log(five > ten);

//Test 10
console.log("Text 10: five is not equal to 5");
console.log(five!==5);

//Exersices 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array

//equality and inequality
let myName ="Ali";
console.log(myName == "Ali");     //true    equalto
console.log(myName !== "ali");    //true     not equal to

//numberices
let myNumber = 10;
console.log(myNumber == 10);      //true

console.log(myNumber !== 10);      //false

console.log(myNumber > 5);      //true 

console.log(myNumber < 5);      //false

console.log(myNumber <= 5);      //false

console.log(myNumber >= 5);      //true 

//and && ====or || (pipe)

let num1 =10 ;
let num2 =5 ;

console.log(num1 > 9 && num2<5); //false

console.log(num1>9   || num2<5);   //true
//truestat              falsestat


let myArray =[2,3,"Ali"]
let mystring = "Armeen"
                            
console.log(Array.isArray(myArray));        //true
console.log(Array.isArray(mystring));       //false

//Exersices 25
//Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

//• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

//• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

let alien_color = "green"

if(alien_color === "green") {
   console.log("player just earned 5 points");
   
}

if(alien_color === "white") {
    console.log("Alien color is white");
    
};

//Exersices 26
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.

//first version:
// let alien_color = "green"
// if(alien_color === "green"){
//     console.log("Alien color is green,player just earned 5 points for shooting the alien."); 
// } else {
//     console.log("Alien color is not green,player earned 10 point");
// }

//second version:
let aliens_color = "red"
if(aliens_color === "green"){
    console.log("Aliens color is green,player just earned 5 points for shooting the alien."); 
} else {
    console.log("Aliens color is not green,player earned 10 point");
};

//Exersices 27
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

//• Write one version of this program that runs the if block and another that runs the else block.

//first version:
// let alien_color = "green"
// if(alien_color === "green"){
//     console.log("Alien color is green,player just earned 5 points for shooting the alien."); 
// } else {
//     console.log("Alien color is not green,player earned 10 point");
// }

//second version:
let Aliens_color = "red"
if(Aliens_color === "green"){
    console.log("Alien color is green,player just earned 5 points for shooting the alien."); 
} else {
    console.log("Alien color is not green,player earned 10 point");
};

//Exersices 28
//Stages of Life: Write an if-else chain that determines a person’s stage of life.
// Set a value for the variable age, and then:

//• If the person is less than 2 years old, print a message that the person is a baby.

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

//• If the person is age 65 or older, print a message that the person is an elder.

//creating a veriable
let age = 65 ;
//• If the person is less than 2 years old, print a message that the person is a baby.
if(age < 2){
    console.log("You are a baby");
}

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if(age >= 2 && age < 4){
    console.log("You are a toddler");
}

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if(age >= 4 && age < 13){
    console.log("You are a kid");
}

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20){
    console.log("You are teenager");
}

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if(age >= 20 && age < 65 ){
    console.log("You are an adult");
} 

//• If the person is age 65 or older, print a message that the person is an elder.
else if(age >= 65){
    console.log("You are an elder");
};

//Exersices 29
//Favorite Fruit: Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.

//• Make a array of your three favorite fruits and call it favorite_fruits.

//• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array,
// the if block should print a statement, such as You really like bananas!
 
let favorite_fruits : string[] = [`Apple`,`Orange`,`Strawberry`]

if(favorite_fruits.includes(`Apple`)){
console.log(`I really like Apple`);
};
if(favorite_fruits.includes(`Orange`)){
    console.log(`I really like Orange`)
}
if(favorite_fruits.includes(`Banana`)){
    console.log(`I really like Banana`);
}
if(favorite_fruits.includes(`Strawberry`)){
    console.log(`I really like Strawberry`)
}
if(favorite_fruits.includes(`Grapes`)){
    console.log(`I really like Grapes`)
};

//Exersices 30
//Hello Admin: Make a array of five or more usernames,
// including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. 
//Loop through the array, and print a greeting to each user:

//• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

//• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames = ["Maryam","Neha","Maham","Armeen","Admin"];

userNames.forEach(oneUser =>{
    if (oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
     }
    else {
         console.log(`Hello ${oneUser}, thank you for logging in again.`);
        
     };
});

//Exersices 31
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

//• If the list is empty, print the message We need to find some users!

//• Remove all of the usernames from your array, and make sure the correct message is printed.



//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
let userName = ["Maryam","Neha","Maham","Armeen","Admin"];
if(userName.length === 0){
    console.log(" We need to find some users!");
}
// Remove all of the usernames from your array, 
//and make sure the correct message is printed.
else{
    userNames = [];
    console.log("All userName hane been removed " + userNames.length);
    
};

//Exersices 32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

//• Loop through the new_users list to see if each new username has already been used. 
//If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.


//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users : string[] = ["Maham","Saba","Iqra","Ayesha","Admin"]
let new_users : string[] =["Armeen","Faiz","Alisba","Admin","Rahila"]

new_users.forEach((new_users) => {
    if (
        current_users.some(
            (current_users) => current_users.toLowerCase() ===new_users.toLowerCase()
       )
    ) {
        console.log(`${new_users}, will need to enter a new username.`);
    } else{
        console.log(`${new_users},is available`);
        
    }
});

//Exersices 33
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
// Most ordinal numbers end in th, except 1, 2, and 3.
//• Store the numbers 1 through 9 in a array.

//• Loop through the array.

//• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
//Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

let  myNumbers= [1,2,3,4,5,6,7,8,,9];
//For Loop
for(let i = 0;i < myNumbers.length; i++){
    //now we use conditions
if(myNumbers[i] == 1){
    console.log(`${myNumbers[i]}st`);

}else if(myNumbers[i] == 2){
    console.log(`${myNumbers[i]}nd`);  

}else if(myNumbers[i] == 3){
    console.log(`${myNumbers[i]}rd`);

}else if(myNumbers[i] ==4 ){ 
    console.log(`${myNumbers[i]}th`);
}else if (myNumbers[i] ==5 ){
    console.log(`${myNumbers[i]}th`);
}else if (myNumbers[i] ==6  ){
    console.log(`${myNumbers[i]}th`);
}else if (myNumbers[i] ==7  ){
    console.log(`${myNumbers[i]}th`);
}else if (myNumbers[i] ==8  ){
    console.log(`${myNumbers[i]}th`);
}else if (myNumbers[i] ==9  ){
    console.log(`${myNumbers[i]}th`);
}
};

//Exersices 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
//and then use a for loop to print the name of each pizza.
//• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
//The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
//such as I really love pizza!

let myPizza =["Cheeze Pizza","Pepperoni Pizza","Vegrterian Pizza"]

//print only names of pizza
for(let i=0 ; i< myPizza.length; i++){
    console.log(myPizza[i]);
}
//printing names and sentence/message
for(let i=0 ; i< myPizza.length; i++){
    console.log(`I like to eat ${myPizza[i]}`);
}

console.log(
    `\nI like to Pizzas.Pizza comes in a variety of flavors and toppings,individuals to customize it to their liking.`
);

//Exersices 35
//Animals: Think of at least three different animals that have a common characteristic. 
//Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. 
//• Add a line at the end of your program stating what these animals have in common.
// You could print a sentence such as Any of these animals would make a great pet!

let animals : string[] =["dog","Wolves","Elephants,"]
animals.forEach(animals =>{
console.log(`A ${animals} would make a great pet.`)
});
console.log(" Any of these animals would make a great pet!");


//Exersices 36
//T-Shirt: Write a function called make_shirt()
// that accepts a size and the text of a message that should be printed on the shirt.
// The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt(size:string, message:string){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
       
}
 make_shirt("medium","Code is life" );

 //Exersices 37
 //Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirts(size:string= "large",message:string ="I love TypeScript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
    
}
make_shirts();//Default Large and message
make_shirts("medium");//Default message , meduim size
make_shirts("small","Drive into Codding");//Custom message, small size

//Exersices 38
//Cities: Write a function called describe_city() that accepts the name of a city and its country. 
//The function should print a simple sentence, such as Karachi is in Pakistan.
// Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

function describe_city(nameofCity:string,country:string="country"){
    return`${nameofCity} is in ${country}`;
}

 let city1 = describe_city("Cape town","South Afica");
 let city2 = describe_city("Pairs","France");
 let city3 = describe_city("Pakistan","Hyderbad");
 let city4 =describe_city("Dubai","UAE");

console.log(city2);

//Exersices 39

//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:

//"Lahore, Pakistan"

//Call your function with at least three city-country pairs, and print the value that’s returned.

function city_country(city:string ,country:string){
    return`${city}, ${country}`
    
}

city_country("karachi","Pakistan")
let mycities = city_country("karachi","Pakistan");

console.log(city_country("Dubai","UAE"));
console.log(city_country("London","United Kingdom"));
console.log(city_country("Riyaz","Saudi Aarbia"));

//Exersices 40
//Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, 
//and it should return a Object containing these two pieces of information. 
//Use the function to make three dictionaries representing different albums. 
//Print each return value to show that Objects are storing the album information correctly. 
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
//If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
//Make at least one new function call that includes the number of tracks on an album.

function myAlbum(artistName:string,albumTitle:string){
    return{artistName,albumTitle}
}

let album1 = myAlbum("Ali","Rang-e-Mohabbat")
let album2 = myAlbum("Atif Aslam","Meri Kahani")
let album3 = myAlbum("Ali Zafar","Jhoom")

console.log(album1);
console.log(album2);
console.log(album3);


function myAlbum2(artistName:string,albumTitle:string,numberofTracks?:number){
    return{artistName ,albumTitle,numberofTracks}
}
let album4 = myAlbum2("Azim Azhar","Noor",8)
let album5 = myAlbum2 ("Nusrat Fateh Ali Khan","Sangam",7)
let album6 = myAlbum2 ("Atif Aslam","Jal Pari",12)

console.log(album4);
console.log(album5);
console.log(album6);

//Exersices 41
//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.

//Define a function to print each magician name from an array
function show_magician(magician:string[]){
    magician.forEach(name => console.log(name));
    
}
// Define an array containing magician name
let magicians_name = ["Herry Poter","Criss Angel","Derren Brown" ]


// Call the function to print each magician name
show_magician(magicians_name);

//Exersices 42
//Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding 
//the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.


//Define a function to print each magician name from an array
function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}
//function to make a magicians  great through map() it will modify array
function make_great(magician:string[]){
   return  magician.map(name =>`The Great ${name}`);
}
// Define an array of  magician names
let magician_name = ["Herry Poter","Criss Angel","Derren Brown" ]

//Call make_great function to modify magaician
let great_magician =make_great(magician_name)

//Call show_magician that show modified  list of magician
show_magician(great_magician);

//Exersices 43
//Unchanged Magicians: Start with your work from Exercise 42.
// Call the function make_great() with a copy of the array of magicians’ names. 
//Because the original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that 
//you have one array of the original names and one array with the Great added to each magician’s name.

//Define a function to print each magician name from an array
function show_magicia(magician:string[]){
    magician.forEach(name => console.log(name));
}
//function to make a magicians  great through map() it will modify array
function make_greats(magician:string[]){
   return  magician.map(name =>`The Great ${name}`);
}
// Define an array of  magician names
let magicia_name = ["Herry Poter","Criss Angel","Derren Brown" ]

//Making a copy of originnal Array Through .slice()function
let copy_magician_names = magicia_name.slice()

//Modify the copied array to include "The Great "withtheir name
let  copy_great_magician = make_great(copy_magician_names);

//show both arrays original and copied

//Original
show_magician(magicians_name);
console.log("Original Array\n");

//copied
show_magician(copy_great_magician);

//Exersices 44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
//The function should have one parameter that collects as many items as the function call provides, 
//and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.


//define a function with a rest parameter that accept items aregements represting our sandwiches
function make_Sandwiches(...items:string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItems => console.log(singleItems));
  
    console.log("\nNow Enjoy Sandwich");
    
  }
  
  //Call the function 3 times with 3 different number of arguments
  make_Sandwiches("Chicken","Chesse","Lettuce","Mayo")
  
  make_Sandwiches("Chicken","egg","onion")
  
  make_Sandwiches("Chicken","Bread","Mayo","lettuce","Egg","chesse","Butter");

  //Exersices 45
  //Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, 
//such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

 function storecarInfo(manufacturer:string, modelName:string, ...extraOption:{[key : string]:any} []):Object{
    const carInfo ={
         manufacturer,
         modelName,
         ...Object.assign({}, ...extraOption)
    }

    return carInfo;
}
let answer1 = storecarInfo(`Honda`,`Civic`,{color:`black`},{features:[`Navigation`,`Power Window`]})
let answer2 = storecarInfo(`Toyoto`,`Corolla`,{color:`blue`},[`year`,`2004`])

console.log(answer1);
console.log(answer2);
