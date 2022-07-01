import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('phonebook/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/changeFilter');

export  { addContact, deleteContact, changeFilter };

// const addContact = ({ name, number }) => {
//     const findName = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (findName) {
//       return alert(` ${name} is already in contacts`);
//     }
//     const contact = {
//       id: nanoid(),
//       name,
//       number,
//     };
