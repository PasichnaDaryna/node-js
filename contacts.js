import fs from 'fs'
import path from 'path'

// Создай переменную contactsPath и запиши в нее путь к файле 
// contacts.json.Для составления пути ипользуй методы модуля path.
const { __dirname } = createDirname(import.meta.url);

const contactsPath = basename('./db/contacts.json')


// Добавь функции для работы с коллекцией контактов.В функциях используй модуль
// fs и его методы readFile() и writeFile()




// Сделай экспорт созданных функций через module.exports



function listContacts() {
    // ...твой код
}



function getContactById(contactId) {
    // ...твой код
}

function removeContact(contactId) {
    // ...твой код
}

function addContact(name, email, phone) {
    // ...твой код
}