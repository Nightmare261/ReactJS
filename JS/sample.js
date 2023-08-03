var a = 120
console.log("This is the value declared in var type after altering:"+a)
{
    var a = 7
    console.log("This is the value declared in var type after altering:"+""+a)
}
let b = 20
console.log("This is the value declared in var type before altering:"+""+b)
{
    let b = 7
    console.log("This is the value declared in var type after altering:"+""+b)
}
console.log("This is the value declared in var type after block altering:"+""+b)

const c = 30
console.log("This is the value declared in const type:"+""+c)

a = 0
if (a==0){
    console.log("The number is 0 and adding 1 to it to make it positive "+""+a)
    a = a + 1 
    console.log(a)
}
else if(a>0){
    console.log("The number is Positive")
}
else{
    console.log("The number is Negative")
}

// looping, for, foreach, forin, forof while, do..while
//lets try foreach and forin
for(i = 0; i<a;i++){
    console.log(i)
}

//while loop
i = 0
while(i <=a){
    console.log(i)
    i++
}

array = [10,20]
array.forEach(element => console.log(element));