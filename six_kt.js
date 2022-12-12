// Задание

// Написать функционал по добавлению, изменению и удалению пользователей.
// Данные должны храниться в массиве, данные о пользователе должны быть в виде объекта (id, имя, фамилия, возраст)

// Должны быть реализованы функции: 
// addUser(имя, фамилия, возраст) - добавление нового пользователя
// updateUser(id, имя, фамилия, возраст) - изменение данных о пользователе
// deleteUser(id) - удаление пользователей в массиве (по id)

// Все функции должны ссылаться на 1 массив users. 

let users = [
    { id: 1, name: 'Alex', lastname: 'Wilyam', age: 20 },
    { id: 2, name: 'Steven', lastname: 'King', age: 34 }
]
// 1) Добавление новых данных о человеке в массив users
console.log('1) addUser\nДобавление новых данных о человеке в массив users')
function addUser(name, lastname, age){
    users.push({
        id: users.length + 1,
        name: name,
        lastname: lastname,
        age: age
    })
    return users
}
console.log(addUser('Ilya', 'Kotovskiy', 17))

// 2) Изменение данных о человеке в массиве users
console.log('2) updateUser\nИзменение данных о человеке в массиве users')
function updateUser(id, name, lastname, age){
    for(el of users){
        if (el.id == id){
            el.id = id,
            el.name = name,
            el.lastname = lastname,
            el.age = age
        }
    }
    return users
}
console.log(updateUser(3, 'Michail', 'Cherbanov', 37))

// 3) Удаление данных о человеке в массиве users
console.log('3) deleteUser\nУдаление данных о человеке в массиве users')
function deleteUser(id){
    for(el of users){
        if(el.id == id){
            users.splice(id - 1, 1)
        }
    }
    return users
}
console.log(deleteUser(2))


// Примечание:
// При добавлении пользователя id должен формироваться автоматически (в зависимости и количества пользователей). Например, очередная запись  должна иметь значение id = 3

// Продемонстрируйте работу всех функции на примерах (примеры могут быть произвольными)
