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

// Задание 1
// Создайте класс Goods, который будет передавать 2 сво-ва (title, isSale). 
// title должен содержать имя товара, а isSale - булевый тип
// Напишите к нему метод available(), который в зависиомсти от типа isSale выводит в косноль либо "Товар есть в начлии", либо "Товара нет в наличи"
// В качестве примера предоставить 2 экзампляра с разным isSale

// class Goods {
//     constructor(title, isSale){
//         this.title = title
//         this.isSale = isSale
//     }
//     available(){
//         if(this.isSale == true){
//             console.log('Товар есть в наличии')
//         } else {
//             console.log('Товара нет в наличии')   
//         }
//     }
// }

// let good_1 = new Goods('Клавиатура', true)
// let good_2 = new Goods('Мышь', false)
// good_1.available()
// good_2.available()

// Задание 2
// написать класс Array2, который получает 1 сво-во в виде массиве данных (записать как data)
// Напиште к нему метод first(), который вернет его первый элемент.

// class Array2{
//     constructor(data){
//         this.data = data
//     }
//     first(){
//         return this.data[0]
//     }
//     check(num){
//         for(let el of this.data){
//             if(el == num){
//                 return true
//             }
//         }
//         return false
//     }
// }

// array = new Array2([10,2,3,72,7])
// console.log(array.first())
// console.log(array.check(3))


// ----------------
// Статические методы и сво-ва
// Это методы и сво-ва, которые доступны только у классов, но не у экземпляров класса

// class Data{
//     constructor(string){
//         this.string = string
//     }
//     log(){
//         console.log('Обычный метод')
//     }
// }

// let data_1 = new Data('Обычное свойство')
// console.log(data_1.string)
// data_1.log()

// --------------------------------------------

// class Data{
//     constructor(string){
//         this.string = string
//     }
//     log(){
//         console.log('Обычный метод')
//     }
//     static staticProp = 'Статическое свойство'
//     static staticMethod(){
//         console.log('Статический метод')
//     }
// }

// let data_1 = new Data('Обычное свойство')
// console.log(data_1.string)
// data_1.log()

// Статические методы и свойства вне доступа
// console.log(data_1.staticProp)
// data_1.staticMethod()

// Как тогда до них добраться?
// console.log(Data.staticProp)
// Data.staticMethod()

// -----------------------------
// Задание 3
// Напишите класс Object2 и повторите метод keys(obj). 
// Примечание: методы Object использовать нельзя.

// class Object2{
//     static keys(obj){
//         let arr = []
//         for (let keys in obj){
//             arr.push(keys)
//         }
//         return arr
//     }
// }

// console.log(Object2.keys({name: 'Alex', age: 30}))



// совйства - аксессоры get и set

// get() - аксессор, который позволяет считывать значение сво-ва объекта
// let obj = {
//     name: 'Alex',
//     age: 30,
//     get logName() {
//         return `${obj.name} возраст ${obj.age}`
//     }
// }

// console.log(obj.logName)

// -------------------
// Задание 1
// Создайте объект numbers со свойством array и геттером lastValue.
// Сво-во array должен передавать значение массива, а геттер lastValue возвращать последний элемент массива array

// let numbers = {
//     array: [1, 6, 3, 8, 0, 6, 9],
//     get lastValue() {
//         return this.array[this.array.length - 1]
//     }
// }

// console.log(numbers.lastValue)

// set() - аксессор, который позволяет присвоить (переопределить) значение сво-ва объекта

// Пример 1
// let obj = {
//     name: 'Alex',
//     set setName(value) {
//         obj.name = value
//     }
// }
// obj.setName = 'Tigran'    // присвоение значения для сеттера

// Пример 2
// let numbers = {
//     array: [1, 6, 3, 8, 0, 6, 9],
//     get lastValue() {
//         return this.array[this.array.length - 1]
//     },
//     set setArray(value){
//         let newArray = value.split(' ')
//         numbers.array = newArray
//     }
// }

// numbers.setArray = '1 2 3 4 5'
// console.log(numbers.array)

// ---------------------------
// Задача 2
// Напишите объект phone, который будет хранить 3 свойства: 
// number, isValid, setNumber 

// Сво-во number должен передевать строковый тип номера телеофна
// Сво-во isValid (getter) должен отвечать на вопрос, начинается ли номер телефона на знак +
// Если начинается, сво-во должно хранить тип true, иначе false
// Сво-во setNumber (setter) должен переопределять номер телефона по следующему правилу: 
// в качестве значение будет передаваться массив, который необходимо будет преобразовать в строку

// let phone = {
//     number: '+79964181340',
//     get isValid(){
//         return (this.number[0] == '+') ? true : false
//     },
//     set setNumber(string){
//         this.number = string.join('')
//     } 
// }


// console.log(phone.isValid)
// phone.setNumber = [8,9,9,2]     // перезаписываем значение number
// console.log(phone.isValid)


// Пример: 
// phone.setNumber = ['+',7,8,9,6,5,4,3,2]
// Результат для phone.number 
// '+78965432'



// class Phone {
//     constructor(number) {
//         this.number = number
//     }
//     get isValid() {
//         return (this.number[0] == '+') ? true : false
//     }
//     set setNumber(string) {
//         this.number = string.join('')
//     }
// }

// let phone_1 = new Phone('+79964181340')
// console.log(phone_1.setNumber = [7297383])
// console.log(phone_1.isValid)


// -------------------------------------------
// Наследование

// estends - наследование

class Car{
    constructor(model){
        this.model = model
        this.speed = 0
    }
    driving(speed){
        this.speed = speed
        console.log(`${this.model} едет со скоростью ${this.speed} км/ч`)
    }
    parking(){
        this.speed = 0
        console.log(`${this.model} припарковался`)
    }
}
// let car_1 = new Car('Tesla')
// car_1.driving(100)
// car_1.parking()
class Auto extends Car {
    constructor(model){
        super()
        this.model = model
        this.lights = false
    }
    setLights(){
        this.lights = !this.lights
        console.log(`${this.model} ${this.lights ? 'вкючил' : 'выключил'} габаритный цвет`)
    }
}

let car_2 = new Auto('Tesla')
car_2.driving(100)
car_2.parking()
car_2.setLights()
car_2.setLights()

// ---------------------------
// ДЗ
// В программе создан класс Permissions, свойства которого описывают права пользователей на редактирование статей на сайте. 
// Создайте новый класс User, который наследуется от класса Permissions. Дополнительно в классе User добавьте свойство name, 
// значение которого класс принимает в качестве аргумента конструктора.
// class Permissions {
//     constructor() {
//         this.create = false
//         this.read = true
//         this.update = false
//         this.remove = false
//     }
// }