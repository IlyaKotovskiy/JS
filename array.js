// введение в массив

// Тип данных array 

// let array = [1,'второй',3,"4",5, true, [1,2,3]]
// console.log(array) - (7) [1, 'второй', 3, '4', 5, true, Array(3)]
// console.log(array.length) - 5 (Длина массива по количеству элементов)
// console.log(array[6][2])


// let array = [1,2,3,4]
// array[4] = 5                 добавление в массив

// array[array.length] = 5      добавление в массив

// array[0] = 'один'            изменение существуещего элемента в массиве

// delete array[0]              удаление элемента массива(удалится элемент, но не удалится индекс)

// console.log(array)




// Задача 1

// Выведите все элементы массива array

// let array = [1,2,3,4]

// for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }


// Задача 2

// Задан пустой массив array и переменная num с числовым значением.
// Используя num сформируйте новые элементы для массива array по примеру:

// let array = []
// let num = 8

// for(let i = 0; i < num; i++) {
//     array[i] = i + 1
// }
// console.log(array)

// Результат:
// [0,1,2,3,4,5,6,7]


// Задача 3
// Задан массив данных array, передающий произвольные значение
// Выведите список значений, чей тип равен булевому
// Пример

// let array = [1,true,'string',false,0,100]

// for (let i = 0; i < array.length; i++) {
//     if(typeof(array[i]) == 'boolean') {
//         console.log(array[i])
//     }
// }

// Результат:
// true
// false
