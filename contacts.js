
import path from 'path';
import shortid from 'shortid';

import createDirname from './lib/dirname.js';
import fsFunc from './lib/fsFunc.js';

// Создай переменную contactsPath и запиши в нее путь к файле 
// contacts.json.Для составления пути ипользуй методы модуля path.
const { __dirname } = createDirname(import.meta.url);
const contactsPath = path.join(`${__dirname}`, './db/contacts.json');


// Добавь функции для работы с коллекцией контактов.В функциях используй модуль
// fs и его методы readFile() и writeFile()




// Сделай экспорт созданных функций через module.exports


export async function listContacts() {
    try {
        const list = await fsFunc.readFile(contactsPath);

        console.log('Contact list:');
        console.table(JSON.parse(list));



        return JSON.parse(list);
    } catch (err) {
        console.log('Error: ', err.message);
    }
}



export async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        const contactToFind = contacts.find(contact => contact.id === contactId);

        console.log(`Найден контакт с id ${contactId}`);
        console.table(contactToFind);

    } catch (err) {
        console.log('Error: ', err.message);
    }
}
export async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        const newListContacts = contacts.filter(
            contact => contact.id !== contactId,
        );

        console.log(`Удален контакт с id ${contactId}`);
        console.table(newListContacts);

    } catch (err) {
        console.log('Error: ', err.message);
    }
}

export async function addContact(name, email, phone) {
    try {
        const contacts = await listContacts();
        const id = shortid();
        const newListContacts = [...contacts, { id, name, email, phone }];

        console.log(`Добавлен контакт с именем ${name}`);
        console.table(newListContacts);


    } catch (err) {
        console.log('Error: ', err.message);
    }
}