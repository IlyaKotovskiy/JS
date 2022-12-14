// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// let num = 5
// let fac = 1
// for (let i = 1; i <= num; i++) {
//     fac = fac * i
// }

// console.log(fac)

// let x = 10
// let y = 20
// let day
// for (let i = 1; x < y; i++) {
//     x *= 1.1
//     day = i
// }

// console.log(day)

// let word = `Грант`
// for (let i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase != `н`) {
//         console.log(word[i - 1])
//     } else {
//         console.log(word[i - 1])
//         break
//     }
// }

// Добавление в массив какого - либо значения
// array[array.length] = value



// Взаимодейсвтвие с массивом

// push(n)      - метод, добавляющий аргумент n в конец массива
// pop()        - метод, удаляющий последний элемент в массиве
// unshift(n)   - метод, добавляющий аргумент n в начало массива
// shift()      - метод, удаляющий первый элемент в массиве

// let array = [1,2,3]

// array.pop()          - удалит элемент 3
// array.shift()        - удалит элемент 1
// array.push(4)        - добавит аргумент 4 в конец
// array.unshift(0)     - добавит аргумент 0 в начало

// console.log(array)

// -----------------------------------
// метод splice()  - метод, позволяющий удалить и добавить элементы в любое место массива
// 1 аргумент указывает индекс старта
// 2 аргумент указывает количетсво удаляемых элементов начиная с точки старта
// 3 аргумент(и более) определяет новые элементы, которые необходимо добавить ДО 1 аргумента

// let array = [1,2,3,4,5,6,7]

// Начиная с 2 индекса удали 3 элемента
// array.splice(2,3)
// [ 1, 2, 6, 7 ]

// Начиная с 1 индекса, удали 5 элементов
// array.splice(1,5)
// [ 1, 7 ]

// Начиная с 1 индекса српава удали 1 элемента
// array.splice(-1,1)
// [ 1, 2, 3, 4, 5, 6 ]

// Добавь новый элемент 15 до 4 индекса
// array.splice(4, 0, 15)
// [1, 2, 3, 4, 15, 5, 6, 7]

// Добавь новый элемент "привет" до 4 индекса
// array.splice(4, 0, "привет", 1000,4000)
// [ 1, 2, 3, 4, 'привет', 1000, 4000, 5, 6, 7 ]

// array.splice(2,3,"три","четыре","пять")
// [ 1, 2, 'три', 'четыре', 'пять', 6, 7 ]


// console.log(array)

// -----------------------
// Задача 1
// Реализуйте следующие задачи в массиве array, используя метод splice:
// 1) В начале добавьте два элемент (1,2)
// 2) После 3 элемента добавьте значение (4)
// 3) Удалите последние 2 элемента

// let array = ['яблоко', "апельсин", "арбуз","дыня"]

// Результат:
// [1,2,'яблоко', 4, "апельсин"]

// array.splice(0,0,1,2)
// array.splice(3,0,4)
// array.splice(-2,2)
// console.log(array)

// -----------------------
// Задача 2.
// Напишите функцию replaceBoolElem(array), которая заменяет попавшийся булевый тип на 2 элемента массива
// с значениями "булевый" и "тип". Функция должна вывести в косноль измененный массив

// Пример: [1,2,true,5,6]
// Результат: [1,2,"булевый","тип",5,6]

// решение

// function replaceBoolElem(array){
//     for (let i = 0; i < array.length; i++){
//         if(typeof array[i] == 'boolean'){
//             array.splice(i, 1, 'булевый', 'тип')
//         }
//     }
//     console.log(array)
// }

// replaceBoolElem([1,2,true,true,5,6])

// -------------------------
// Задача 3
// Напишите функцию addNumber(array), которая принимает массив и добавлявет элемент "Цифра" после числа согласно примеру:
// Пример:
// let array = ['строка',1, 'hello',3 ,true]

// Результат:
// ['строка', 1, 'Цифра', 'hello', 3,'Цифра', true]

// function addNumber(array){
//     for (let i = 0; i < array.length; i++){
//         if(typeof array[i] == 'number'){
//             array.splice(i+1, 0, 'Цифра')
//         }
//     }
//     console.log(array)
// }


// -------------------------
// метод slice()    - возвращает новый массив с указанными элементами

// let array = [1,2,3,4,5]

// console.log(array.slice(1))      [2, 3, 4, 5]
// console.log(array.slice(1,4))    [2, 3, 4]
// console.log(array.slice(-2))     [4, 5]
// console.log(array.slice(4))      [5]
// console.log(array.slice(-1))     [5]



