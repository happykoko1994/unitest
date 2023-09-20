//task
const arr = [10, 12, 15, 21];
// for (var i=0 ; i<arr.length ; i++){
//     setTimeout(function(){
//         console.log(arr[i]>13 ? `Good:${arr[i]}` : `Bad:${arr[i]}`)
//     } ,3000)
// }

// map
let a = []

arr.map((num) => {
    
    num > 13 ? a.push(`Good: ${num}`) : a.push(`Bad: ${num}`)
    
})
b= a.join(', ')
// setTimeout(()=>console.log(b),3000);

//forEach
let c=[]

arr.forEach(num=>{
    num > 13 ? c.push(`Good: ${num}`) : c.push(`Bad: ${num}`)
})
d= c.join(', ')
setTimeout(()=>console.log(d),3000);
