// введение в ООП

// Шаблонизатор (функция)
// function createUser(name, age){
//     return {
//         name: name,
//         age: age,
//         log: function(){
//             console.log(`${this.name} говорит привет!`)
//         }
//     }
// }

// экземпляр шаблонизатора createUser
// let user_1 = createUser('Alex',20)

// let user_2 = createUser('Steven',25)

// let user_3 = createUser('Neena',28)


// --------------------
// Мини-задание по теме
// Создать шаблонизатор createNumbers(num), который формирует объект с 1 свойоством (numeric), 
// значение которого будет передавать аргумент num, а также:
// 1) метод quad(), который выводит квадрат переданного в шаблонизатор num в консоль.
// 2) метод sqrt(), который выводит корень переданного в шаблонизатор num в консоль.

// Решение
// function createNumbers(num){
//     return {
//         numeric: num,
//         quad: function(){
//             console.log(this.numeric ** 2)
//         },
//         sqrt: function(){
//             console.log(this.numeric ** 0.5)
//         }
//     }
// }

// let num_1 = createNumbers(25)
// num_1.quad()

// --------------------------
// Шаблонизатор (Класс)

// class Users{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     log(){
//         console.log(`${this.name} говорит привет!`)
//     }
// }

// let user_1 = new Users('Alex', 20)
// console.log(user_1.name)
// user_1.log()