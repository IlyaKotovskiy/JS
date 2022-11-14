// console.log(' '.repeat(n)) повторит вывод n количество раз

// function logHello(name){     //в скобках, это АРГУМЕНТ
//     console.log('_* '.repeat(12))
//     console.log('Дорогой дневник...' + name)
//     console.log('_* '.repeat(12))
// }

// logHello(' тоесть блокнот') //вызываем функцию


// function sum(a,b){
//     console.log(a*b)
// }

// sum(10,20)


// Задача 1
// В программе объявлены две переменные — value и total, в которых записаны числовые значения.
// Напишите функцию getPercent(value, total), которая возвращает процент числа value от значения total.
// Вызовите эту функцию с value и total в качестве аргументов.
// Результат работы функции выведите в консоль. Пример значений переменных:
// let value = 4
// let total = 80

// function getPercent(value, total){
//     console.log((value * 100) / total + '%')
// }

// getPercent(value, total)
// Пример результата: 5


// Задача 2
// Напишите функцию cal(a,b,sign), которая в зависимости от аргумента sign выполняет метаметические операции с перменными а и b

// let a = 12
// let b = 6
// let sign = '+'

// function cal(a,b,sign){
//     switch(sign){
//         case '+' :
//             console.log(a+b)
//             break
//         case '-' :
//             console.log(a-b)
//             break
//         case '*' :
//             console.log(a*b)
//             break
//         case '/' :
//             console.log(a/b)
//     }
// }

// cal(a,b,sign)


// Задача 3
// Напишите функцию checkEven(word), которая проверяет,
// дейстаительно ли длина строки является четным чилсом.
// Если это так - функция должна вернуть ответ в консоль YES, в противном случае NO


// function checkEven(word){
//     if(word.length % 2 == 0){
//         console.log('YES')
//     } else {
//         console.log('NO')
//     }
// }

// checkEven('wrt')




// Массив в функции




// function handler(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }

// handler([2,3,4,5])


// Задача 1

// Напишите функцию getSum(array), которая в качестве аргумента передает массив. Выведите в консоль сумму всех элементов

// function getSum(array){
//     let sum = 0
//     for(let i = 0; i < array.length; i++){
//         sum += array[i]
//     }
//     console.log(sum)
// }

// getSum([1,2,3,4,5])

// Результат:
// 15

// Задача 2

// Напишите функцию sumNumbers(num), которая в качестве аргумента принимает числовое значение.
// В рамках функции посчитайте сумму от 1 до num, с шагом 5

// Пример:
// function sumNumbers(number){
//     let num = 0;
//     for(let i = 1; i <= number; i++){
//         if(i % 5 == 0){
//             num += i
//         }
//     }
//     console.log(num)
// }

// sumNumbers(19)
// Ответ: 30


// Задача 3

// Напишите функцию getSum(array), которая в качестве аргумента передает массив.
// Выведите в консоль среднее арифметическое значение всех числовых элементов.
// Примечание: В функции должна быть проверка каждого элемента на тип


// Пример:
// function getSum(array){
//     let result = 0
//     let count = 0
//     for(let i = 0; i < array.length; i++){
//         if(typeof array[i] == 'number'){
//             result += array[i]
//             count++
//         }
//     }
//     console.log(result/count)
// }

// getSum([1,2,true,3,4,5,'Строка'])

// Результат:
// 3


// Задача 4

// Создайте функцию getNumberArray(array), которая в качестве аргумента принимает массив данных.
// Функция должна вывести в консоль преобразованный массив, чьи значения отличимы от типа number

// Пример:
// function getNumberArray(array){
//     let result = []
//     for(let i = 0; i < array.length; i++){
//         if(typeof array[i] == 'boolean' || typeof array[i] == 'string'){
//             result[result.length] = array[i]
//         }
//     }
//     console.log(result)
// }

// getNumberArray([1,2,true,3,false,'тест'])

// Результат:
// [true,false,'test']



// Задача 5

// Напишите функцию getString(), которая в качестве аргумента принимает массив. 
// Элементы массива хранят произвольные типы.
// Функция должна сформировать из всех СТРОКОВЫХ элементов массива 1 строку, разделяя каждый элемент пробелом.

// Пример:

// function getString(array){
//     let result = ''
//     for(let i = 0; i < array.length; i++){
//         if(typeof array[i] == 'string'){
//             result += array[i] + ' '
//         }
//     }
//     console.log(result)
// }

// getString([1,'test',true,'hello'])

// Результат: 'test hello '





