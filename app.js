const add =(x,y) =>{
    return x+y;
}
const multiply =(x,y) => x+y;

const round =num => Math.round(num);

console.log(add (4,5));
console.log(multiply(5,8));
console.log(round(3.456));

// //arrow faunction with method ////
const obj={
    name:"sylani",
    print: function(){
        setTimeout(()=>{
            console.log(this.name);

        },1000);
       
    }
    
}
obj.print();