// -------------------------
// Деструктуризирующее присвоение

// let array = [10,20,30]

// let [a,b,c] = array  // - присваивает значение по порядку в массиве
// console.log(a,b,c)

// -------------------------
//  Нюансы


// let [a,b,c] = [10,20,30,40,50]
// console.log(a,b,c)   // 40,50 просто пропадут


// let [a,b,c] = [10,20]
// console.log(a,b,c)   // 10 20 undefined


// -------------------------
// Rest and Spread-операторы (аргументы)
// Распаковка массива и представление каждого элемента как отдельный аргумент для функции/метода

// let array =  ['Один', 'Два', 'Три']
// console.log(array[0], array[1], array[2])
// let h = [...array]
// console.log(h, ...array)


// -------------------
// Где еще можно указать распаковку
// Копирование массива

// let a = [1,2,4]
// let b = [...a]

// console.log(a,b, a == b)

//-------------------
// let a = [1,2,3]
// let b = [5,6,7]

// let c = [...a, 4]            [ 1, 2, 3, 4 ]
// let c = [4,...a]             [ 4, 1, 2, 3 ]
// let c = [...a,4,...b]        [1, 2, 3, 4, 5, 6, 7]

// console.log(c)

// -------------------------
// Вернемся к деструктуризации

// let [a,b,...c] = [10,20,30,40,50,60]

// console.log(a,b)
// console.log(c)



// -------------------------
// Задача 1
// Сущетсвуют методы Math.max() и Math.min(), которые возвращает максимольное и миниальное значение переданных АРГУМЕНТОВ!
// Задан массив array. Определите максимальное и минимальное значение.
// let array = [100,600,-100,1000,-400]

// console.log(Math.min(...array), Math.max(...array))


// Задача 2
// Задан массив array. Используя функции Math.max и min определите наибольшее
// и наименьшее значения массива в виде двух переменных max и min.
// Примечание: необходимо решить используя всего 2 строчки кода (c учетом let array = [100......)
// Решение

// let array = [100,200,600,-400,-100,1000]
// let [min,max] = [Math.min(...array), Math.max(...array)]
// console.log(min,max)


// b = [...a]                      - spread(распаковывает массив)
// log(...a)                       - spread(распаковывает массив)
// let [a,b,...a] = [1,2,3,4,5,6]  - rest(формирует массив)
// function log(...a){             - rest(формирует массив)
//     ...a
// }

// -------------------------
// Rest-операторы (аргументы)

// function log(...rest){
//     console.log(rest)
// }

// log(1,2,3,4,5,6,7,8)


// -------------------------
// Цикл по массиву

// for (let elem IN object)         - цикл по ключам объекта
// for (let elem OF array)          - цикл по значениям элемента массива
// for (let elem IN array)          - цикл по индексам элементов массива

// let a = [1, 2, 3, 4, 5]
// let b = []

// for (let i in a) {
//     a[i] = 100
//     b.push(i)
// }

// console.log(a,b)


// -------------------------
// Задача 1
// Напишите функцию getSum(), которая может принимать любое количество
// аргументов и выводит в консоль итогувую сумму все аргументов.
// Пример: getSum(1,2,3,4)
// Результат: 10

// function getSum(...rest) {
//     let sum = 0
//     for(let i of rest){
//         sum += i
//     }
//     console.log(sum)
// }

// getSum(2,7,3)
// getSum(2,7,8,628)


// -------------------------
// Еще про rest

// function func(a,...rest){
//     console.log(a, rest)
// }

// func(9,5,5,2)


// -------------------------
// Дефолтное значение





// -------------------------
// Задача 2
// Напишите функцию checkElem(), которая может принимать любое количество
// аргументов и реализует следующее вычисление:
// Если значение первого аргумента совпaдает с значениями прочих аргументов -
// функция должна вернуть true, иначе false

// Пример:
// function checkElem(first, ...rest){
//     for(let i of rest){
//         if(i == first){
//             return true
//         }
//     }
//     return false
// }

// console.log(checkElem(5,1,2,3,4,5))
// console.log(checkElem(6,1,2,3,4,5))

// Результат:
// true
// false




// ------------------------------
// метод reverse() - отзеркаленный массив

// let array = [10,20,30,40,60]
// console.log(array.reverse())


// --------------------------------
// метод split() - разбивает (делит) строку на две или более подстроки в зависимости от разделителя.

// let string = 'привет друг другалек'
// console.log(string.split()) 
// console.log(string.split(''))    // ' ' разделяет массив по словам