// -----------------------------------------------------
// return 


// function quad(num){
//     console.log(num ** 2)
//     return 5
// }

// let a = quad(5)
// console.log(a)



// Задача 1

// Создайту функцию getLastElem(array), которая в качестве аргумента принимает массив. Функция должна вернуть
// последний элемент массива. Результат выполнения сохраните в переменную result и выведите в консоль

// function getLastElem(array){
//     return array[array.length-1]
// }

// let result = getLastElem(['первый', 'второй', 'последний', 5])
// console.log(result)



// Задача 2

// Создайту функцию getRandomtElem(array), которая в качестве аргумента принимает массив. Функция должна ВЕРНУТЬ
// рандомный элемент массива. Результат выполнения сохраните в переменную result и выведите в консоль

// function getRandomtElem(array){
//     return array[Math.floor(Math.random() * array.length)]
// }

// let rnd = getRandomtElem([2,6,9,3,8,0,2,5])
// console.log(rnd)


// Задача 3


// Напишите функцию getRandom(), которая должна ВЕРНУТЬ рандомное число от 1 до 100.
// Используйте эту функцию, чтобы циклично заполнить массив (создать 5 элементов)



// 1) Создать функцию getRandom()
// function getRandom(){
//     return Math.floor(Math.random() * 101)
// }

// 2) Сделать цикл, в котором определяется пустой массив [], и заполняется новыми элементами
// let arrayRnd = []
// for(let i = 0; i < 5; i++){
//     arrayRnd[i] = getRandom()
// }
// console.log(arrayRnd)

// 3) В качестве значения элемента использовать функцию getRandom()






// ------------------------------------

// Function declaration 

// function quad(num){
//     return num ** 2
// }

// console.log(quad(5))




// function expression

// Анонимная функция
// let handler = function quad(num){
//     return num ** 2
// }

// console.log(handler(7))

// Стрелочная функция
// let quad = (num) => num ** 2
// console.log(quad(5))





// ----------------------------------
// Задача 1
// Напишите функцию getRandomNumber(num), которая может вренуть
// рандомное число от 0 до num. Напишите функцию используя все 3
// вариант инициализации.

// 1 способ

// function getRandomNumber(num){
//     return Math.floor(Math.random() * num)
// }

// console.log(getRandomNumber(76))

// 2 способ

// let getRandomNumber = function quad(num){
//     return Math.floor(Math.random() * num)
// }

// console.log(getRandomNumber(7))

// 3 способ

// let getRandomNumber = (num) => Math.floor(Math.random() * num)
// console.log(getRandomNumber(64))




// Задача 2


// Напишите функцию getRandom(), которая должна ВЕРНУТЬ рандомное число от 1 до 100.
// Используйте эту функцию, чтобы циклично заполнить массив.

// 1) Создать функцию getRandom()
// let getRandom = () => Math.ceil(Math.random() * 99)

// 2) Создать функцию getArray(n), которая возвращает массив с n-ым количеством элементов.

// function getArray(num){
//     let mass = []
//     for(let i = 0; i < num; i++){
//         mass[mass.length] = getRandom()
//     }
//     return mass
// }
// console.log(getArray(20))

// Примечание:
// Функция getRandom() должна использоваться в функции getArray()




// --------------------------------------


// Колбек - функуция
// let checkNumber = (arr, func2) => {
//     if (typeof arr != 'string'){
//         console.log('Введенное значение не является строкой')
//         return
//     }
//     if (isNaN(+arr)){
//         console.log('Строка не преобразовывается в число')
//     } else {
//         func2(+arr)
//     }
// }
// let quad = (elem)=> console.log(elem ** 2)
// checkNumber(100, quad)


//---------------------------------
// Пример 2
// function getArray(n, func1){
//     let array = []
//     for (let i = 0; i < n; i++){
//         array[i] = func1()
//     }
//     return array
// }
// let result = getArray(5, ()=> Math.ceil(Math.random()*100))
// let result1 = getArray(5, ()=> 5)
// console.log(result1)




// Задача 1

// Задан массив array с числовым данных. Сформируйте функцию changeElem, которая принимает в аргументе массив и колбек.
// Колбек должен возвести каждый элемент в квадрат. Функция changeElem должна вернуть НОВЫЙ массив

// Пример:
// function changeElem(arr, callback){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = callback(arr[i])
//     }
//     return arr
// }

// let result = changeElem([1,2,3,4], (elem) => elem ** 2)
// console.log(result)

// Результат:
// [1,4,9,16]

