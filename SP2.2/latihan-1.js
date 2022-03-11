var backEnd = [" abdurrahman ", " Eko ", " Raihan "];
var frontEnd = [" Algis ", " Fikri ", " galih ", " Reza ", " rendi "];
backEnd.shift();
backEnd.unshift(" Atif ");
frontEnd.splice(2, 1);
frontEnd.splice(2, 0, " Izra ", " mujahidin ");
frontEnd.pop();
frontEnd.push(" yahya");

var androidDeveloper = backEnd.concat(frontEnd);

document.write("Back End = ", backEnd, "<br>", "<br>");
document.write("Front End = ", frontEnd, "<br>", "<br>");
document.write("Android Developer = ", androidDeveloper, "<br>");
