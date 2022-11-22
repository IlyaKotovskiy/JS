// Задание 1
// Задан объект, передающий n-ое количество сво-ств. Посчитайте итоговую сумму значений сво-ств.
// Пример:

let obj = {
    price1: 100,
    price2: 150,
    price3: 200,
    price4: 100,
    price5: 150
}

let sum = 0
for(i in obj){
    sum += obj[i] 
}

console.log(sum)

// Результат: 700

// Задание 2
// Задан массив, элементы которого передают объекты.Напишите программу,
// которая преобразует каждый объект в массиве в новый массив, который будет содержать только значений свойств.
// Пример:

let array = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'watermelon' },
    { id: 3, name: 'qiwi' },
    { id: 4, name: 'lemon'}
]

let values = []
for (let i in array) {
    values.push(Object.values(array[i]))
}
console.log(values)

// Результат:
// [
//     [1, "apple"],
//     [2, "watermelon"],
//     [3, "qiwi"],
//     [4, "lemon"]
// ]

// Задание 3
// Напишите функцию logString, которая в качестве аргументы принимает n - ое количество аргументов и выводит
// строку в консоль по примеру:

function logString(...rest) {
    let string = ""
    for (i in rest) {
        string += rest[i] + " "
    }
    return string
}

console.log(logString("Hello", "my", "world!"))

// Результат: "Hello my world! "

// Задание 4
// Напишите функцию сheckObj(obj), которая принимает в качестве аргумента объект и проверяет,
// существует ли в нем ключ particle с любым значением.Если существует - функция должна вернуть true, иначе false

// Пример:

function checkObj(obj) {
    for (i in obj) {
        if (i == "particle") {
            return true
        }
    }
    return false
}

console.log(checkObj({ id: 1, particle: 10 }))
console.log(checkObj({ id: 2, name: "tag" }))

// Результат:
// true
// false

// Задание 5
// Напишите функцию generateArray(array).Функция получает массив и должна проверить, существует ли в этом массиве объект.
// Если объект определится - его необходимо преобразовать в массив, элементы которого будут передавать значения сво - ств.
// Функция должна вернуть измененный массив

// Примечание:
// Необходимо изменить текущий массив.
// Для проверки можно использовать метод Array.isArray()
// Пример:

let array2 = [[1], { id: 40 }, [100], [300], { part: 10 }]
function generateArray(array){
    for(i in array){
        if(Array.isArray(array[i]) == false){
            array[i] = Object.values(array[i])
        }
    }
    return array
}
console.log(generateArray(array2))

// Результат:
// [[1], [40], [100], [300], [10]]
