name_of_student = [];

function submit()
{
var display_array = [];
for (var j=1;j<=4; j++){
    var name_of_student_array = document.getElementById("name_of_the_student_"+j).value;
    console.log(name_of_student_array);
    name_of_student.push(name_of_student_array);
}
console.log(name_of_student);
var length = name_of_student.length;
console.log(length);

for (var k=0; k<length; k++){
    display_array.push("<h4>Name - "+name_of_student[k]+"</h4>");
    console.log(display_array);
}
console.log(display_array);
document.getElementById("display_name_with_commas").innerHTML = display_array;

var removeC = display_array.join(" ");
console.log(removeC);
document.getElementById("display_name_without_commas").innerHTML = removeC;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sorting()
{
name_of_student.sort();
console.log(name_of_student);

var display_sort = [];
var length = name_of_student.length;
console.log(length);

for (var k=0;k<length; k++){
    display_sort.push("<h4>Name - "+name_of_student[k]+"</h4>");
    console.log(display_sort);
}
var removeC = display_sort.join(" ");
console.log(removeC);
document.getElementById("display_name_without_commas").innerHTML = removeC;

}
function new_update()
{
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" +name_of_student + "</h1>";
}