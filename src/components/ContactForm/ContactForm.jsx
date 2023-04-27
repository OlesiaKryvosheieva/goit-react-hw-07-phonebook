import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const state = { name, phone: number };

  const idName = nanoid();
  const idNumber = nanoid();

  function handleNameChange(event) {
    setName(event.currentTarget.value);
  }
  function handleNumberChange(event) {
    setNumber(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(state);
    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label htmlFor={idName} className={css.label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleNameChange}
        id={idName}
        className={css.input}
      />

      <label htmlFor={idNumber} className={css.label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleNumberChange}
        id={idNumber}
        className={css.input}
      />

      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
