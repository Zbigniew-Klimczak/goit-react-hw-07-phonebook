import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { selectIsLoading } from 'redux/selectors';
import { fetchContactsItems } from 'redux/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContactsItems());
  }, [dispatch]);
  return (
    <section className={css.phonebook}>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter></Filter>
      {isLoading === true ? <p>isLoading</p> : <ContactList></ContactList>}
    </section>
  );
};
