// //problem 1
// // your code here	
function print(word){
    console.log(word)
  }
  print('test')
  
  // //problem 2
  //// your code here	
  function sayHello(greet, name){
    console.log(greet + ' ' + name + '!')
  }
  sayHello('Hello', 'Seytech')
  
  // //problem 3
  function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  getFullName ('James', 'Anderson')
  
  // //problem 4
  function getLengthOfWord(word) {
      let output = word.split("").length;
      return output;    
  }
  getLengthOfWord('emancipation')
  
  // //problem 5
  function isGreaterThanTen(num) {
    if(num > 10){
      return true;
    } else {
      return false;
    }
  }
  isGreaterThanTen(2)
  
  // //problem 6
  // //Write a function called "getLengthOfTwoWords".
  // // Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
  // // var output = getLengthOfTwoWords('some', 'words');
  // // console.log(output); // --> 9
  function getLengthOfTwoWords(str1, str2){
    const totalLength = str1.length + str2.length;
    return totalLength;
  }
  getLengthOfTwoWords('hello', 'world')
  
  // // problem 7
  // //Write a function called "isLessThan30".
  // // Given a number, "isLessThan30" returns whether the given number is less than 30.
  // // var output = isLessThan30(9);
  // // console.log(output); // --> true
  function isLessThan30(num){
    if(num < 30){
      let num = true;
      return num;
    } else {
      return false
    }
  }
  isLessThan30(10)
  
  
  // // problem 8
  // //Write a function called "equalsTen".
  // // Given a number, "equalsTen" returns whether or not the given number is 10.
  // // var output = equalsTen(9);
  // // console.log(output); // --> false
  function equalsTen(num){
    if (num === 10){
      let result = true;
      return result;
    } else {
      return false;
    }
  }
  equalsTen(10)
  
  // // problem 9
  // //Write a function called "isLessThan".
  // // Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
  // // var output = isLessThan(9, 4);
  // // console.log(output); // --> true
  function isLessThan(num1, num2){
    if (num2 < num1){
      return true;
    } else {
      return false
    }
  }
  isLessThan(10, 12)
  
  // // problem 10
  // //Write a function called "isGreaterThan".
  // // Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1.
  // // var output = isGreaterThan(11, 10);
  // // console.log(output); // --> false
  function isGreaterThan(num1, num2){
    if(num2 > num1){
      return true;
    } else {
      return false
    }
  }
  isGreaterThan(10, 11)
  
  
  // // problem 11
  // //Write a function called "isEqualTo".
  // // Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
  // // var output = isEqualTo(11, 10);
  // // console.log(output); // --> false
  function isEqualTo(num1, num2){
    if(num2 === num1){
      return true;
    } else {
      return false
    }
  }
  isEqualTo(10, 10)
  
  
  // // Set num to 50. Set name to "seytech". Now swap num into name.
  let num = 50;
  let name = 'Seytech';
  let temp = num
  num = name;
  console.log(num, 'num')
  name = temp;
  console.log(name, 'name')
  
  
  // // problem 13
  // //Write a function called "isOldEnoughToDrink".
  // // Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
  // // Notes:* The legal drinking age in the United States is 21.
  // // var output = isOldEnoughToDrink(22);
  // // console.log(output); // --> true
  function isOldEnoughToDrink(age){
    if(age >= 21){
      return true;
    } else {
      return false;
    }
  }
  isOldEnoughToDrink(22)
  
  
  // // problem 14
  // //Write a function called "isOldEnoughToDrive".
  // // Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
  // // Notes:* The legal driving age in the United States is 16.
  // // var output = isOldEnoughToDrive(22);
  // // console.log(output); // --> true
  function isOldEnoughToDrive(age){
    if(age >= 16){
      return true;
    } else {
      return false;
    }
  }
  isOldEnoughToDrive(18)
  
  
  // // problem 15
  // // Write a function called "isOldEnoughToVote".
  // // Given a number, in this case an age, 'isOldEnoughToVote' returns whether a person of this given age is old enough to legally vote in the United States.
  // // Notes:* The legal voting age in the United States is 18.
  // // var output = isOldEnoughToVote(22);
  // // console.log(output); // --> true
  function isOldEnoughToVote(age){
    if(age >= 18){
      return true;
    } else {
      return false;
    }
  }
  isOldEnoughToVote(22)
  
  
  // // problem 16
  // //isOldEnoughToDrinkAndDrive
  // // Write a function called "isOldEnoughToDrinkAndDrive".
  // // Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
  // // Notes:* The legal drinking age in the United States is 21.* It is always illegal to drink and drive in the United States.
  // // var output = isOldEnoughToDrinkAndDrive(22);
  // // console.log(output); // --> false
  function isOldEnoughToDrinkAndDrive(age){
    return false
  }
  isOldEnoughToDrinkAndDrive()
  
  
  // // Write a function called "isSameLength".
  // // Given two words, "isSameLength" returns whether the given words have the same length.
  // // var output = isSameLength('words', 'super');
  // // console.log(output); // --> true
  function isSameLength(word1, word2){
    if(word1.length === word2.length){
      return true;
    } else {
      return false
    }
  }
  isSameLength ('words', 'super')
  
  
  // // Write a function called "areBothOdd".
  // // Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.
  // // var output = areBothOdd(1, 3);
  // // console.log(output); // --> true
  function areBothOdd(num1, num2){
    if(num1 % 2 === 1 && num2 % 2 === 1){
      return true;
    } else {
      return false;
    }
  }
  areBothOdd(1, 3)
  
  // //
  function areBothEven(num1, num2){
    if(num1 % 2 === 0 || num2 % 2 === 0){
      return true;
    } else {
      return false;
    }
  }
  areBothEven(1, 4)
  
  
  // // Write a function called "isOddLength".
  // // Given a word, "isOddLength" returns whether the length of the given word is odd.
  // // var output = isOddLength('special');
  // // console.log(output); // --> true
  function isOddLength(word){
    if(word.length % 2 === 1){
      return true;
    } else {
      return false;
    }
  }
  isOddLength('special')
  
  
  
  // // Write a function called "isEvenLength".
  // // Given a word, "isEvenLength" returns whether the length of the word is even.
  // // var output = isEvenLength('wow');
  // // console.log(output); // --> false
  function isEvenLength(word){
    if(word.length % 2 === 0){
      return true;
    } else {
      return false;
    }
  }
  isEvenLength('wow')
  
  
  // // Write a function called "isEvenAndGreaterThanTen".
  // // Given a number, "isEvenAndGreaterThanTen" returns whether it is both even and greater than 10.
  // // var output = isEvenAndGreaterThanTen(13);
  // // console.log(output); // --> false
  function isEvenAndGreaterThanTen(num){
    if(num % 2 ===0 && num > 10){
      return true;
    } else {
      return false;
    }
  }
  isEvenAndGreaterThanTen(13)
  
  // Problem 14
  // //Write a function called "isOldEnoughToDrive".
  // Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the United States.
  // Notes:* The legal driving age in the United States is 16.
  // var output = isOldEnoughToDrive(22);
  // console.log(output); // --> true
  function isOldEnoughToDrive(age){
    if(age >= 16){
      return true;
    } else {
      return false;
    }
  }
  isOldEnoughToDrive(18)
  
  
  
  // //
  function weather (temp){
    if(temp < 50){
      console.log('Put on a coat')
    } else if (temp < 80) {
       console.log('It is warm and nice outside')
    } else {
      console.log('it is extremely hot, stay home')
    }
  }
  weather (40)
  
  // //
  function parkingPass(pass){
    if(pass === 'red'){
      return 'you can park in VIP zone'
    } else if (pass === 'green'){
      return 'you can park in private parking for free'
    } else {
      return 'you need to pay for parking'
    }
  }
  parkingPass('yellow')
  
  // //problem 3
  function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
  }
  fullName('Alina', 'Sadykova')
  
  
  // // Problem 17 
  // Printing Integers with for loop.
  // // Print integers from 1000 to 3450.
  // console.log('')
  // console.log('')
  let num = 1000;
  while(num < 3450){
    num++;
    console.log(num)
  }
  
  // // problem 18
  // //print-30-to-750-notest
  // // Print numbers from -50 to 350.
  // // Hint:* You can use for or while loop.
  for(let i = -50; i < 351; i++){
    console.log(i)
  }
  
  // // problem 19
  // //Multiples of Three — but Not All
  // // Using FOR, print multiples of 3 from -400 to 0. Skip -3 and -6.
  for (let i=-400; i<0;i++){
      if (i === -3 || i === -6){
        console.log(i + " skipped...")
      } else if (i % 3 === 0){
        console.log(i);
      }
  }
  
  // //problem 20
  // //Print all integer multiples of 5. from 512 to 4096, Afterward, also log how many there were.
  function printCount() {
    // your code here
    let count = 0;
    for (let i = 512; i<=4096; i++){
      if (i%5===0){
        console.log(i);
        count=count+1;
      }
    }
    console.log(count + " countssss");
  }
  printCount();
  
  // //problem 21
  // //Write a function called "checkAge".
  // // Given a person's name and age, "checkAge" returns one of two messages:
  // // "Go home, {insert_name_here}!", if they are younger than 21."Welcome, {insert_name_here}!", if they are 21 or older.
  // // Naturally, replace "{insert_name_here}" with the given name. :)
  // // var output = checkAge('Adrian', 22);
  // // console.log(output); // --> 'Welcome, Adrian!
  function checkAge(name, age) {
    if(age >= 21){
        return "Welcome, "+ name + "!"
    } else {
        return "Go home, "+ name + "!"
    }
  }
  
  // //problem 22 
  // //Write a function called "multiplesOfSix".
  // // Print multiples of 6 up to 60,000 using a WHILE.
  // // Notes:*
  // // var output = multiplesOfSix();
  // // console.log(output); // --> 
  function multiplesOfSix(){
    for(i = 0; i < 60001; i++){
      if(i%6===0){
        console.log(i);
      }
    }
  } 
  multiplesOfSix()
  
  
  // // problem 23
  // //Add odd integers from -300,000 to 300,000 and console.log the final sum. Is there a shortcut?
  let sum = 0;
  for(let i = -30; i <= 30; i++){
    if(i % 2 === 1 || i % 2 === -1){
      sum = sum + i;
      console.log(i)
    }
  }
  console.log(sum)
  
  
  // //problem 24
  // // // Log positive numbers starting at 2016. counting down by fours (exclude 0), without a FOR loop.
  // // FOR LOOP
  for(i = 2016; i > 0; i--){
    if(i%4 === 0){
      console.log(i)
    }
  }
  // // //WHILE LOOP
  function func1(num){
    let counter = num;
    while(counter >= 0){
      console.log(counter);
      counter = counter - 4;
    }
  }
  func1(20);
  
  
  // // problem 25
  // // Based on earlier "Countdown by Fours". given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum. using a FOR. For (2, 9, 3), print 9 6 3 (on successive lines)
  function func1(lowNum, highNum, mult){
    for(let i = highNum; i > lowNum; i--){
      if(i % mult === 0){
        console.log(i)
      }
    }
  }
  func1(2, 9, 3);
  
  // // problem 26
  // //Print integers from 0 to 255, and with each integer print the sum so far.
  // // And return total sum !
  // // Hints* 255 is included
  function printIntaAndSum0To255(start, end) {
    let sum = 0;
    for(i = start; i <= end; i++){
    // sum++;
    // console.log(i + '+' + '1' + '=' + sum )
    console.log(i)
    sum = sum + i;
    console.log('sum so far:', sum)
    }
  return sum
  }
  printIntaAndSum0To255(0, 255)
  
  // // problem 27
  // //Print all odd integers from 1 to 255.
  // // Hints*
  // // output -> 1, 3, 5...
  function odds1To255(){
    for(var i = 1; i <= 255; i++){
      if(i%2===1){
        console.log(i)
      }
    }
  }
  odds1To255()
  
  // // problem 28
  // //This is based on "Flexible Countdown".
  // // The parameter names are not as helpful, but the problem is essentially identical; don't be thrown off!
  // // Given 4 parameters (param1, param2, param3, param4)``
  // // Print the multiples of param1, starting at param2`` and extending to param3.
  // // One exception: if a multiple is equal to param4, then skip (don't print) it.
  // // Given (3,5,17,9) print 6, 12, 15 (which are all of the multiples of 3 between 5 and 17, and excluding the value of 9).
  // // `countdown(3,5,17,9) // print 6, 12, 15` 
  // // `// (which are all of the multiples of 3(p1) between 5(p2) and 17(p3),
  // // // and excluding the value of 9(p4))`
  function flexCountdown(param1, param2, param3, param4){
    for(let i = param2; i <= param3; i++){
      if(i % param1 === 0 && i !== param4){
        console.log(i)
      }
    }
  }
  flexCountdown(3,5,17,9)
  
  
  // problem 29: 
  //Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
  // `threesFives()`.
  function threeFives(){
    let count = 0;
    for(i=100; i<=4000000; i++){
      if((i%3===0 || i%5===0) && (i%15!==0)){
        count=count+1
      }
    }
    console.log(count)
  }
  threeFives()
  
  // // problem 30
  // //Create betterThreesFives(start, end) that allows you to enter arbitrary start and end values for your range. Think of threesFives() as betterThreesFives(100,4000000).
  // // `betterThreesFives(100,4000000)`
  function betterThreesFives(start, end){
    let total = 0;
   for(i = start; i <= end; i++){
     if((i%3===0 || i%5===0) && (i%15!==0)){
       total=total + i;
     }
   }
   console.log(total)
  }
  betterThreesFives(3, 9)
  
  // //problem 31 
  // //If 2 given numbers represent your birth month and day in either order. log "How did you know?", else log "Just another day"
  // // `yourBirthday(2,3)`
  // const birthDay = 5;
  // const birthMonth = 10;
  function guessBirthday(num1, num2){
    if(num1===birthDay && num2 === birthMonth){
      console.log("How did you know?")
    } else {
      console.log("Just another day")
    }
  }
  guessBirthday(5, 10)
  
  // // problem 32
  // // Write a function called "modulo".
  // // Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.
  // // Extra:
  // // Can you do without using the actual built-in modulo (aka "remainder") operator (%) in your implementation.
  // // var output = modulo(25, 4);
  // // console.log(output); // --> 1
  function modulo(num1, num2){
    while(num1 >= num2){
      num1=  num1 - num2;
      console.log(num1)
    }
      console.log(num1)
  }
  modulo(25, 4)
  
  
  // //problem 33 
  // //Write a function called "multiply".
  // // Given 2 numbers, "multiply" returns their product.
  // // Notes:
  // // It should not use the multiply operator (*).\
  // // var output = multiply(4, 7);
  // // console.log(output); // --> 28
  function multiply(num1, num2){
    let count = 0;
    for(i = 0; i < num2; i++){
      count = count + num1;
    }
    return count
  }
  multiply(4, 7)
  
  // //problem 34
  // // Write a function called "isEven".
  // // Given a number, "isEven" returns whether it is even.
  // // var output = isEven(11);
  // // console.log(output); // --> false
  function isEven(num){
    if(num%2===0){
      return true
    } else{
      return false
    }
  }
  isEven(11)
  
  //problem 35
  // Write a function called "isOdd".
  // Given a number, "isOdd" returns whether the given number is odd.
  // var output = isOdd(9);
  // console.log(output); // --> true
  function isOdd(num){
    if(num%2===1){
      return true
    } else{
      return false
    }
  }
  isOdd(9)
  
  // // //Problem 42
  // // Write a function called "average".
  // // Given two numbers, "average" returns their average.
  // // var output = average(4, 6);
  // // console.log(output); // --> 5
  function average(num1, num2){
    return (num1 + num2)/2
  }
  average(4,6)
  
  // //problem 43
  // // Write a function called "computeAreaOfATriangle".
  // // Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.
  // // var output = computeAreaOfATriangle(4, 6);
  // // console.log(output); // --> 12
  function computeAreaOfATriangle(base, height){
    const area = (base * height) / 2;
    return area
  }
  computeAreaOfATriangle(4,6)
  
  // //Problem 44
  // // Write a function called "cube".
  // // Given a number, "cube" returns the cube of that number.
  // // var output = cube(3);
  // // console.log(output); // --> 27
  function cube(num){
    const cube =num*num*num
    return cube
  }
  cube(3)
  
  // //problem 45
  // // Write a function called "square".
  // // Given a number, "square" should return the square of the given number.
  // // var output = square(5);
  // // console.log(output); // --> 25
  function square(num){
    const square = Math.pow(num, 2)
    return square
  }
  square(5)
  
  // //problem 46
  // // Write a function called "computeAverageLengthOfWords".
  // // Given two words, "computeAverageLengthOfWords" returns the average of their lengths.
  // // var output = computeAverageLengthOfWords('code', 'programs');
  // // console.log(output); // --> 6
  function computeAverageLengthOfWords(word1, word2){
    const concatWords = word1.concat(word2)
    const lengthOfConcatWords = concatWords.split('').length
    const average = lengthOfConcatWords/2
    return average
  }
  computeAverageLengthOfWords('code', 'programs')
  
  // //problem 47
  // // Write a function called "computeAreaOfARectangle".
  // // Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.
  // // var output = computeAreaOfARectangle(4, 8);
  // // console.log(output); // --> 32
  function computeAreaOfARectangle(length, width){
    const area = length *width;
    return area
  }
  computeAreaOfARectangle(4,8)
  
  // //Problem 48
  // // Write a function called "computePerimeterOfARectangle".
  // // Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.
  // // var output = computePerimeterOfARectangle(5, 2);
  // // console.log(output); // --> 14
  function computePerimeterOfARectangle(length, width){
    const perimeter = 2*(length+width);
    return perimeter
  }
  computePerimeterOfARectangle(5,2)
  
  // //problem 49
  // // Write a function called "computePerimeterOfATriangle".
  // // Given 3 sides describing a triangle, "computePerimeterOfATriangle" returns its perimter.
  // // var output = computePerimeterOfATriangle(6, 4, 10);
  // // console.log(output); // --> 20
  function computePerimeterOfATriangle(side1, side2, side3){
     const perimeter = side1+side2+side3;
     return perimeter
  }
  computePerimeterOfATriangle(6,4,10)
  
  // //problem 50
  // // Write a function called "computeTripledAreaOfARectangle".
  // // Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
  // // var output = computeTripledAreaOfARectangle(2, 4);
  // // console.log(output); // --> 24
  function computeTripledAreaOfARectangle(length, width){
    const tripledArea = 3 * (length*width)
    return tripledArea
  }
  computeTripledAreaOfARectangle(2,4)
  
  // //problem 52
  // // Write a function called "computeAreaOfACircle".
  // // Given the radius of a circle, "computeAreaOfACircle" returns its area.
  // // var output = computeAreaOfACircle(4);
  // // console.log(output); // --> 50.24
  function computeAreaOfACircle(radius){
    const area = ((3.14)*radius*radius)
    return area
  }
  computeAreaOfACircle(4)
  // //or
  function computeAreaOfACircle(radius) {
    const area = 3.14 * Math.pow(radius, 2);
    const result = Number(area.toFixed(2));
    return result;
  }
  computeAreaOfACircle(4)
  
  // //problem 53
  // // Write a function called "computePower"
  // // . Given a number and an exponent, "computePower" returns the given number, raised to the given exponent.
  // // var output = computePower(2, 3);
  // // console.log(output); // --> 8
  function computePower(num, exponent){
    const power = Math.pow(num, exponent);
    return power
  }
  computePower(2,3)
  
  // //problem 54
  // // Write a function called "computeSquareRoot".
  // // Given a number, "computeSquareRoot" returns its square root.
  // // var output = computeSquareRoot(9);
  // // console.log(output); // --> 3
  function computeSquareRoot(num){
   const squareRoot = Math.sqrt(num);
   return squareRoot
  }
  computeSquareRoot(9)
  
  // //problem 55
  // // Write a function called "doubleSquareRootOf".
  // // Given a number, "doubleSquareRootOf" returns double its square root.
  // // var output = doubleSquareRootOf(121);
  // // console.log(output); // --> 22
  function doubleSquareRootOf(num){
    const doubledSquareRoot = 2*(Math.sqrt(num));
    return doubledSquareRoot
  }
  doubleSquareRootOf(121)
  
  // // // //problem 56
  // // // // Write a function called "getLastElement".
  // // // // Given an array, "getLastElement" returns the last element of the given array. Notes:* If the given array has a length of 0, it should return 'undefined'.
  // // // // var output = getLastElement([1, 2, 3, 4]);
  // // // // console.log(output); // --> 4
  function getLastElement(array){
    const lastEl = array.slice(-1)
    if(array.length > 0){
    // console.log(lastEl)
    } else {
      return 'undefined'
    }
      return lastEl
  }
  getLastElement([1, 2, 3, 4])
  // // //OR
  function getLastElement(array) {
    return array[array.length-1];
  }
  var output = getLastElement([1, 2, 3, 4]);
  console.log(output); // --> 4
  
  // // //problem 57
  // // // Write a function called "addToFront".
  // // // Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.
  // // // Notes: * It should be the SAME array, not a new array.
  // // // var output = addToFront([1, 2], 3);
  // // // console.log(output); // -> [3, 1, 2]
  function addToFront(array, el){
    array.unshift(el);
    return array;
  }
  addToFront([1, 2], 3)
  
  // //problem 58
  // // Write a function called "addToBack".
  // // Given an array and an element, "addToBack" returns the given array with the given element added to the end.
  // // Note: It should be the SAME array, not a new array.
  // // var output = addToBack([1, 2], 3);
  // // console.log(output); // -> [1, 2, 3]
  function addToBack(array, element){
    array.push(element)
    return array
  }
  addToBack([1, 2], 3)
  
  // //problem 59
  // // Write a function called "addToFrontOfNew".
  // // Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.
  // // Important: It should be a NEW array instance, not the original array instance.
  // // var input = [1, 2];
  // // var output = addToFrontOfNew(input, 3);
  // // console.log(output); // --> [3, 1, 2];
  // // console.log(input); --> [1, 2]
  function addToFrontOfNew(arr, el){
    arr.unshift(el)
    return arr
  }
  addToFrontOfNew([1, 2], 3)
  
  // //problem 60
  // // Write a function called "addToBackOfNew".
  // // Given an array and an element, "addToBackOfNew" returns a clone of the given array, with the given element added to the end.
  // // Important: It should be a NEW array instance, not the original array instance.
  // // var input = [1, 2];
  // // var output = addToBackOfNew(input, 3);
  // // console.log(input); // --> [1, 2]
  // // console.log(output); // --> [1, 2, 3]
  function addToBackOfNew(array, el){
    let newArr = array;
    newArr.push(el)
    return newArr
  }
  addToBackOfNew([1, 2], 3)
  
  // //problem 61
  // // Write a function called "getElementsAfter".
  // // Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.
  // // var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
  // // console.log(output); // --> ['d', 'e']
  function getElementsAfter(array, index){
    let newArr = array.slice(index+1)
    return newArr
  
  }
  getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2)
  
  // //problem 62
  // // Write a function called "getElementsUpTo".
  // // Given an array and a index, "getElementsUpTo", returns an array with all the elements up until, but not including, the element at the given index.
  // // Notes:* In order to do this you should be familiar with the 'splice' method.
  // // var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
  // // console.log(output); // --> ['a', 'b', 'c']
  function getElementsUpTo(array, index){
    let newArr = array.splice(0, index)
    return newArr
  }
  getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3)
  
  // //problem 63
  // // Write a function called "getAllElementsButFirst".
  // // Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.
  // // var input = [1, 2, 3, 4];
  // // var output = getAllElementsButFirst(input);
  // // console.log(output); // --> [2, 3, 4]
  function getAllElementsButFirst(array){
    array.shift()
    return array
  }
  getAllElementsButFirst([1, 2, 3, 4])
  
  // //problem 64
  // // Write a function called "getAllElementsButLast".
  // // Given an array, "getAllElementsButLast" returns an array with all the elements but the last.
  // // var input = [1, 2, 3, 4];
  // // var output = getAllElementsButLast(input);
  // // console.log(output); // --> [1, 2 , 3]
  function getAllElementsButLast(array){
    array.pop()
    return array
  }
  getAllElementsButLast([1, 2, 3, 4])
  
  // //problem 65
  // // Write a function called "joinArrays".
  // // Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elements in "arr2".
  // // var output = joinArrays([1, 2], [3, 4]);
  // // console.log(output); // --> [1, 2, 3, 4]
  // // You should be familiar with the "concat" method for this problem.
  function joinArrays(arr1, arr2){
    let newArr = arr1.concat(arr2)
    return newArr
  }
  joinArrays([1, 2], [3, 4])
  
  // //problem 66
  // // Write a function called "joinThreeArrays".
  // // Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.
  // // var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
  // // console.log(output); // --> [1, 2, 3, 4, 5, 6]
  // // You should be familiar with the "concat" method for this problem.
  function joinThreeArrays(arr1, arr2, arr3){
    let newArr = arr1.concat(arr2, arr3)
    return newArr
  }
  joinThreeArrays([1, 2], [3, 4], [5, 6])
  
  // //problem 67
  // // Write a function called "removeFromFront".
  // // Given an array, "removeFromFront" returns the given array with its first element removed. Notes:* You should be familiar with the method 'shift'.
  // // var output = removeFromFront([1, 2, 3]);
  // // console.log(output); // --> [2, 3]
  function removeFromFront(array){
    array.shift()
    return array
  }
  removeFromFront([1, 2, 3])
  
  // //problem 68
  // // Write a function called "removeFromBackOfNew".
  // // Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.
  // // Notes:* You should be familiar with the 'slice' method.
  // // var arr = [1, 2, 3];
  // // var output = removeFromBackOfNew(arr);
  // // console.log(output); // --> [1, 2]
  // // console.log(arr); // --> [1, 2, 3]
  function removeFromBackOfNew(array){
    let newArr = array.slice(0, array.length-1)
    return newArr
  }
  removeFromBackOfNew([1, 2, 3])
  
  // //problem 69
  // // Write a function called "removeFromFrontOfNew".
  // // Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.
  // // Notes:* You should be familiar with the 'slice' method.
  // // var arr = [1, 2, 3];
  // // var output = removeFromFrontOfNew(arr);
  // // console.log(output); // --> [2, 3]
  // // console.log(arr); // --> [1, 2, 3]
  function removeFromFrontOfNew(array){
    let newArr = array.splice(1)
    return newArr
  }
  removeFromFrontOfNew([1, 2, 3])
  
  // //problem 70
  // // Write a function called "getAllElementsButNth".
  // // Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.
  // // var output = getAllElementsButNth(['a', 'b', 'c'], 1);
  // // console.log(output); // --> ['a', 'c']
  function getAllElementsButNth(array, index){
    array.splice(index, 1)
    return array
  }
  getAllElementsButNth(['a', 'b', 'c'], 1)
  
  // // //problem 71
  // // // Write a function called "removeElement".
  // // // Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.
  // // // Notes:
  // // // If all the elements match, it should return an empty array.
  // // // If an empty array is passed in, it should return an empty array.
  // // // var output = removeElement([1, 2, 3, 2, 1], 2);
  // // // console.log(output); // --> [1, 3, 1]
  function removeElement(array, discarder) {
    const newArr =[];
    for(let i=0; i<array.length; i++){
      if(discarder !== array[i]){
        newArr.push(array[i])
      }
    }
    return newArr;
  }
  removeElement([1, 2, 3, 2, 1], 2)
  
  //problem 72
  // Write a function called "joinArrayOfArrays".
  // Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.
  // var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
  // console.log(output); // --> [1, 4, true, false, 'x', 'y']
  // You should be familiar with the "concat" method for this problem.
  function joinArrayOfArrays(array){
    let merged = array
    for(let i=0; i < array.length; i++){
      // merged = [].concat.apply([],array)
      merged = Array.prototype.concat.apply([],array)
    }
    return merged
  }
  joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']])
  //OR
  function joinArrayOfArrays(array){
    const merged = [].concat.apply([],array)
    return merged
  }
  joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']])
  
  
  // //problem 73
  // // Write a function called "areValidCredentials".
  // // Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.
  // // var output = areValidCredentials('Ritu', 'mylongpassword')
  // // console.log(output); // --> true
  function areValidCredentials(name, password){
    if(name.length > 3 && password.length >= 8){
      return true
    } else {
      return false
    }
  }
  areValidCredentials('Ritu', 'mylongpassword')
  
  // //problem 74
  // // Write a function called "getIndexOf".
  // // Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.
  // // Notes:
  // // Strings are zero indexed, meaning the first character in a string is at position 0.
  // // When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
  // // If the character does not exist in the string, it should return -1.
  // // Do not use the native indexOf function in your implementation.
  // // var output = getIndexOf('a', 'I am a hacker');
  // // console.log(output); // --> 2
  function getIndexOf(char, string){
      return string.indexOf(char)
  }
  getIndexOf('a', 'I am a hacker')
  
  // //problem 75
  // // Write a function called "findMinLengthOfThreeWords".
  // // Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
  // // var output = findMinLengthOfThreeWords('a', 'be', 'see');
  // // console.log(output); // --> 1
  // // 75
  function findMinLengthOfThreeWords(word1, word2, word3) {
    let result = 100;
    const newArray = [word1, word2, word3];
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].length < result){
            result = newArray[i].length
        }
    }
    return result;
  }
  findMinLengthOfThreeWords('a', 'be', 'see')
  
  // //problem 76
  // // Write a function called "findMaxLengthOfThreeWords".
  // // Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.
  // // var output = findMaxLengthOfThreeWords('a', 'be', 'see');
  // // console.log(output); // --> 3
  function findMaxLengthOfThreeWords(word1, word2, word3) {
    return Math.max(word1.length, word2.length, word3.length);
  }
  findMaxLengthOfThreeWords('a', 'be', 'see')
  
  // //problem 77
  // // Iterate through a given array, printing each value.
  // // `printArrayVals([1,2,3,4]) //1,2,3,4`
  // // let printArrayVals = [1,2,3,4];
  function printArrayVals(arrs) {
    for (let arr of arrs) {
      console.log(arr)
    }
  }
  printArrayVals([1,2,3,4])
  
  // //problem 78
  // // Write a function called "keep".
  // // Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.
  // // Notes:* If no elements match, "keep" should return an empty array.
  // // var output = keep([1, 2, 3, 2, 1], 2) 
  // // console.log(output); --> [2, 2]
  function keep(array, el){
    let newArr = []
    for(let i = 0; i < array.length; i++){
      if(array[i] === el){
        newArr.push(array[i])
      } 
    } 
        return newArr
  }
  keep([1, 2, 3, 2, 1], 5)
  
  // //problem 79
  // // Write a function called "computeAverageOfNumbers".
  // // Given an array of numbers, "computeAverageOfNumbers" returns their average.
  // // Notes:* If given an empty array, it should return 0.
  // // var input = [1,2,3,4,5];
  // // var output = computeAverageOfNumbers(input);
  // // console.log(output); // --> 3
  function computeAverageOfNumbers(array){
    let count = Math.ceil(array.length/2)
    return count
  
  //   // let total = 0;
  //   // for(let i = 0; i < array.length; i++){
  //   //   total += array[i]
  //   // }
  //   //   let avg = (total/array.length)
  //   //   return avg
  // }
  computeAverageOfNumbers([1,2,3,4,5])
  
  //problem 80
  // filterOddLengthWords(myArray); 
  // Write a function called "filterOddLengthWords".
  // Given an array of string, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.
  // var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
  // console.log(output); // --> ['there', "now']
  function filterOddLengthWords(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
      if(array[i].length % 2 === 1){
        newArr.push(array[i])
      }
    }
    return newArr
  }
  filterOddLengthWords(['there', 'it', 'is', 'now'])
  
  // //problem 81
  // // Write a function called "filterEvenLengthWords".
  // // Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.
  // // var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
  // // console.log(output); // --> ['word', 'word']
  function filterEvenLengthWords(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
      if(array[i].length % 2 === 0){
        newArr.push(array[i])
      }
    }
    return newArr
  }
  filterEvenLengthWords(['word', 'words', 'word', 'words'])
  
  // //problem 82
  // // Write a function called "getLengthOfLongestElement".
  // // Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.
  // // Notes:
  // // It should return 0 if the array is empty.
  // // var output = getLengthOfLongestElement(['one', 'two', 'three']);
  // // console.log(output); // --> 5
  // Math.max(el1len, el2len, num3);
  // //lognest length
  function getLengthOfLongestElement(array){
    let longestEl = 0;
    for(let i = 0; i < array.length; i++){
      if(longestEl < array[i].length){
        longestEl = array[i].length;
      }
    }
    return longestEl
  }
  getLengthOfLongestElement(['one', 'two', 'three'])
  getLengthOfLongestElement(['eleven', 'one', 'two', 'three', 'sixteen'])
  
  // // //shortest length
  function getLengthOfLongestElement(array){
    let longestEl = array[0].length;
    for(let i = 0; i < array.length; i++){
      if(longestEl > array[i].length){
        longestEl = array[i].length;
      }
    }
    return longestEl
  }
  getLengthOfLongestElement(['one', 'two', 'three'])
  // getLengthOfLongestElement(['eleven', 'one', 'two', 'three', 'sixteen'])
  
  // //MATH.MAX method
  function getLengthOfLongestElement(array){
    let arr = [];
    for(let el of array){
      arr.push(el.length);
    }
    var max = Math.max(...arr);
    return max
  }
  getLengthOfLongestElement(['one', 'two', 'three'])
  
  
  // //problem 83
  // // Write a function called "countCharacter".
  // // Given a string input and a character, "countCharacter" returns the number of occurrences of a given character in the given string.
  // // var output = countCharacter('I am a hacker', 'a');
  // // console.log(output); // --> 3
  function countCharacter(string, char){
    let count = 0;
    for (let i = 0; i < string.length; i++) {
          if (string.charAt(i) === char) {
              count += 1;
          }
      }
      return count;
  }
  countCharacter('I am a hacker', 'a')
  
  // //problem 84
  // // Write a function called "getAllLetters".
  // // Given a word, "getAllLetters" returns an array containing every character in the word. Notes:* If given an empty string, it should return an empty array.
  // // var output = getAllLetters('Radagast');
  // // console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
  function getAllLetters(word){
    let arr = []
    arr = word.split('')
    return arr
  }
  getAllLetters('Radagast')
  
  // //problem 85
  // // Write a function called "getAllWords".
  // // Given a sentence, "getAllWords" returns an array containing every word in the sentence. Notes:* If given an empty string, it should return an empty array.
  // // var output = getAllWords('Radagast the Brown');
  // // console.log(output); // --> ['Radagast', 'the', 'Brown']
  function getAllWords(sentence){
    let arr = []
    arr = sentence.split(' ')
    return arr
  }
  getAllWords('Radagast the Brown')
  
  // //problem 86
  // // Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array's 'zeroth' element) down to 0 (as the last element). How long is this array?
  // // `countdown(5) // [5,4,3,2,1,0]`
  function countDown(num){
    const arr = [];
    for(let i = 0; i <= num; i++){
      arr.unshift(i)
    }
    return arr
  }
  countDown(5)
  
  // //USING PUSH METHOD
  function countDown(num){
    const arr = [];
    for(let i = num; i >= 0; i--){
      arr.push(i)
      console.log(arr)
    }
    return arr
  }
  countDown(5)
  
  // //problem 87
  // // Your function will receive an array with two numbers. Print the first value,and return the second.
  // // `print([3,5]) // print 3 and return 5`
  function print(array){
    let first = array[0]
    console.log(first)
    let second = array[array.length-1]
    return second
  }
  print([3,5])
  
  // //problem 88
  // // Given an array, return the sum of the first value in the array, plus the array's length. What happens if the array's first value is not a number, but a string (like "what? " ) or a boolean (like false).
  // // `firstPlus([2,4,7,8,9]) // 7(2+5)
  // // firstPlus(['asd',4,7,8,9]) // "wrong data"
  function  firstPlus(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'number'){
        result = arr[0] + arr.length
      } else {
        return 'wrong data'
      }
    }
    return result
  }
  
  firstPlus([2,4,7,8,9])
  
  // // //problem 89
  // // // Print values that are greater than its 2nd value. Return how many values this is.
  // // // `greaterThanSecond([1,3,5,7,2,13]) // log 5,7,13 and return 3`
  function greaterThanSecond(arr){
    let count = 0;
    let j = arr[1];
   for(let i = 0; i < arr.length; i++){
        if(arr[i] > j){
          count++
          console.log(arr[i])
        }
      }
       return count
  }
  greaterThanSecond([1,3,5,7,2,13])
  
  // //problem 90
  // // Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?
  // // `greaterThanSecond([1,3,5,7,2,13]) // log 3 and return [5,6,13]
  // // greaterThanSecond([3]) // "not enough numbers"`
  function greaterThanSecond(arr){
    const newArr = []
    for(let i = 0; i < arr.length; i++){
      let j = arr[1]
      if(arr[i] > j){
        newArr.push(arr[i])
      } if(arr.length <= 1) {
        return 'not enought numbers'
      }
    }
    console.log(newArr.length)
    return newArr
  }
  greaterThanSecond([1,3,5,7,2,13])
  
  // //problem 91
  // // Given two numbers, return an array of length num1 with each value num2. Return "Same!" if they are same.
  // // `len(3,4) // [4,4,4]
  // // len(5,5) // "Same!"`
  function len(num1, num2){
    const arr = [];
    let lengthOfArr = 0;
   
    if(num1 === num2){
      return 'Same!'
    } 
    
    while (lengthOfArr < num1) {
      arr.push(num2)
      lengthOfArr++;
    }
    return arr
  }
  len(3, 4)
  
  // //problem 92
  // // Your function should accept an array. If value at [0] is greater than array's length, print "Too big! if value at [0] is less than array's length, print "Too small!"; otherwise print "Just right! ".
  // // `fitFirst([4,2,1]) // Too big!
  // // fitFirst([4,2,1,3,5]) // Too small!
  // // fitFirst([4,2,1,3]) // Just right!`
  function fitFirst(array){
    for(let i = 0; i < array.length; i++){
      if(array[0] > array.length){
        return 'Too big!';
      } else if (array[0] < array.length){
        return 'Too small!';
      } else {
        return 'Just right!'
      }
    }
  }
  console.log(fitFirst([4,2,1]))
  console.log(fitFirst([4,2,1,3,5]))
  console.log(fitFirst([4,2,1,3]))
  
  // // problem 93
  // // Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1 ,1, 3] and returns it.
  // // `countPositives([-1,1,1,1]) // [-1,1 ,1, 3]`
  function countPositives(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
        count++
      }
    }
      arr.splice(arr.length-1, 1, count)  
  return arr
  }
  countPositives([-1,1,1,1])
  
  
  //problem 94
  // Write a function called "or".
  // Given 2 boolean expressions, "or" returns true or false, corresponding to the || operator.
  // Notes:* Do not use the || operator.* Use ! and && operators instead.
  // var output = or(true, false);
  // console.log(output); // --> true;
  function or(expression1, expression2){
    if(expression1 !== expression2){
      return true
    } else if (expression1 && expression2){
      return true
    } else {
      return false
    }
  }
  or(true, false)
  
  // //problem 95
  // // Write a function called "isEitherEvenOrAreBoth7".
  // // Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.
  // // var output = isEitherEvenOrAreBoth7(3, 7);
  // // console.log(output); // --> false
  // // var output = isEitherEvenOrAreBoth7(2, 3);
  // // console.log(output); // --> true
  function isEitherEvenOrAreBoth7(num1, num2){
    if(num1 % 2 === 0 || num2 % 2 === 0){
      return true
    } else if(num1 === 7 && num2 === 7){
      return true
    } else {
      return false
    }
  }
  isEitherEvenOrAreBoth7(3, 7)
  
  // //problem 96
  // // Write a function called "isEitherEvenAndLessThan9".
  // // Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.
  // // var output = isEitherEvenAndLessThan9(2, 4);
  // // console.log(output); // --> true
  // // var output = isEitherEvenAndLessThan9(72, 2);
  // // console.log(output); // --> false
  function isEitherEvenAndLessThan9(num1, num2){
    if(num1 % 2 == 0 || num2 % 2 == 0){
      return true
    }  else if (num1 < 9 && num2 < 9){
      return true
    } else {
      return false
    }
  }
  isEitherEvenAndLessThan9(7,1)
  
  //problem 97
  // Kelvin wants to convert between temperature scales.
  // Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as expressed in Celsius degrees.
  // Notes:* Fahrenheit = (9/5 * Celsius) + 32.
  // `fahrenheitToCelsius(90) // 32`
  const fahrenheitToCelsius = fDegrees => {
    let farToCelc = (fDegrees-32)*5/9
    return farToCelc.toFixed()
   }
  fahrenheitToCelsius(90)
  //OR
  function fahrenheitToCelsius(fDegrees){
     let farToCelc = Number.parseInt((fDegrees-32)*5/9)
     return farToCelc
  }
  fahrenheitToCelsius(90)
  
  // //problem 98
  // // Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.
  // // `celsiusToFahrenheit(27) // 80`
  function celsiusToFahrenheit (cDegrees) {
    let farDegrees = Number.parseInt((9/5 * cDegrees) + 32)
    return farDegrees
  }
  celsiusToFahrenheit(27)
  
  // //problem 99
  // // Write a function called "makeitBig".
  // // Given an array, write a function that changes all positive numbers in the array to "big".
  // // `makeitBig([-1,3,5,-5]) // [-1, "big","big",-5];`
  //VERSION 1
  function makeitBig(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > 0){
      arr[i] = 'big'
      }
    }
    return arr
  }
  makeitBig([-1,3,5,-5])
  //VERSION 2
  function makeitBig(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0){
        arr.splice(i, 1, ‘big’)
      }
    }
    return arr;
  }
  makeitBig([-1,3,5,-5])
  
  
  
  // //problem 100
  // // Write a function called "printLow".
  // // Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.
  // // `printLow([6,0,5,4,9,3,6]) // print 3(second to last) and return 5(firsodd number)`
  function printLow(array){
      console.log(array.splice(-2, 1)[0])
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 1){
        return array[i]
      }
    }
  }
  printLow([6,0,5,4,9,3,6])
  
  // //problem 101
  // // Write a function called "double".
  // // Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2, 4, 6] without changing original.
  // // `double([1,2,3]) // [2, 4, 6]`
  function double (array){
    let newArray = [];
    for(let i = 0; i < array.length; i++){
      newArray.push(array[i]*2)
    }
    return newArray
  }
  double([1,2,3])
  
  // //problem 102
  // // Write a function called "printLow".
  // // Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.
  // // `printLow([5,4,9,3,6]) // print 3 and return 9`
  function printLow(arrOfNum){
    let highestNum = 0;
    let lowestNum = 0;
    for(let i = 0; i < arrOfNum.length; i++){
      lowestNum = Math.min(...arrOfNum)
      highestNum = Math.max(...arrOfNum)
    }
      console.log(lowestNum)
      return highestNum
  }
  printLow([5,4,9,3,6]) 
  
  // //problem 103
  // // Write a function called "print".
  // // Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print “Seytech”
  // // print()//
  function print(){
   for(let i = 1; i <= 100; i++){
     if(i % 10 === 0){
       console.log('Seytech')
     } else if(i % 5 === 0) {
       console.log('Coding')
     } else {
       console.log(i)
     }
   }
  }
  print()
  
  // //problem 104
  // // Evens and Odds
  // // Create a function that accepts an array. Every time that array has three odd values in a row, print "That' s odd!" Every time the array has three evens in a row, print "Even more so! " . if nothing found return "no data found"
  // // `evenOdds([1,2,3,5,7,8,9])` 
  // // `//  there are three odds (3 odds in a row), return "That's odd" after 7`
  function evenOdds (arr) {
    for(i=0; i < arr.length; i++) {
      if(arr[i] && arr[i+1] && arr[i+2]) {
          if(arr[i]%2==0 && arr[i+1]%2==0 &&  arr[i+2]%2==0) { 
          console.log("even");
          }
          if(arr[i]%2!=0 && arr[i+1]%2!=0 &&  arr[i+2]%2!=0) {
          console.log("That' s odd");
          }
          else{
            console.log("no data found")
          }
    }
    }
  }
  evenOdds([1,2,3,5,7,8,9])
  
  // //problem 105
  // // Increment the Seconds
  // // Given arr, add 1 to odd elements ([1],[3],etc.),console.log all values and return arr.
  // // `incr([1,2,3,4,5])`
  // // `// [2,2,4,4,6]`
  function incr(array) {
   for(let i =0; i < array.length; i++){
     if(array[i] % 2 ===1){
       array[i]+= 1
      //  console.log(array)
     }
   }
   return array
  }
  incr([1,2,3,4,5])
  
  
  // //problem 106
  // // You are passed an array containing string, Working within that same array, replace each string with a number - the length of the string previous array index - and return the array 'k
  // // `prevLen(['av','s','asdb','adfgb']) // [5,2,1,4]`
  function prevLen(arr){
    let newArr = [];
    for( let i = 0; i < arr.length; i++){
      if(i === arr.length-1){
        newArr.unshift(arr[i].length)
      } 
      else {
      newArr.push(arr[i].length)
      }
    }
    return newArr
  }
  prevLen(['av','s','asdb','adfgb'])
  
  // //problem 107
  // // Build function that accepts array. Return an array with all values except first, adding 7 to each. Do not alter the original array.
  // // `addSeven([1,2,5,10]) // [9,12,17]`
  function addSeven(arr){
      const newArr = []
    for(let i = 0; i < arr.length; i++){
      let count = 0;
      if(arr[i] > arr[0]){
        newArr.push(arr[i]+7)
      }
    }
    return newArr
  }
  addSeven([1,2,5,10])
  
  // //problem 108
  // // Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1).
  // // `negative([1,-3,5]) // [-1,-3,-5]`
  function negative (arr){
      let newArr = [];
      let negative = 0;
    for(let i = 0; i < arr.length; i++){
        negative = (-Math.abs(arr[i]))
        newArr.push(negative)
    }
    return newArr
  }
  negative([1,-3,5])
  
  // //problem 109
  // // Create a function that accepts an array, and returns "yummy" each time one of the values is equal to "food". If no array elements are "food", then return "I'm hungry".
  // // `hungry(['f','food','b','food']) // "yummy yummy"
  // // hungry(['f','df','b','as']) // "i'm hungry"`
  function hungry(array) {
    let str = '';
    let word = 'yummy'
   for(elem of array) {
     if(elem === 'food') {
        str = str + word
        str.split('/')
        console.log(str)
     } 
   }
   if(str === ''){
     return "i'm hungry"
   }
  return str;
  }
  hungry(['f','food','b','food'])
  
  // //problem 110
  // // Write a function called "isPersonOldEnoughToDrinkAndDrive".
  // // Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.
  // // Notes:* The legal drinking age in the United States is 21.* The legal driving age in the United States is 16.* It is always illegal to drink and drive in the United States.
  var obj = {
    age: 45
  };
  // var output = isPersonOldEnoughToDrinkAndDrive(obj);
  // console.log(output); // --> false
  function isPersonOldEnoughToDrinkAndDrive(age){
    return false
  }
  isPersonOldEnoughToDrinkAndDrive(45)
  
  // //problem 111
  // // Write a function called "isPersonOldEnoughToDrive".
  // // Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrive" returns whether the given person is old enough to drive.
  // // Notes:* The legal driving age in the United States is 16.
  // // var output = isPersonOldEnoughToDrive(obj);
  // // console.log(output); // --> true
  //     // console.log(obj.age)
  var obj = {
    age: 14
  };
  function isPersonOldEnoughToDrive(person){
    const drivingAge = 16
    if(person.age >= drivingAge){
      return true
    } else {
      return false
    }
  }
  isPersonOldEnoughToDrive(obj)
  
  // //problem 112
  // // Write a function called "isPersonOldEnoughToVote".
  // // Given a "person" object, that contains an "age" property, "isPersonOldEnoughToVote" returns whether the given person is old enough to vote.
  // // Notes:* The legal voting age in the United States is 18.
  // // var output = isPersonOldEnoughToVote(obj);
  // // console.log(output); // --> true
  var obj = {
    age: 14
  };
  function isPersonOldEnoughToVote(person){
    const votingAge = 18;
    if(person.age >= votingAge){
      return true
    } else {
      return false
    }
  }
  isPersonOldEnoughToVote(obj)
  
  // //problem 113
  // // Write a function called "isPersonOldEnoughToDrink".
  // // Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.
  // // Notes:* The legal drinking age in the United States is 21.
  // // var output = isPersonOldEnoughToDrink(obj);
  // // console.log(output); // --> false
  var obj = {
    age: 16
  };
  function isPersonOldEnoughToDrink(person){
    const drinkingAge = 21
    if(person.age >= 21){
      return true
    } else {
      return false
    }
  }
  isPersonOldEnoughToDrink(obj)
  
  // //problem 114
  // // Write a function called "getProperty".
  // // Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:* If there is no property at the given key, it should return undefined.
  // // // var output = getProperty(obj, 'key');
  // // // console.log(output); // --> 'value'
  var obj = {
    key: 'value'
  };
  function getProperty(obj, key) {
    return obj[key]
  }
  getProperty(obj, 'key');
  
  
  // //problem 115
  // // Write a function called "addProperty".
  // // Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.
  // // addProperty(myObj, 'myProperty');
  // // console.log(myObj.myProperty); // --> true
  var myObj = {};
  function addProperty(obj, key){
    obj[key] = true
    return obj
  }
  addProperty(myObj, 'myProperty')
  
  //problem 116
  // Write a function called "removeProperty".
  // Given an object and a key, "removeProperty" removes the given key from the given object.
  // // removeProperty(obj, 'name');
  // // console.log([obj.name](http://obj.name/)); // --> undefined
  var obj = {
    name: 'Sam',
    age: 20
  }
  function removeProperty(obj, key){
      delete obj[key]
      console.log(obj[key])
  }
  removeProperty(obj, 'name')
  
  // //problem 117
  // Write a function called "getLengthOfThreeWords".
  // Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.
  // var output = getLengthOfThreeWords('some', 'other', 'words');
  // console.log(output); // --> 14
  function getLengthOfThreeWords(word1, word2, word3){
    let sumOfLength = word1.length + word2.length + word3.length
    return sumOfLength
  }
  getLengthOfThreeWords('some', 'other', 'words')
  
  //problem 118
  // Write a function called "addFullNameProperty".
  // Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.
  var person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  function addFullNameProperty(obj){
    obj.fullName = obj.firstName + ' ' + obj.lastName
    return obj
  }
  addFullNameProperty(person)
  
  // //problem 119
  // // Write a function called "addObjectProperty".
  // // Given two objects and a key, "addObjectProperty" sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.
  // // return person1 object.
  var person1 = {
    name: 'Joe Blow',
    role: 'schlub'
  };
  var person2 = {
    name: 'Mr. Burns',
    role: 'supervisor'
  };
  // // // addObjectProperty(person1, 'manager', person2);
  // // // console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'superv
  function addObjectProperty(obj1, key, obj2){
    obj1[key] = obj2
    return obj1
  }
  addObjectProperty(person1, 'manager', person2)
  
  //problem 120
  // Write a function called "addArrayProperty".
  // Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.
  // return myObj data.
  var myObj = {};
  var myArray = [1, 3];
  // addArrayProperty(myObj, 'myProperty', myArray);
  // console.log(myObj.myProperty); // --> [1, 3]
  function addArrayProperty(obj, key, arr){
      obj[key] = arr;
      return obj
  }
  addArrayProperty(myObj, 'myProperty', myArray)
  
  //problem 121
  // Write a function called "addConditionalProperty".
  // Check if a first given parameter is an object. If it's then then add second parameter as a key and third one as a value and return an object back.
  // If first parameter is not an object then create a new object with second and third parameters.
  // addConditionalProperty({name: "test"}, 'grade', 90);
  //  // --> {name: "test", grade: 90}
  // addConditionalProperty([], 'grade', 90);//{name: "test"}
  function addConditionalProperty(obj, key, value){
      let newObj = {};
    if(typeof obj === 'object'){
      obj[key] = value;
      return obj
    } 
    if (typeof obj !== 'object'){
      newObj[key] = value;
      return newObj
    }
  }
  console.log(addConditionalProperty([], 'grade', 90))
  console.log(addConditionalProperty({name: "test"}, 'grade', 90))
  
  //problem 122
  // Write a function called "addConditionalProperty". Check if a first given parameter is an object. If it's then then add second parameter as a key and third one as a value and return an object back.
  // If first parameter is not an object then create a new object with second and third parameters.
  // Note: this time check only if first parameter is an object.
  // hint: some data types are object but they are not objects.
  // addConditionalProperty({name: "test"}, 'grade', 90);
  //  // --> {name: "test", grade: 90}
  // addConditionalProperty([], 'grade', 90);//{name: "test"}
  function addConditionalProperty(obj,key,value){
    if(typeof obj === 'object' && obj !== null && !Array.isArray(obj)){
      obj[key] = value;
      return obj
    } else{
      let newObj = {}
      newObj[key] = value;
      return newObj
    }
  }
  console.log(addConditionalProperty({name: "test"}, 'grade', 90))
  console.log(addConditionalProperty([], 'grade', 90))
  
  //problem 123
  // Write a function called "countObjects". You are given an object. Count how many objects inside a given object.
  // Note: No need to count nested objects.
  // countObjects(data); // --> 3 
  var data = {
    country: "USA", currency:"dollar", 
    products:[], stock: true, cash: {},
    single: {name: "iPhone", price: 40, sold:4},
    person: {},
  }
  function countObjects(obj){
      let count = 0;
    for(let key in obj){
      if(typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])){
        count++
        console.log(count, obj[key])
      }
    }
        return count
  }
  countObjects(data)