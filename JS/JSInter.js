//Array

const array = [10,20,"Vaishali",23.08,Date()]
console.log("Before change :")
for (var ele in array){
    console.log(array[ele])
}
console.log("After change :")
array.push("3rd Years")

for (var ele of array){
    console.log(ele)
}
array.pop()
for (var ele of array){
    console.log(ele)
}
array.pop()
array.pop()
array.pop()
array.pop()
console.log("After popping all the elements")

if(array.length > 0){
    console.log("Elemetns are present")
    for(var ele of array){
        console.log(ele)
    }
}
else{
    console.log("No elements are in the array")
}
array.push(1)

if(array.length > 0){
    console.log("Elemetns are present")
    for(var ele of array){
        console.log(ele)
    }
}
else{
    console.log("No elements are in the array")
}

//Objects

a = {
    car: "Audi", 
    model: "A8" ,
    airbags: 8,
    wheels: 5,
    color: "blue"
}
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
//change features
a.car = "BMW"
console.log(a)
//add features
a.sunroof = "Yes"
console.log(a)
//nested object
a.sunroof = {isPresent: "Yes",Shape: "Rectangle"}
console.log(a)
console.log(a.sunroof.isPresent)

for (var ele in a){
    console.log(ele +":" + a[ele])
    if(typeof a[ele] === "object")
    {
        for (var val in a[ele]){
            console.log(val +":" + a[ele][val])
        }
    }
}

// functions
function fun_name() {
    console.log("5" + 5 + 5)
}
fun_name()

function fun_new() {
    console.log(5 + 5 + "5")
}
fun_new()

function fun_edit() {
    console.log(5 + "5" + 5)
}
fun_edit()

function fun1(a,b) {
    console.log(5+b + 5+a + " Jo " +5)
}
fun1(2,7)