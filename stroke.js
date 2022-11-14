// -------------------------------------------------------------
// ---------------------Работа со строками----------------------
// -------------------------------------------------------------


// concat() -- конкатенация строк
// let a = 'привет'
// let b = 'пока'
// let result = a.concat(b)
// console.log(result)  -- приветпока


// repeat() -- повтор строки
// let a = 'привет'
// let result = a.repeat(5) -- количество повторений в скобках
// console.log(result)


// includes() -- проверяет наличие подстроки
// let a = 'Привет мой друг'
// let result = a.includes('мой') -- в скобках указываем, то что находиться или не находиться в строке. В ответе получим boolean
// console.log(result)


// startsWith() -- проверяет находится ли подстрока в начале
// let a = 'Привет мой друг'
// let result = a.startsWith('привет')
// console.log(result)


// endsWith() -- проверяет находится ли подстрока в конце
// let a = 'Привет мой друг'
// let result = a.endsWith('друг')
// console.log(result)


// indexOf() -- проверяет наличие подстроки и возвращает индекс начала подстроки
// let a = 'Привет мой друг'
// let result = a.indexOf('мой')
// console.log(result)


// lastIndexOf -- тоже самое, только вычисляет самую последнию позицию
// let a = 'Привет мой друг влыьфдп гена рол гена'
// let result = a.lastIndexOf('гена')
// console.log(result)


// slice(n,m) -- позволяет получить подстроку, указывая диапозон индексов строки от n (вкл) до m (не вкл)
// let a = 'Привет мой друг'
// console.log(a.slice(0,6))   - конкретный диапазон
// console.log(a.slice(7))     - бесконечный диапазон
// console.log(a.slice(-4))    - с конца


// substring -- позволяет получить подстроку, указывая диапазон индексов. Отличие от slice в том, что аргумент может быть отрицательным и второй аргумент может быть меньше чем первый
// let a = 'Привет мой друг'
// console.log(a.substring(7))
// console.log(a.substring(0,6))
// console.log(a.substring(6,-3))
// console.log(a.substring(10,-1))

// console.log(a.substring(6,3))
// console.log(a.substring(3,6))


// replace() -- позволяет заменить 1 подстроку на другую подстроку
// replaceAll() -- заменяет все подстроки
// let a = 'Привет мой друг'
// console.log(a.replace('Привет мой друг','Здравствуй, рады тебя видеть'))



// -------------------------------------------------------------
// -------------------------ЗАДАЧИ------------------------------
// -------------------------------------------------------------

// Задача 1
// Задан формат даты в переменной dates в виде строки.
// '2022/10/18' - американский
// '2022.10.18' - русский

// 1) Напишите программу, которая определит к какой стране относится формат даты
// В качестве ответа вывести сообщение "Формат даты российский"

// Пример:
// function checkDate(date){
//     if(date.includes('/')){
//         return 'Формат даты американский'
//     } else {
//         return 'Формат даты российский'
//     }
// }

// console.log(checkDate('2022.10.18'))


// Результат:
// Формат даты американский


// Задача 2
// Задан массив emails, передающий строковые элементы. Определите, все ли элементы содержат верную почту.
// Критерии правильной почти: наличие "@" и "."
// В качестве ответа необходимо в консоль вывести ответ true/false для каждого элемента.

// Пример:
// let emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']

// function checkEmails(emails){
//     for(i = 0; i < emails.length; i++){
//         console.log(emails[i].includes('@') && emails[i].includes('.'))
//     }
// }

// checkEmails(emails)

// Результат:
// true
// false
// false
// true



// Задача 3
// Определить индекс второй подстроки 'date' у переменной string.
// Примечание: содержимое переменной нам не доступна

// Код должен работать на 2 тестах
// 1-ый тест
// let string1 = 'date 10.10.10 date 20.20.20 date 30.30.30'

// 2-ой тест
// let string2 = '10.10.10 date 20.20.20 date 30.30.30 date'

// function checkDate(string){
//     let index = string.indexOf('date')
//     let result = string.indexOf('date', index + 1)
//     return result
// }

// console.log(checkDate(string1))
// console.log(checkDate(string2))


// Задача 4
// Задана почта в переменной email. 
// 1)Выведите в консоль только логин почты.
// 2) Выведите в консоль только логин домена (mail)
// 3) Выведите в консоль только доменную зону (com)
// Пример:
// let email = 'thegreat@mail.com'
// console.log(email.substring(0, email.indexOf('@')))
// console.log(email.substring(email.indexOf('@')+1, email.indexOf('.')))
// console.log(email.substring(email.indexOf('.')+1))

// Результат: thegreat


// Задача 5
// Задан массив phones, передающий номера телефонов в виде строки.
// Реализуйте очистку данных, сформировав единый вид для все элементов массива.phones

// Пример:
// let phones = ['891 11112 233','89111-1122-44','8911-11122-55','89111112266']
// function editPhone(phone){
//     for(i = 0; i < phone.length; i++){
//         phone[i] = phone[i].replace('8','+7').replaceAll(' ','').replaceAll('-','')
//     }
//     return phone
// }

// console.log(editPhone(phones))

// Результат:
// ['+79111112233','+79111112244','+79111112255','+79111112266']



// Задача 6
// Задан массив arrays. Сформируйте два новых массива phones и emails, которые будут содержать данные по примеру:

// let arrays = [
//     '89840959944 exampleonemain@mail.ru',
//     '+79840959933 forreason@yandex.net',
//     'somemail@mail.ru',
//     '89840959900 example@gmil.ru',
//     '+79840959911',
//     'grandthere@mail.ru',
//     'jetpackfor@gmail.ru',
//     '89840959922 some@yandex.com',
// ]

