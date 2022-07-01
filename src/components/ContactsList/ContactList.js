import React from 'react';
import { ContactsList, ListItem, DeleteButton } from './ContactListStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
  getValueItems,
  getValueFilter,
} from '../../redux/phonebook/phonebook-selectors';
import { deleteContact } from 'redux/phonebook/phonebook-actions';

function ContactList() {
  const contacts = useSelector(getValueItems);
  const filter = useSelector(getValueFilter);
  const dispatch = useDispatch();

  const nozmalizedContacts = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nozmalizedContacts)
  );

  return (
    <ContactsList>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <ListItem key={id}>
            {name}:{number}
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </ContactsList>
  );
}

export default ContactList;