// let a = '10 20 30 40 50 60 77'
// let array = a.split(' ')
// let sum = 0
// for (let elem of array){
//     sum += +elem
// }

// console.log(sum)



// --------------------------------
// метод join() - преобразовать массив в строку (возвращает в строку)

// let array = [
//     'п', 'р', 'и', 'в', 'е',
//     'т', ' ', 'д', 'р', 'у',
//     'г', ' ', 'д', 'р', 'у',
//     'г', 'а', 'л', 'е', 'к'
// ]

// let string = array.join('')
// console.log(string)


// --------------------------------
// Задача 1
// Используф методы массива, отзеркальте строку в переменной word
// Пример:
// let word = 'наушники'
// let reverseWord = word.split('').reverse().join('')
// console.log(reverseWord)
// результат: 
// 'икиншуан'


// Задача 2
// Проверить, является ли слово word палнидромом. Если да - необходимо вывести ответ true
// Обверните логику в функцию checkWord(word)
// let word = 'наушники'
// function checkWord(word) {
//     console.log(word.split('').reverse().join('') == word)
// }

// checkWord(word)



// Задача 3
// Напишите функцию checkElem(elem), которая выполняет следующую логику:
// Если переданный аргумент существует в в массиве array - его необходимо заменить на квадрат этого же числа
// Если переданный аргмент отсутствует - его необходимо добавить как последний элемент
// Пример:

// let array = [1,2,3,4]
// function checkElem(el){
//     if(array.includes(el)){
//         array[array.indexOf(el)] = el ** 2
//     } else {
//         array.push(el)
//     }
//     return array
// }

// console.log(checkElem(3))

// checkElem(5) => [1,2,3,4,5]
// checkElem(4) => [1,2,3,16]


// --------------------------------
// метод filter() - возвращает новый мвссив, элементы которого соблюдают return колбек-функции

// let array = [1,2,3,4,5]
// console.log(array.filter((el) => console.log(el)))


// Задача:
// Отфильтруйте массив по следующим правилам:
// 1) id должен быть нечетным, а прайс должен хранить длину числа больше 3
// 2) Товары, итоговая стоимость которых (с учетом количества) превышает значение 10000

// let data = [
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000},
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 4, goods: 'Ракетки', count: 30, price: 1000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
// ]

// console.log(data.filter(elem => elem.id % 2 != 0 && (''+elem.price).length > 3))
// console.log(data.filter(elem => (elem.price * elem.count) > 10000))



// Задача:
// написать аналог метода filter в функцию filter2(array, callback)
// Примечание: продемоснтрировать работу метода на массиве a (elem > 3)

// let a = [1,2,3,4,5,6]

// function filter2(array, callback){
//     let filtered = []
//     for(el of array){                            // of - по элементам массива, in - по индексам элемента
//         if(callback(el)){
//             filtered.push(el)
//         }
//     }
//     return filtered
// }

// console.log(filter2(a, el => el > 3))


// Задача:
// Используя filter, выполните ряд задач с массивом array:

// let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// console.log(array.filter((e) => e % 2 == 0))
// console.log(array.filter((e) => Math.sqrt(e) % 1 == 0))

// 1) Cформируйте новый массив только из четных элементов
// 2) Cформируйте новый массив элементы которых возвращаю корень числа без дробной части



// Задача 2
// Отфильтровать элементы таким образом, чтобы получить новый массив, который содержит только булевый тип данных
// пример:

// let array = [true, false, '12',0,true,'string',[1,2,3],{name:'tigran'}]
// console.log(array.filter((e) => (typeof e == 'boolean')))

// Результат:
// [true,false,true]


// 1-й аргумент колбек - значение элемента массива
// 2-й аргумент колбек - индекс элемента массива
// 3-й аргумент колбек - целый массив

// let numbers = [1,2,3,4]
// console.log(numbers.filter((val,ind,arr) => console.log(val,ind,arr)))



// Задача 3
// отфильтровать массив по следующему правилу:
// 1) квадратный корень элемента должен соответствовать значению его индекса

// let array = [1,2,4,9,6,6,9,8]
// console.log(array.filter((e, ind) => Math.sqrt(e) % ind == 0))

// Результат:
// [4,9]



// Задача 4
// Отфильтровать значения по условию - первая буква строки должна быть "А"
// Пример:

// let array = ['Арбуз', 'Антена','Бор','Арбуз','Сеть','Трон']
// console.log(array.filter((el) => el[0] == 'А'))

// Результат:
// ['Арбуз','Антена','Арбуз']




