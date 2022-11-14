// -------------------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------------------
// Создание нового сво-ва
// let obj = {
//     name: 'Tigran'
// }

// obj.name = 'Alex'           - переопределение сво-ва
// obj.lastname = 'Movsisyan'  - создание нового сво-ва

// console.log(obj)

// ----------------------------------------------------------------------------------------------------
// Удаление сво-ва
// let obj = {
//     name: 'Tigran',
//     age: 29
// }

// delete obj.age
// console.log(obj)



// ---------------------------------------------------------------------------------------------------
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


//----------------------------------------------------------------------------------------------------
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



// ----------------------------------------------------------------------------------------------------
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
// console.log(obj[3])
// for(i in obj){
//     if(typeof obj[i] == 'number'){
//         console.log(obj[i])
//     }
// }


// -------------------------------------------------------------------------------------------------
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

// --------------------------------------------------------------------------------------------------
// Создание нового сво-ва
// let obj = {
//     name: 'Tigran'
// }

// obj.name = 'Alex'           - переопределение сво-ва
// obj.lastname = 'Movsisyan'  - создание нового сво-ва

// console.log(obj)

// ----------------------------------------------------------------------------------------------------
// Удаление сво-ва
// let obj = {
//     name: 'Tigran',
//     age: 29
// }

// delete obj.age
// console.log(obj)



// ---------------------------------------------------------------------------------------------------
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


//----------------------------------------------------------------------------------------------------
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



// ----------------------------------------------------------------------------------------------------
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
// console.log(obj[3])
// for(i in obj){
//     if(typeof obj[i] == 'number'){
//         console.log(obj[i])
//     }
// }



//Методы класса Object
// let obj ={
//     name:10,
//     age:1,
//     id:50
// }
// Object.keys() //Возвращает массив, который передает все ключи объекта
// Object.values() //Возвращает массив, который передает все Значения Свойств объекта
// Object.entries() //Возвращает массив, который передает пару КЛЮЧ-Значения Свойств объекта
// let obj = {
//     name:'Alex',
//     age:21,
//     salary:1500
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
//----------------------------------------------------------------------------------------
//Object.assign() - возвращает объект, который передает аме мв-ва двух переданных объектов
// let obj1 = {
//     name:'Alex',
//     age:21,
//     salary:1500
// }
// let obj2 = {
//     name:'Alex2',
//     age:212,
//     salary:15002
// }
// let obj = Object.assign(obj1,obj2)
// console.log(obj)
// console.log(obj1)
// console.log(obj2)
 //-------------------------------------------------------------------------------------------
 //копирование объектов
//  let user = {
//     name:'Alex',
//     age:21,
//     salary:1500
//  }
//  let user_copy = Object.assign({},user)
//  console.log(user)
//  console.log(user_copy)
 //----------------------------------------------------------------------------------------
 // Задача 1.
// Напишите аналог метода Object.keys, в функцию getKeys(obj). Функция должна вернуть массив:
// Примечание: методами Object пользоваться нельзя
// Пример: 
// let obj = {
//     name: 'Alex',
//     salary: 1000,
//     isJob: true
// }
// Результат: [ 'name', 'salary', 'isJob' ]
// function getKeys(o){
//     let m =[]
//     for(i in o){
//         m[m.length]=i
//     }
//     return(m)
// }
// console.log(getKeys(obj))
//----------------------------------------------------------------------------------------------
// Задача 2. 
// Сделать аналог метода Object.entries(), сформировав функцию getEntries(obj)
// Примечание: методами Object пользоваться нельзя
// Результат:
// [ [ 'name', 'Alex' ], [ 'salary', 1000 ], [ 'isJob', true ] ]
// let obj = {
//     name: 'Alex',
//     salary: 1000,
//     isJob: true
// }
// function getEntries(o){
//         let m =[]
//     for(i in o){
//         m[m.length]= [i,o[i]]
//     }
//     return(m)
// }
// console.log(getEntries(obj))
//-------------------------------------------------------------------------------------------
// Заданы три объекта: 
let user_11 = {id: 1}
let user_12 = {username: 'user'}
let user_2 = {
    id: 1,
    username: 'user'
}
// Задача: объедините user_11 и user_12 в один объект 
// и сравните результат с объектом user_2. 
// В качестве ответа необходимо получить булевый тип

console.log(JSON.stringify(Object.assign(user_11,user_12))==JSON.stringify(user_2))