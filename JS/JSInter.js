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
