// Номер 1

// Напишите функцию checkElem(num), которая в качестве аргумента принимает число.
// Функция должна ответить на вопрос, делится ли аргумент num на 7.
// Если делится - функция должна вывести в консоль ответ true, в противном случае false.
// Пример:

// function checkElem(num){
//     if(num % 7 == 0){
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// checkElem(13)
// Результат: false


// Номер 2

// Напишите функцию changeElem(array, n), которая в качестве аргумента принимает массив и число.
// Необходимо умножить каждый элемент массива на аргумент n. Функция должна вернуть новый массив, не изменив источник (array).

// Пример: 
// let array = [1,2,3,4]

// function changeElem(array, n){
//     let newArr = []
//     for(let i = 0; i < array.length; i++){
//         newArr[newArr.length] = array[i] * n
//     }
//     return newArr
// }

// let result = changeElem(array, 3)
// console.log(result)

// Результат: [3,6,9,12]



// Номер 3


// Напишите функцию sumElems(array), которая получает в качестве аргумента массив, элементы которого содержат только строки. 
// Необходимо вернуть сумму элементов, которые при преобразовании в number не выводят результат NaN согласно примеру:

// let array = ['10','Строка','5g','15','05']

// function sumElems(array){
//     let sum = 0
//     for(let i = 0; i < array.length; i++){
//         if(isNaN(+array[i])){
//             continue
//         } else {
//             sum += +array[i]
//         }
//     }
//     return sum
// }

// let result = sumElems(array)
// console.log(result)

// Результат: 30



// Номер 4

// Напишите функцию reverseIndex(array), которая в качестве аргумента принимает массив.
// Функция должна перевернуть элементы массива и вывести в консоль новый массив согласно следующему примеру:
// Методом reverse() пользоваться нельзя.

// let array = [1,2,3,4,5]

// function reverseIndex(array){
//     let revers = []
//     for(let i = array.length - 1; i >= 0; i--){
//         revers[revers.length] = array[i]
//     }
//     console.log(revers)
// }

// reverseIndex(array)

// Результат: [5,4,3,2,1]



// Номер 5

// Напишите функцию checkElem(array, callback), которая в качестве аргумента принимает массив и колбэк-функцию.
// Функция должна проверить, существует ли в массиве элемент, который удовлетворяет условию колбэк-функции.
// Если хотя бы 1 элемент удовлетворит - функция должна вернуть ответ true, в противном случае - false

// Пример:
let array = [1,2,3,4]

function checkElem(array, callback){
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
            return true
        }
    }
    return false
}

console.log(checkElem(array, (elem) => elem == 3))

// Результат: true
