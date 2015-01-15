function hello(){
  // say hello to the world
  window.onload=hello;
  var msg = "Hello, World!";
  document.open();
  document.writeln(msg);
  document.close();
}

function hello2() {
  var msg= "nice begin";
  var string_value = "hi  \t \n This is a \"string\" with \\a\\ qu\/ote."
  document.open();
  document.write(msg + string_value);
  document.writeln("\u7231");
  document.close(); }

function compareNumber() {
  var tstValue = 3;
  alert(tstValue);
  if (tstValue == 3) {
    alert("value is 3");
  }
}

function testSwitch(okStr){
  document.write(okStr)
  switch(okStr) {
    case okStr == "one":
      alert('OK')
    case okStr == 'two':
      alert('OK')
    case okStr == 'three':
       alert('OK2')
    default:
      alert('error');
  }

}

function choiceMakr() {
    var sValue = "3.0";
    var nValue = 3.0;
    if (nValue == "3.0") alert("According to equality, value is 3.0");
    if (nValue === "3.0") alert("According to strict equality, value is 3.0");
    if (sValue != 3.0) alert ("According to equality, value is not 3.0");
    if (sValue !== 3.0) alert ("According to strict equality, value is not 3.0");

}

function s(){
//  var myName = 'kklll';
  var x = document.getElementById('name');
  x.value = x.value.strike();
}

function numbers() {
// Number methods
  var newNumber = new Number(34.8896);
  document.writeln(newNumber.toExponential(3) + "<br />");
  document.writeln(newNumber.toPrecision(3) + "<br />");
  document.writeln(newNumber.toFixed(6) + "<br />");
  var newValue = newNumber.valueOf();
  document.writeln(newValue.toString(2) + "<br />");
  document.writeln(newValue.toString(8) + "<br />");
  document.writeln(newValue.toString(10) + "<br />");
  document.writeln(newValue.toString(16) + "<br />");
}

function stringHTML() {
  var someString = new String("This is the test string");
  var s = String.fromCharCode(345,99,99,76);
  document.writeln(someString.big() + "<br />");
  document.writeln(someString.toUpperCase() + "<br />");
  document.writeln(someString.blink() + "<br />");
  document.writeln(someString.sup() + "<br />");
  document.writeln(someString.strike() + "<br />");
  document.writeln(someString.bold() + "<br />");
  document.writeln(someString.italics() + "<br />");
  document.writeln(someString.small() + "<br />");
  document.writeln(someString.link('http://www.oreilly.com'));

  document.writeln(s)
}

function splitString() {
  var inputString = new
    String('firstName=Shelley,lastName=Powers,state=Missouri,statement="This is a test, of split"');
  var arrayTokens = inputString.split(',',3);
// process split on commas
  for (var i = 0; i < arrayTokens.length; i++) {
    document.writeln(arrayTokens[i] + "<br />");
// now split on equals and write just value
    var newTokens = arrayTokens[i].split('=');
    document.writeln(newTokens[1] + "<br /><br />");
  }
}

function regTest(){
//  var re = /JavaScript rules/;
//  var str = "JavaScript rules";
//  if (re.test(str)) document.writeln("I guess it does rule") ;

//  var re = new RegExp("JS*","ig");
//  var str = "cfdsJS *(&YJSjs 888JS";
//  var resultArray = re.exec(str);
//
//
//  while (resultArray) {
//    document.writeln(resultArray[0]);
//    document.writeln(" next match starts at " + re.lastIndex + "<br />");
//    resultArray = re.exec(str);
//  }


  var regExp = /\s\*/g;
  var str = "This *is *a *test *string";
  var resultString = str.replace(regExp,'-');
  alert(resultString)
}

function findDate() {
  var regExp = /:\D*\s\d+\s\d+/;
  var regExp4Email = /:[^0-9]\@.*\.com$/;
  var str = "This is a date: March 12 2009";
  var email = "the email is: adfad@adfa.com"
  var resultString = str.match(regExp);
  var emailRes = email.match(regExp4Email);

  var regExp2 = /The*/im;
  var str = "This is really the\nend";
  var resultString2 = str.match(regExp2)
  alert(resultString)
  alert(resultString2)

  var rgExp = /(^\D*[0-9])/
  var str = "This is fun 01 stuff";
  var resultArray3 = str.match(rgExp);
//  document.writeln(resultArray3);
  alert(resultString2)


  var newDt = new Date(1977,11,24,19,30,30,30);
  document.writeln("set date: " + newDt.getDate())




//  alert("Date" + resultString + "---EMAIL" + emailRes);
}


function testingDate() {
// new date
  var dtNow = new Date();
// set day, month, year
  dtNow.setDate(18);
  dtNow.setMonth(10);
  dtNow.setYear(1954);
  dtNow.setHours(7);
  dtNow.setMinutes(2);

  var today = new Date()
// output formatted
  document.writeln(dtNow.toString() + "<br />");
  document.writeln(dtNow.toLocaleString() + "<br />");
  document.writeln(dtNow.toLocaleDateString() + "<br />");
  document.writeln(dtNow.toLocaleTimeString() + "<br />");
  document.writeln(dtNow.toGMTString() + "<br />");
  document.writeln(dtNow.toUTCString());
  document.writeln(today.toUTCString());
}

function testArr() {
  var fruitArray = new Array('apple','peach','orange','lemon','lime','cherry');
  var removed = fruitArray.splice(2,2,'melon','banana');
  document.writeln(removed + "<br />");
  document.writeln(fruitArray);
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(1, 0, "Lemon", "Kiwi");
  document.getElementById("demoC").innerHTML = fruits;

  document.getElementById("demoC2").innerHTML = fruits.slice(1, 3);
}

function theAnimals() {
  var ani = "cats,dogs,birds,horses";
  document.getElementById("chp4t1").innerHTML = ani.split(',')[2]

  var s = "The fun of functions is that they are functional.";
//  var reg = /\bfun\b/;
  var reg = /\*fun*/;

  var replaceS = s.replace(reg, 'power')
  alert(replaceS)


}

function buildFunction() {
// prompt for function and args
  var func= prompt("Enter function body:");
  var x = prompt("Enter value of x:");
  var y = prompt("Enter value of y:");
// invoke anonymous function
  var op = new Function("x", "y", "func");
  var theAnswer = op(x, y);
// print out results
  alert("Function is: " + func);
  alert( "x is: " + x +
    " y is: " + y);
  alert("The answer is: " + theAnswer);
}