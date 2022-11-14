// Работа с датой. Класс Date
// Инициализация даты
// 3 подхода


// 1ый
// let date = new Date('2022-10-17 15:40:00')


// 2ой
// let date = new Date(2022, 9, 17, 15, 40) (месяц начинается с 0)


// 3ий
// Представление даты в виде числа (количество милисекунд начиная с 1970 года 1 янаваря)
// let date = new Date(30*365*24*60*60*1000 + 7*24*60*60*1000) - 2000 1 января 


// ----------------
// Текущий момент времени
// 2 подхода
// 1ый
// let date = new Date()        -- текущая дата
// 2ой
// let now = Date.now()             -- колличество милисекунд начиная с 1970 года до текущего момента времени
// let date = new Date(Date.now())
// console.log(date)





// 1 задача
// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики


// let date1970 = Math.round(new Date()/1000/60/60)

// console.log(date1970)



// Методы даты

// getTime() позволяет получить кол-во пройденных милисекунд уже заданной даты
// let date = new Date('2020-10-19')
// console.log(date.getTime())



// 2 задача
// Какое количество дней прошло с начала 2000 года до текущего момент времени?
// Примечание: полученное значение округлите по правилам математики

// let date2000 = new Date('2000-01-01')
// let dateNow = new Date()
// let newDate = Math.round((dateNow.getTime()-date2000.getTime()) / 1000 / 60 / 60 / 24)
// console.log(newDate)



// ----------------------------------------------------
// Другие методы даты
// 1-й пак методов получает уже компоненты уже заданной даты

// let date = new Date('2000-01-01 15:30:30:670')

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())

// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())
// console.log(date.getTime())                    -получение даты и времени в милисекундах


// Так же можно переопределять значения в этих методах
// console.log(date.setFullYear(2034))
// console.log(date.setMonth(04))
// console.log(date.setDate(21))

// console.log(date.setHours(17))
// console.log(date.setMinutes(59))
// console.log(date.setSeconds(23))
// console.log(date.setMilliseconds(980))



// Задача 3
// Создайте новую дату, которая будет отличаться на 5 лет (+) от текущий даты.

// let date = new Date()
// date.setFullYear(date.getFullYear()+5)
// console.log(date)


// Компонент который мы не видим
// Метод getDay() возвращает день недели
// 0 - воскресение
// 1 - понедельник
// 2 - вторник
// 3 - среда
// 4 - четверг
// 5 - пятница
// 6 - суббота

// let date = new Date()
// console.log(date.getDay())


// Задача 4
// Напишите функцию checkDate(date), которая получает дату и  проверяет, является ли год в дате високосным.
// Если да - функция должна вернуть true, в противном случае false
// Високосным годом считать год, который делиться на 4 без остатка

// let date = new Date('2023-07-29 15:30:00')
// function checkDate(date){
//     return date.getFullYear() % 4 == 0
// }

// console.log(checkDate(date))



// Задача 3.
// Напишите функцию logDay(date), которая в качестве аргумента принимает даты и ВЫВОДИТ в консоль день недели даты по примеру:
// Если дата будет текущая - функция должна вывести сообщение:
// 'Сегодня среда'


// 1 решение
// let date = new Date()
// function logDay(date){
//     switch(date.getDay()){
//         case 0 :
//             console.log('Сегодня воскресенье')
//             break
//         case 1 :
//             console.log('Сегодня понедельник')
//             break
//         case 2 :
//             console.log('Сегодня вторник')
//             break
//         case 3 :
//             console.log('Сегодня среда')
//             break
//         case 4 :
//             console.log('Сегодня четверг')
//             break
//         case 5 :
//             console.log('Сегодня пятница')
//             break
//         case 6 :
//             console.log('Сегодня суббота')
//     }
// }

// logDay(date)



// 2 решение
// let date = new Date()
// function logDay(date){
//     let days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота']
//     console.log(`Сегодня ${days[date.getDay()]}`)
// }

// logDay(date)







// -------------------------------------------------------------
// ------------------------СРАВНЕНИЕ ДАТ------------------------
// -------------------------------------------------------------



// let date1 = new Date('2022-10-21')
// let date2 = new Date('2022-10-21')

// console.log(date1 == date2)                                    -false
// console.log(date1.getTime() == date2.getTime())                -true 




// Математическое выражение
// let date1 = new Date('2022-10-21')
// let date2 = new Date('2022-10-10')

// console.log(date1.getTime() - date2.getTime())                 -число в милисекундах
// console.log(date1 + date2)                                     -конкатенация



// -------------------------------------------------------------
// ----------------------Из даты в строку-----------------------
// -------------------------------------------------------------


// let date = new Date('2022-10-21 15:30:30')

// let string = date.toLocaleString('ru-RU')  'it-IT' 'en-US'
// Дата + момент времени
// 21.10.2022, 15:30:30
// console.log(string)

// let string = date.toLocaleTimeString('ru-RU')
// Момент времени
// 15:30:30
// console.log(string)

