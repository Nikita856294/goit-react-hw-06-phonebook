import GlobalStyle from './GlobalStyle';
import Section from './Section';
import Container from './Container';
import Form from './ContactForm';
import ContactList from './ContactsList';
import Filter from './Filter';

function App() {
  return (
    <div className="root">
      <GlobalStyle />
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <Section title={'Contacts'}>
          <Filter />
          <ContactList />
        </Section>
      </Container>
    </div>
  );
}

export { App };
