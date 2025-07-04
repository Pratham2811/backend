const obj={}

obj["banana"]=3;
obj["banana"]+=1;
console.log(obj);
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count={}

fruits.forEach(element => {
    count[element]=(count[element]|| 0)+1;
    
});
console.log(count);
