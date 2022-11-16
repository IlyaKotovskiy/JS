// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// let num = 5
// let fac = 1
// for (let i = 1; i <= num; i++) {
//     fac = fac * i
// }

// console.log(fac)

// let x = 10
// let y = 20
// let day
// for (let i = 1; x < y; i++) {
//     x *= 1.1
//     day = i
// }

// console.log(day)

// let word = `Грант`
// for (let i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase != `н`) {
//         console.log(word[i - 1])
//     } else {
//         console.log(word[i - 1])
//         break
//     }
// }

// Добавление в массив какого - либо значения
// array[array.length] = value



// Взаимодейсвтвие с массивом

// push(n)      - метод, добавляющий аргумент n в конец массива
// pop()        - метод, удаляющий последний элемент в массиве
// unshift(n)   - метод, добавляющий аргумент n в начало массива
// shift()      - метод, удаляющий первый элемент в массиве

// let array = [1,2,3]

// array.pop()          - удалит элемент 3
// array.shift()        - удалит элемент 1
// array.push(4)        - добавит аргумент 4 в конец
// array.unshift(0)     - добавит аргумент 0 в начало

// console.log(array)

// -----------------------------------
// метод splice()  - метод, позволяющий удалить и добавить элементы в любое место массива
// 1 аргумент указывает индекс старта
// 2 аргумент указывает количетсво удаляемых элементов начиная с точки старта
// 3 аргумент(и более) определяет новые элементы, которые необходимо добавить ДО 1 аргумента

// let array = [1,2,3,4,5,6,7]

// Начиная с 2 индекса удали 3 элемента
// array.splice(2,3)
// [ 1, 2, 6, 7 ]

// Начиная с 1 индекса, удали 5 элементов
// array.splice(1,5)
// [ 1, 7 ]

// Начиная с 1 индекса српава удали 1 элемента
// array.splice(-1,1)
// [ 1, 2, 3, 4, 5, 6 ]

// Добавь новый элемент 15 до 4 индекса
// array.splice(4, 0, 15)
// [1, 2, 3, 4, 15, 5, 6, 7]

// Добавь новый элемент "привет" до 4 индекса
// array.splice(4, 0, "привет", 1000,4000)
// [ 1, 2, 3, 4, 'привет', 1000, 4000, 5, 6, 7 ]

// array.splice(2,3,"три","четыре","пять")
// [ 1, 2, 'три', 'четыре', 'пять', 6, 7 ]


// console.log(array)

// -----------------------
// Задача 1
// Реализуйте следующие задачи в массиве array, используя метод splice:
// 1) В начале добавьте два элемент (1,2)
// 2) После 3 элемента добавьте значение (4)
// 3) Удалите последние 2 элемента

// let array = ['яблоко', "апельсин", "арбуз","дыня"]

// Результат: 
// [1,2,'яблоко', 4, "апельсин"]

// array.splice(0,0,1,2)
// array.splice(3,0,4)
// array.splice(-2,2)
// console.log(array)

// -----------------------
// Задача 2. 
// Напишите функцию replaceBoolElem(array), которая заменяет попавшийся булевый тип на 2 элемента массива 
// с значениями "булевый" и "тип". Функция должна вывести в косноль измененный массив

// Пример: [1,2,true,5,6]
// Результат: [1,2,"булевый","тип",5,6]

// решение

// function replaceBoolElem(array){
//     for (let i = 0; i < array.length; i++){
//         if(typeof array[i] == 'boolean'){
//             array.splice(i, 1, 'булевый', 'тип')
//         }
//     }
//     console.log(array)
// }

// replaceBoolElem([1,2,true,true,5,6])

// -------------------------
// Задача 3
// Напишите функцию addNumber(array), которая принимает массив и добавлявет элемент "Цифра" после числа согласно примеру:
// Пример: 
// let array = ['строка',1, 'hello',3 ,true]

// Результат:
// ['строка', 1, 'Цифра', 'hello', 3,'Цифра', true]

// function addNumber(array){
//     for (let i = 0; i < array.length; i++){
//         if(typeof array[i] == 'number'){
//             array.splice(i+1, 0, 'Цифра')
//         }
//     }
//     console.log(array)
// }