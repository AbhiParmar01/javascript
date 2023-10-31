// They are three type of printing someting
console.log("Abhi");
document.write("PARMAR..,");
alert("THAKUR")

// VARIABLES

/*are containners for storing data
THEY ARE THREE DIFFERENT TYPR OF VARIABLES IN JAVASCRIPT
1.VAR => USE IN NORMALY
2.LET => RESIGN THE VALUE 
3.CONST => IT IS NOT RESIGH THE VALUE
*/
// VAR TYPE
var variableName = "code,";
document.write(variableName);
// LET TYPE
let variablekanaam = "HINDI";
 variablekanaam = "India..,"
document.write(variablekanaam)

// CONST TYPE

const naahhavariable = "jay ho,";
document.write(naahhavariable);

// Data type
/*
 1. STRING FOR CHAR VALUE
 2. NUBMER FOR NUMBER
 3. BOOLEAN FOR TRUE FALUSE
 4. UNDEFIND FRO UNDEFINED
 5. SYMBOL IS $,=,;,""",'',``,ETC
 6. OBJECT FRO IT IS USE FOR THE BUILDING BLOCKS FOR JAVASCRIPT
*/
 
// stirng 
/**
 you  write a string in three different type
 singlequotes''
 doublequotes ""
 backticks ``=> BACKTICKS is providing extra functionality is allow to embedded variable amd expression in string
 */
const singlequotes = 'Hello!';
const doublequotes = "Abhi";
const backticks =  `HELLO, ${doublequotes} do programing in evary day...`;

document.write(backticks);

// NUMBER
const wholeNum = 10; // ther are no limit in number in js
const decimalNum = 10.10;// no limit in number in js 
document.write(wholeNum);

const a= 20;
const b = 20;

const result = a + b;
document.write(result)

// BOOLEAN 

const boy = true;
if(boy){
    console.log("Hii...");
}else{
    console.log("Hyy...")
}

const age =21;
document.write(age>18);

// OBJECT

const student = {
    Name : "Abhi",
    Age :21,
    Branch : "IOT",
};
console.log(student)

// operators
// comparison op. => they are comparing two value 
const d = 6;
const c = 9;
document.write(d>c)


// Logical op
// AND && => All opreantes are true
console.log(true && false)
// OR || => at least one opreantes are true
console.log(true || false)
// NOT ! => it converting true to false and false to true
console.log(! true)

// logic
// if else or else if

const man = 18;
if(man> 18){
    console.log('you may enter');
} else if(man == 18){
    console.log("Welcome...! :)")
} else{
    console.log("Sorry you are not alowed (:")
}
// Loop
// for loop
// while loop

let i = 0;
while(i<10){
    console.log(i);
    i++;
}

for(let i=0;i<10;i++){ 
    document.write(i);
}

function square(num) {
    return num*num;
}
const resultt = square(5);
console.log(resultt);
