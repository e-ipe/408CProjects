/*Write some JavaScript that collects what your favorite class is, and if it is “BMGT408c” say “That’s right”, and if it isn’t say “<class> seems worse than BMGT408c” where <class> is what the person inputted.*/
var class = prompt("Please enter the class:");

if (class == "BMGT408c") {
  console.log("That’s right");
}
else {
  console.log(class + "seems worse than BMGT408c")
}

/*Problem 2: Put them into an array, and print them from a loop into the document.*/
var anArray = ["https://twitter.com/i/status/1130643958462406656", "https://twitter.com/i/status/1124158548781481989", "https://twitter.com/i/status/1157153169215901696", "https://twitter.com/i/status/1157165980876853253", "https://twitter.com/i/status/1149312579908591616"];
var i = 0;
while (i < anArray.length) {
  document.write('<p>' + anArray[i] + '</p>');
  i = i + 1;
}

