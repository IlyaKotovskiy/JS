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

