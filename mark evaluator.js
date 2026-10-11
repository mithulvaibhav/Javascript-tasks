function evaluator (){

let name=prompt(" Enter name");
let mark1=Number(prompt("Enter mark 1"))
 if (mark1<0 || mark1>100){
        alert("Warning: mark must be between 0 and 100")}
let mark2=Number(prompt(" Enter mark 2"))
if (mark2<0 || mark2>100){
        alert("Warning: mark must be between 0 and 100")}
let mark3=Number(prompt(" Enter mark 3"))
 if (mark3<0 || mark3>100){
        alert("Warning: mark must be between 0 and 100")}
function total(_mark1,_mark2,_mark3){
        return _mark1+_mark2+_mark3;
        
    }
    function avg (_mark1,_mark2,_mark3)
    {
        return[_mark1+_mark2+_mark3]/3;
    }
    function grade(){
    if( avg(mark1,mark2,mark3)>=90){
        return("grade A")
    } else if (avg(mark1,mark2,mark3)>=75){
return("grade B")
    }
    else if (avg(mark1,mark2,mark3)>=50){
        return("grade C")
    }
    else {
        return("grade F")
    }}
    alert(name)
    alert(total(mark1,mark2,mark3))
    alert(avg(mark1,mark2,mark3))
    alert(grade())
    confirm("Do you want to calculate for another student?")

}