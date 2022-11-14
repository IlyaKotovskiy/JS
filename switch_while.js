let price = 10000 
let range = "year"

switch(range){
    case 'day':
        console.log(`${price} р в день`)
        break
    case 'year':
        console.log(`${price} р в год`)
        break
    case 'week':
        console.log(`${price} р в неделю`)
        break
}



// WHILE 



// let i = 0
// while (i <= 10){
//     console.log(i)
//     i++
// }

// Выведите каждую букву переменной 
// word = 'велосипед'
// let i = 0
// while (i < word.length){
//     console.log(word[i])
//     i = i + 2
// }





// DO WHILE 


// let i = 0

// do {
//     console.log(i)
//     i++
// } while (i < 5)


// Задана переменная num, которая хранит числовое значение. Сформируйте строку, которая хранит диапазон чисел от 1 до значения переменной num согласно примеру:

// let num = 5
// let i = 1
// let result = ``

// do{
//     result += i
//     i++
// } while(i <= num)

// console.log(result)


// Результат:

// '12345'



// Заданы 2 переменные start и end.
// Сформируйте диапазон чисел от start и end, кратные значению 5.

// Пример:
// let start = 10
// let end = 28
// let i = start

// while(i <= end) {
//     if (i % 5 == 0) {
//         console.log(i)
//     }
//     i++
// }

// Результат:
// 10
// 15
// 20
// 25




// Задана переменная num
// которая хранит числовое значение.
// Сформируйте число, значение которого формируется из суммы диапазона чисел от 1 до num, возведенные в квадрат.

// let num = 3
// let i = 1
// let result = 0
// while (i <= num) {
//     result += i*i
//     i++
// }
// console.log(result)

// Ответ (с пояснением)
// 1^2 + 2^2 + 3^2
// 1 + 4 + 9
// Результат 14



// В цикле задайте диапазон чисел от 1 до num. Выведите в консоль только те цифры, из которых вычисляется квадратный корень:

let num = 5
let i = 1
while (i <= num) {
    if (Math.sqrt(i) % 1 == 0){
        console.log(i)
    }
    i++
}


// Ответ: 4