// let string = date.toLocaleDateString('ru-RU')
// Дата
// 21.10.2022
// console.log(string)


// -------------------------------------------------------------
// --------------Второй аргумент метода options-----------------
// -------------------------------------------------------------

// let date = new Date(`2022-10-25 15:30:30`)
// let options = {year:'numeric', month:`long`, day:`numeric`}
// let string = date.toLocaleString(`ru-RU`, options)
// console.log(string)






// Задача 1.
// Напишите функцию endDay(), которая возвращает количество секунд до конца текущего дня.

// let date = new Date()
// function endDay(){

// }

// endDay()



// Задача 2
// Напишите функцию checkDate() которая в консоль отобразит сколько дней осталось до конца месяца.
// Примечание: инициализация дат должна быть внутри функции

// function checkDate(){
//     let crDate = new Date()
//     let nxDate = new Date(crDate.getFullYear(), crDate.getMonth()+1)
//     let result = Math.floor((nxDate.getTime() - crDate.getTime()) / 1000 / 60 / 60 / 24)
//     console.log(result)
// }

// checkDate()






// ------------------------------------------------
// Объекты 

// let obj = new Object({name: 'Tigran', age: 29})

// let obj = {
//     name: 'Tigran',
//     age: 29,
//     isJob: true
// }

// Взаимодейсвтие с объектом
// let obj = {
//     name: 'Tigran',
//     age: 29,
//     isJob: true
// }

// 1 вариант
// console.log(obj['name'], obj['age'])

// 2 вариант
// console.log(obj.name, obj.age)

// ---------
// Создание нового сво-ва
// let obj = {
//     name: 'Tigran'
// }

// obj.name = 'Alex'           - переопределение сво-ва
// obj.lastname = 'Movsisyan'  - создание нового сво-ва

// console.log(obj)

// -----------
// Удаление сво-ва
// let obj = {
//     name: 'Tigran',
//     age: 29
// }

// delete obj.age
// console.log(obj)



// --------------------------------
// Сравнение объектов

// let user1 = {
//     id: 1,
//     username: "user"
// }

// let user2 = user1
// delete user1.id
// user2.choto = 202

// console.log(user1)
// console.log(user2)



// JSON.stringify() - метод, который переобразовывает объект в json (строку)
// JSON.parse() - метод, который преобразовывает json в объект
// let user1 = {
//     id: 1,
//     username: "user"
// }

// let user2 = {
//     id: 1,
//     username: "user"
// }


// console.log(JSON.stringify(user1))
// console.log(JSON.stringify(user2))
// console.log(JSON.stringify(user1) == JSON.stringify(user2))



// -------------------------------------
// Цикл для объекта

// let object = {
//     id: 1,
//     username: "user",
//     city: "Moscow",
//     name: "Ilya"
// }

// for(i in object){
//     console.log(i)
// }
// Тем самым получим перебор ключей


// Если нужны только значения
// let object = {
//     id: 1,
//     username: "user",
//     city: "Moscow",
//     name: "Ilya"
// }

// for(i in object){
//     console.log(object[i])
// }


// И то и то
// let object = {
//     id: 1,
//     username: "user",
//     city: "Moscow",
//     name: "Ilya"
// }

// for(i in object){
//     console.log(`${i} - ключ, ${object[i]} - значение`)
// }



// Задача 1 
// Используя цикл, выведите все значения объекта с числовым набором данных.
// Пример:

// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1,
// }

// for(i in obj){
//     if(typeof obj[i] == 'number'){
//         console.log(obj[i])
//     }
// }




// Задача 2
// Используя цикл, выведите значения сво-св, у которых 
// значение ключа завершатся на четное число. 
// Пример:

// let obj = {
//     char1 : 1,
//     char2 : 'string',
//     char3 : 3,
//     char4 : true,
//     char5 : 'false',
//     char6 : 1
// }

// for(key in obj){
//     if(key[4] % 2 == 0){
//         console.log(obj[key])
//     }
// }

// Результат:
// string
// true
// 1



// Задача 3
// Используя цикл, определите первый элемент, где встречается булевое заначение и удалите его. 
// Пример:

// let obj = {
//     name: 'Alex',
//     age: 25,
//     isJob: true,
//     some: 'text',
//     test: false
// }

// for(i in obj){
//     if(typeof obj[i] == 'boolean'){
//         delete obj[i]
//         break
//     }
// }

// console.log(obj)

// Результат:
// {
//     name: 'Alex',
//     age: 25,
//     some: 'text',
//     test: false
// }

// Задача 4
// Напишите функцию createObject(n), которая будет возвращать новый объект по прицницпу: 
// Аргумент n - это число сво-св, которое должно определиться на выходе. Ключи и значения сформировать по следующему формату: 
// Пример: 

function createObject(n) {
    let obj = {}
    for (i = 1; i <= n; i++) {
        obj['char' + i] = i * 10
    }
    return obj
}

console.log(createObject(4))

// Результат: {
//     char1: 10,
//         char2: 20,
//             char3: 30,
//                 char4: 40
// }