// let numbers = []
// let mails = []

// for (i = 0; i < arrays.length; i++){
//     if(arrays[i].includes('8') || arrays[i].includes('+7')){
//         numbers[numbers.length] = arrays[i].substring(0,12).replace(' ','')
//         mails[mails.length] = arrays[i].substring(12).replace(' ','')
//     } else if(arrays[i].includes('@')){
//         mails[mails.length] = arrays[i]
//     }
// }
// console.log(numbers)
// console.log(mails)
// Результат:
// ['89840959944','+79840959933','89840959900','+79840959911','89840959922']



// Задача 7
// Напишите функцию initCap(array), которая получает массив с элементами
// строкового значения и возвращает элементы с заглавной первой буквой по примеру:

// let words = ['стакан','молоко','табуретка','вода']
// function uppWord(array){
//     for(i = 0; i < array.length; i++){
//         array[i] = array[i].replace(array[i][0], array[i][0].toUpperCase())
//     }
//     return array
// }

// console.log(uppWord(words))

// Результат: ['Cтакан','Молоко','Табуретка','Вода']



// Задача 8
// Задан массив names.
// Сформируйте новый массив full_names, элементы которого
// будут содежрать вложенный массив с именем и фамилией.
// Если фамилии не окажется - второй элемент должен хранить undefined

// Пример:
// let names = [
//     'Steven King',
//     'Jonh Snow',
//     'Oliver',
//     'Neena Stich',
//     'Grant Laster',
//     'Persius Master',
//     'Lest',
// ]

// let full_names = []
// for (let i = 0; i < names.length; i++){
//     if (names[i].includes(' ')){
//         full_names[i] = [names[i].substring(0, names[i].indexOf(' ')), names[i].substring(names[i].indexOf(' ')+1)]
//     } else {
//         full_names[i] = [names[i], undefined]
//     }
// }

// console.log(full_names)


// Результат: [
//     ['Steven','King'],
//     ['Jonh','Snow'],
//     ['Oliver', undefined],
//     ['Neena','Stich'],
//     ['Grant','Laster'],
//     ['Persius','Master'],
//     ['Lest', undefined]
// ]









// -------------------------------------------------------------
// -------------------Регулярные выражение----------------------
// -------------------------------------------------------------

// Поиск по подстроке
// let string = "Hello world"
// let reg = /world/
// let result = string.match(reg)
// console.log(result)

// Поиск по группе символов
// \w -- буквы и цифры
// \d -- только цифры 0-9
// \s -- только пробел
// \W -- НЕ буквы и НЕ цифры
// \D -- НЕ цифры 0-9
// \S -- НЕ пробел
// [...] -- пользовательский набор символов
// . -- любой символ
// [.] -- экранирование точки


// -------------------------------------------------------------
// ----------------------Квантификаторы-------------------------
// -------------------------------------------------------------
// {n} -- n кол-во вхождений группы символов
// {n,m} -- диапазон вхождений от n до m
// {n,} -- диапазон вхождений от n до много
// + -- аналог {n,}
// {0,} -- 0 или много
// * -- аналог {0,}
// ^ -- начало строки
// % -- конец строки


// let string = "test@gmail.com.ru"
// let reg = /\w+[@]\w+[.]\w+[.]{0,1}\w{0,}/
// let result = string.match(reg)
// console.log(result)


// Задача 1
// Задан массив phones. Найдите номера телефонов, которые соответствуют маске
// 'xxx.xxx.xxx'. Поместите эти номера в новый массив newPhones.

// let phones = [
//     '123.123.123',
//     '453.567.985',
//     '23.33.22.34',
//     '567.986.423',
//     '123456.4533',
//     '567.90987.5',
//     '12.3323.321',
//     '1234.566777',
//     '655.432.342'
// ]
// let newPhones = []

// for (i = 0; i < phones.length; i++){
//     if(phones[i].match(/\d{3}[.]\d{3}[.]\d{3}/)){
//         newPhones[newPhones.length] = phones[i]
//     }
// }

// console.log(newPhones)

// Задача 2
// Задан массив prices. Расчитайте суммарное значение каждой строки.
// Пример:
// let numbers = [
//     '100 200 300',
//     '10 20 30',
//     '12 13 14',
//     '5 5 5',
//     '105 200 105'
// ]

// for(i = 0; i < numbers.length; i++){
//     let num1 = numbers[i].substring(0, numbers[i].indexOf(' '))
//     let num2 = numbers[i].substring(numbers[i].indexOf(' ')+1, numbers[i].indexOf(' ', numbers[i].indexOf(' ')+1))
//     let num3 = numbers[i].substring(numbers[i].lastIndexOf(' '))
//     numbers[i] = (+num1) + (+num2) + (+num3)
// }

// console.log(numbers)

// Результат: [
//     600,
//     60,
//     39,
//     15,
//     410
// ]

// Зданаие 2
// Задан массив elems, передающий элемент HTML разметки.
// Реализуйте очистку данных по примеру ниже:
// let elems = [
//     '<div><p class="text">Home</p></div>',
//     '<div><p class="text">About</p></div>',
//     '<div><p class="text">FAQ</p></div>',
//     '<div><p class="text">Contacts</p></div>' 
// ] 


// for(i = 0; i < elems.length; i++){
//     let string = elems[i].substring(elems[i].indexOf('text')+6, elems[i].indexOf('</p>'))
//     elems[i] = string
// }

// console.log(elems)

// Результат:
// ['Home','About','FAQ','Contacts']