// ----------------------------
// метод find() - вернуть найденный ЭЛЕМЕНТ массива

// let a = [1,2,3,4,5]

// console.log(a.find(el => el > 3))


// ----------------------------
// метод findIndex() - вернуть найденный индекс ЭЛЕМЕНТА массива

// let a = [1,2,3,4,5]

// console.log(a.findIndex(el => el > 2))



// ---------------------------

// let data = [
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000},
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 4, goods: 'Ракетки', count: 30, price: 1000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
// ]

// console.log(data.findIndex(el => el.id == 1))


// Задание 1
// Найдите пользователся, id которого представляется в виде четного числа, а возраст менее 33
// let users = [
//     {id: 1, name: 'Alex', lastname: 'Folon', age: 24},
//     {id: 2, name: 'Willyam', lastname: 'Maxwell', age: 33},
//     {id: 3, name: 'Steven', lastname: 'Fersters', age: 35},
//     {id: 4, name: 'Neena', lastname: 'Maxwell', age: 31},
// ]

// console.log(users.find(e => e.id % 2 == 0 && e.age < 33))


// Задача 2
// В программе задана переменная users, которая хранит в себе массив. 
// Элементы данного массива являются объектами. 
// Определите индекс элемента, значение свойства role которого содержит больше одного слова. 
// Результат выведите в консоль разработчика.
// Пример значений переменных:
// users = [
//     {login: "user1", role: "Admin"},
//     {login: "user2", role: "State user"},
//     {login: "user3", role: "Moderator"}
// ]

// console.log(users.findIndex(el => el.role.includes(' ')))

// Пример результата:
// 1


// Задача 2.2
// Определите наличие двух пробелов в поиске индекса элемента массива. 
// Пример значений переменных:

// users = [
//     {login: "user1", role: "Admin test test"},
//     {login: "user2", role: "State user"},
//     {login: "user3", role: "Moderator"}
// ]

// console.log(users.findIndex(el => el.role.split(' ').length > 2))

// Пример результата:
// 0



// ---------------------------
// метод sort() - метод сортирующий указанный массив. Принимает колбек

// let array = ['Киви', 'Арбуз', 'Яблоко', 'Мандарин', 'Банан']

// console.log(array.sort())                 // - сортировка по возрастанию
// console.log(array.sort().reverse())       // - сортировка по убыванию

// Проблема с сортировкой чисел.
// Подкапотно преобразовывает числовые типы в строку

// array = [3, 6, 9, 1, 5, 10, 7]
// console.log(array.sort())
// console.log(array.sort().reverse())

// ---------------
// Решение этой проблемы

// Код операции
// 1 - это currentElem > nextElem
// -1 - это currentElem < nextElem
// 0 - это currentElem = nextElem

// Решение 1
// array = [5, 4, 6, 3, 7, 2, 10, 8, 9, 1]

// array.sort((currentElem, nextElem) => {
//     if (currentElem > nextElem) return 1
//     if (currentElem < nextElem) return -1
//     if (currentElem = nextElem) return 0
// })

// console.log(array)


// Решение 2
// array = [5, 4, 6, 3, 7, 2, 10, 8, 9, 1]

// array.sort((curEl, nextEl) => curEl - nextEl)      // - сортировка по возрастанию
// array.sort((curEl, nextEl) => nextEl - curEl)      // - сортировка по убыванию


// console.log(array)


// ---------------------------------------------
// Задача 1
// Задан массив data. Выполните несколько заданий: 
// 1) отсортируте массив по количеству товаров 
// 2) отсортируйте массив по итоговой стоимости (вместе с количеством)
// 3) отсортируйте массив по имени покупки (сделаем вместе)

// let data = [
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
//     {id : 4, goods: 'Ракетки', count: 30, price: 1000},
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000},
// ]

// data.sort((curEl, nextEl) => curEl.count - nextEl.count)  // - по кол-ву товаров
// data.sort((curEl, nextEl) => curEl.count * curEl.price - nextEl.count * nextEl.price)  // - по итоговой стоимости
// data.sort((curEl, nextEl) => (curEl.goods > nextEl.goods) ? 1 : (curEl.goods < nextEl.goods) ? -1 : 0)  // - сортировка по имени покупки


// console.log(data)


// Задача 2
// Рандомная сортировка
// Напишите процесс сортировки таким образом, чтобы она просиходила радномным образом

// let array = [1,2,3,4,5,6,7,8,9,10]

// console.log(array.sort(() => Math.random() - Math.random()))


// ---------------------------
// метод some() - метод масива, который отвечает на вопрос, есть ли хотябы 1 элемент

// let array = [1,2,3,4,5]

// console.log(array.some(el => el > 2))

// ---------------------------
// метод every() - метод массива, который отвечает на вопрос, все ли элементы выполняют условия колбека. Возвращает булевый тип

// let array = [1,2,3,4,5]

// console.log(array.every(el => el > 0))      // true
// console.log(array.every(el => el >= 1))     // true
// console.log(array.every(el => el < 0))      // false




// Задача 1
// Решите следующие задачи: 
// 1) Определите наличие одного элемента, чей квадратный корень цены будет вычисляться без остатка. Выведите булевый тип
// 2) Определите, у всех ли элементов массива сво-во count отличимо от 0
// let data = [
//     {id : 2, goods: 'Самокат', count: 1, price: 3500},
//     {id : 3, goods: 'Ролики', count: 15, price: 6000},
//     {id : 5, goods: 'Скейтборд', count: 8, price: 999},
//     {id : 4, goods: 'Ракетки', count: 30, price: 100},
//     {id : 1, goods: 'Велосипед', count: 5, price: 2000}
// ]

// console.log(data.some(el => Math.sqrt(el.price) % 1 == 0))
// console.log(data.every(el => el.count != 0))


// ---------------------------
// метод map() - метод возвращает новый массив, значения элементов которых меняется по правилу колбек-функции


// Без метода map()
// let newArray = []
// let a = [3,5,8]

// for (el in a){
//     newArray.push(a[el] ** 2)
// }

// console.log(newArray, a)

// С методом map()

// let a = [3,5,8]
// console.log(a.map(el => el ** 2))


// ---------------
// Задача: рассчитать 85% от заданных значений элементов массива

// let prices = [100,400,250,1000,499]

// console.log(prices.map(el => el * 0.85))

// -------------------
// Задача 2
// Используя метод map, сформируйте новый массив, который содержит
// все сво-ва объектов (id, name, quantity) с небольшими изменениями:
// 1) id необходимо возвести в квадрат
// 2) заменить занчения сво-ва name на ее длину (число)
// 3) значение сво-ва quantity заменить на произведение значение id и quantity

// let goods = [
//     {id: 4, name: 'Скейтборд', quantity: 30},
//     {id: 4, name: 'Самокат', quantity: 15},
//     {id: 3, name: 'Велотренажер', quantity: 20},
//     {id: 3, name: 'Велосипед', quantity: 5},
// ]

// console.log(goods.map(el => ({
//     id: el.id ** 2,
//     name: el.name.length,
//     quantity: el.quantity * el.id,
// })))


// Задача 3
// Повторить метод map()

// let a = [3,5,8]
// function map2 (array, callback){
//     let newArray = []
//     for(el of array){
//         newArray.push(callback(el))
//     }
//     return newArray
// }

// console.log(map2(a,el => el * 3))



// -------------------
// метод forEach() - задача метода просто сформировать цикл for одной строкой
// метод ничего не возвращает

// let a = [3,5,8]

// a.forEach(el => console.log(el))


// -------------------
// метод reduce() - метод для формирования агрегационных вычислений. Работает слева направо


// решение без reduce
// let array = [1,2,3,4,5]

// let sum = 0
// for(el of array){
//     sum += el
// }

// console.log(sum)

// решение с reduce
//  console.log(array.reduce((sum, elem) => sum + elem))


// -------------------
// метод reduceRight() - делает тоже самое что и обычный reduce(), но с права на лево



// --------------------------------
// Задача 1
// Используя метод reduce решите ряд Задач
// а) Посчитайте итоговую стоимость всех товаров
// б) Посчитайте произведиение всех quantity 
// в) Сконкатенируйте первые буквы всех товаров в единую строку
// let goods = [
//     {id: 4, name: 'Скейтборд', price: 3500, quantity: 30},
//     {id: 4, name: 'Самокат', price: 1300, quantity: 15},
//     {id: 3, name: 'Велотренажер', price: 999, quantity: 20},
//     {id: 3, name: 'Велосипед', price: 5400, quantity: 5},
// ]

// console.log(goods.reduce((sum, elem) => sum + elem.price, 0), goods.reduce((um, el) => um * el.quantity, 1), goods.reduce((concat, el) => concat + el.name[0], ""))


// Задача 2
// Сложить все числа

// let numbers = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]


// console.log(numbers.reduce((sum, elem) => sum + elem.reduce((sum, elem) => sum + elem), 0))

