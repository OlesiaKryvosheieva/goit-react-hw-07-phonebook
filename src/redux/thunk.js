import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsAPI';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const createContactThunk = createAsyncThunk(
  'contacts/addContact',
  async data => addContact(data)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  ({ id }) => deleteContact(id)
);
