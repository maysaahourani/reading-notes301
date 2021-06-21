React Docs - lists and keys
What does .map() return?
It’s returned the result to the variable it has been assigned to.
Example:

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);

In the example above we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it.

If I want to loop through an array and display each value iSX, how do I do that in React?
We can build collections of elements and include them in JSX using curly braces {}.And we loop through them by using the JavaScript map() function.Which will return an html element for each time, and we assign the resulting array of elements to the variable we have declare it.
Example:

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>

<li>{number}</li>

);

Below, we loop through the numbers array using the map() function. We return a <li> element for each item. Finally, we assign the resulting array of elements to listItems.

Each list item needs a unique ____.
key wich is a special string attribute you need to include when creating lists of elements.
Example:

const numbers = [1, 2, 3, 4, 5];

const listItems = numbers.map((number) =>

<li key={number.toString()}>

{number}

</li>

);

What is the purpose of a key?
Keys help React identify which items have changed, are added, or are removed, and it should be given to the elements inside the array to give the elements a stable identity.
===================================================

The Spread Operator
What is the spread operator?
spread syntax refers to the use of an ellipsis of three dots (…) to expand an iterable object into the list of arguments.
When …arr is used in the function call, it expands an iterable object arr into the list of arguments.

List 4 things that the spread operator can do.
Copying an array
Using Math functions
Using an array as arguments
Adding to state in React
Give an example of using the spread operator to combine two arrays.
[...["1","2","3"]] //Array1
[..."hi","hello","haha"] //Array2
const hello = {hello: "1","2","3"}
const world = {world: "hi","hello","haha"}
const helloWorld = {...hello,...world}
console.log(helloWorld)
//Result
Object { hello: "1","2","3", world: "hi","hello","haha"}
Give an example of using the spread operator to add a new item to an array.
const fruits = ['apple','orange','banana','watermelon']
const moreFruits = [...fruits];
console.log(moreFruits)
//Result
Array(5) ['apple','orange','banana','watermelon']
fruits[0] = 'peach'
console.log(...[...fruits,'...',...moreFruits]) //Result ['peach','apple','orange','banana','watermelon'] ... ['apple','orange','banana','watermelon']
Give an example of using the spread operator to combine two objects into one.
const objectOne = {hello: "hello"}
const objectTwo = {world: "world"}
const objectThree = {...objectOne, ...objectTwo, laugh: "Hahaha"}
console.log(objectThree)
//Result
Object { hello: "hello", world: "world", laugh: "Hahaha" }
const objectFour = {...objectOne, ...objectTwo, laugh: () =>{console.log("Hahaha".repeat(5))}}
objectFour.laugh()
//Result
HahahaHahahaHahahaHahahaHahaha
=================================================

## How to Pass Functions Between Components

### In the video, what is the first step that the developer does to pass functions between components?

He loop through the array that need to be modified by using the map method with the access to that array with this.state.people (the name of the array),Then he return the created object that will access to each object inside the array so it will be modified.
In your own words, what does the increment function do?.
It will loop inside the objectof the main array and find a matching with the data that has been passed to the function, then it will increament the count inside the object that has been passed.Then it returned to the new variable that been declared, so after that it update the state of the object in the main array.
How can you pass a method from a parent component into a child component?
In the child component at it’s own function we pass it with this.props with the name of the function we’ve create it to change the state in the parent component as calling it with the data that we need to change.
As in the video this.props.increament(this.props.name);

and in the parent component we pass it as any other props by name and the value that refrence to the funtion we created to change the state of the objects.

As in the video increament={this.increament};

How does the child component invoke a method that was passed to it from a parent component?
When the action that we need to been taken from the user is done,like in the vidoe click on the button, the method we called that we added to the child componant function which will be sended to the parent componant and make the state changed.
References: