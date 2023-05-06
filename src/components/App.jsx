import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { fetchContactsItems } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsItems());
  }, [dispatch]);
  return (
    <section className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </section>
  );
};
