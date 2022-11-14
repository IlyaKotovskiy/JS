// let a = 'gay'    // переменная let
// console.log = a

// const a = 'строка'
// console.log(a)
// a = 'влад'
// console.log(a)  // переменная const нельзя переназначить

// let a = "EA games"
// let a = 'EA games'
// let a = `EA games`

// let n = 1
// console.log(typeof(n))  // выявить тип данных 

// let nig = 'ниг'    //конкатенация
// let ger = 'гер'
// console.log(nig + ' ' + ger)
// console.log(`${nig}овори так больше!`)

// let a = 10
// console.log(`А равен ${a}`)
// let b = 50
// console.log(`Б равен ${b}`)
// let c = (a/b)*100
// console.log(`Процент A от Б = ${c}%`)




// 2 пара




// Объект Math

// Math.floor() - округляет число вниз
// Math.ceil() - округляет число вверх
// Math.round() - округляет по правилам математики

// let a = Math.floor(2,3)
// let b = Math.ceil(4,7)
// let c = Math.round(4,4793)

// console.log(a)
// console.log(b)
// console.log(c)


// Math.abs() - всегда положительное число
// Math.sign() - если число положительное, возвращает 1, если нет то -1, если число равно нулю, то возвращает 0 (1,0,-1)

// Math.min() - мин значение
// Math.max() - макс значение
// Math.random() - рандом

// Задача 1

// let rnd = Math.floor(Math.random() * 101)
// console.log(rnd)


// Задача 2
// Заданы 2 переменные с противоположным числовым значением. Введите модуль их разницы

// let rnd1 = Math.floor(Math.random() * 101)
// console.log(`Первая переменная = ${rnd1}`)
// let rnd2 = Math.floor(Math.random() * 101)
// console.log(`Вторая переменная = ${rnd2}`)
// let raz = Math.abs(rnd1-rnd2)
// console.log(`Разница: ${raz}`)


// parseInt() - функция преобразования строки в число

// let int1 = parseInt('100px')  //100
// let int2 = parseInt('px100')  //NaN
// let int3 = parseInt('10.0px')  //10
// let int4 = parseInt('10,0px')  //10

// console.log(int1, int2, int3, int4)

// parseFloat() - функция преобразования строки

// let a1 = parseFloat('100px')  //100
// let a2 = parseFloat('px100')  //NaN
// let a3 = parseFloat('10.0px')  //10
// let a4 = parseFloat('10,0px')  //10

// console.log(a1, a2, a3, a4)

// Заданы 4 переменные с значениями CSS-свойств. Определите максимальное значение и выведите результат в консоль

// let a = parseFloat('11.5001px')
// let b = parseFloat('11.499em')
// let c = parseFloat('11.49fr')
// let d = parseFloat('-11.5px')
// console.log(Math.max(a,b,c,d))




// 13.09.22



// Типы данных

// String
// let a = 'Hello'


// Boolean
// true false 
// Операторы сравнения <, >, <=, >=, ==, !=
// console.log(10>11)
// console.log(10>9)
// console.log(10==10)
// console.log(10<11)
// console.log(10<=11)
// console.log(10!=11)
// console.log(true > false)




// Индексация
// let b = a[3]
// console.log(b)



// Методы и свойства

// let b = a.length  //- длина строки = 5
// let c = a.toLowerCase() //- маленькие буквы = hello
// let f = a.toUpperCase() //- большие буквы = HELLO

// console.log(f)


// Логические операторы
// && (И)
// || (ИЛИ)
// ! (НE)

// console.log(10 > 5 && 5 > 8)   false 
// console.log(10 > 5 || 5 > 8)  true
// console.log((10 > 5 && 5 > 8) || (10 < 5 && 10 > 8)) false 



// Задача 1

// let car = 'ftdg'
// let carLen = car.length
// let carWord = car[carLen - 1]

// console.log(carWord)


// Задача 2

// let word_1 = 'Клавиатура'
// let word_2 = 'Монитор'
// console.log(word_1.length > word_2.length)



// Условный оператор

// let b = Math.floor(Math.random() * 101)
// let c = Math.floor(Math.random() * 101)
// if(b > c){
//     console.log(`${b} больше ${c}`)
// } else {
//     console.log(`${b} меньше ${c}`)
// }

// В программе задана переменная speed с числовым значением. Реализуйте программу, которая в зависимости от условия выполняет следующее действие:// если значение от 0 до 30 включительно, выведите строку "Вы едете слишком медленно";
// если значение от 31 до 70 включительно, выведите строку "Вы едете с нормальной скоростью";
// в ином случае выведите Вы едете слишком быстро, "сбавьте скорость"// Пример значений переменных:

// let speed = Math.floor(Math.random() * 61)
// if (speed >= 0 && speed <= 30) {
//     console.log(`Вы едете слишком медленно: ${speed } км/ч`)
// } else if (speed >= 31 && speed <= 70) {
//     console.log(`Вы едете с нормальной скоростью: ${speed} км/ч`)
// } else {
//     console.log(`Вы едете слишком быстро! Ваша скорость ${speed} км/ч`)
// }


// В программе объявлена переменная task, в которой записано одно из строковых значений: удалить, переименовать, редактировать. Напишите программу, которая выводит в консоль:

// delete – при значении task – удалить;
// rename – при значении task – переименовать;
// edit – при значении task – редактировать.


// Пример значений переменных:
// let task = "Переименовать"
// let taskNew = task.toLowerCase()
// if (taskNew == 'переименовать') {
//     console.log('rename')
// } else if (taskNew == 'удалить') {
//     console.log('delete')
// } else if(taskNew == 'редактировать') {
//     console.log('edit')
// }


// Унарный оператор

// let a = 10
// let result = (a>5) ? 'а больше 5' : 'а меньше 5'
// console.log(result)


// let word_1 = 'Нормуль'
// let word_2 = 'Нормааааально'
// let result = (word_1.length > word_2.length) ? `YES` : `NO`
// console.log(result)


// let speed = Math.floor(Math.random() * 81)
// let result = (speed >= 0 && speed <= 30) ? `Вы едете слишком медленно: ${speed } км/ч` : (speed >= 31 && speed <= 70) ? `Вы едете с нормальной скоростью: ${speed} км/ч` : `Вы едете слишком быстро! Ваша скорость ${speed} км/ч`
// console.log(result)

// let c = '1c'
// let result = 'b' + 'a' + +c
// console.log(result)



// let i = 0
// while (i < 5) {
//     console.log(i)
//     i++
// }



// Используя цикл, сформируйте строку, которая переворачивает слово.
// let word = `велосипед`
// let i = word.length-1
// let result = ``

// while (i >= 0){
// result += word[i]
// i--
// }
// console.log(result)

// Пример результата: деписолев


// let array = [1,2,3,4,5,6]

// for(let i = 1; i < array.length; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     } else {
//         console.log('none')
//     }
// }

