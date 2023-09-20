# Теория/Задание 1

Консоль выводит:
(при использовании var)
с задержкой в 3 секунды
(4)Bad:undefined

Варианты с помощью методов массивов:

const arr = [10, 12, 15, 21];
// map
let a = []
arr.map((num) => {
    num > 13 ? a.push(`Good: ${num}`) : a.push(`Bad: ${num}`)
})
b= a.join(', ')
setTimeout(()=>console.log(b),3000);   //Bad: 10, Bad: 12, Good: 15, Good: 21

//forEach

let c=[]

arr.forEach(num=>{
    num > 13 ? c.push(`Good: ${num}`) : c.push(`Bad: ${num}`)
})
d= c.join(', ')
setTimeout(()=>console.log(d),3000);   //Bad: 10, Bad: 12, Good: 15, Good: 21