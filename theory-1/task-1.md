# Теория/Задание 1
<br>
Консоль выводит:<br>
(при использовании var)<br>
с задержкой в 3 секунды<br>
(4)Bad: undefined<br>
<br>
Варианты с помощью методов массивов:<br>
<br>
const arr = [10, 12, 15, 21];<br>
// map<br>
let a = []<br>
arr.map((num) => {<br>
    num > 13 ? a.push(`Good: ${num}`) : a.push(`Bad: ${num}`)<br>
})<br>
b= a.join(', ')<br>
setTimeout(()=>console.log(b),3000);   //Bad: 10, Bad: 12, Good: 15, Good: 21<br>
<br>
//forEach<br>
<br>
let c=[]<br>
<br>
arr.forEach(num=>{<br>
    num > 13 ? c.push(`Good: ${num}`) : c.push(`Bad: ${num}`)<br>
})<br>
d= c.join(', ')<br>
setTimeout(()=>console.log(d),3000);   //Bad: 10, Bad: 12, Good: 15, Good: 21<br>