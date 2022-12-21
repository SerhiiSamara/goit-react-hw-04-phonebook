import PropTypes from 'prop-types';

import { Contact } from '../Contact/Contact';
import { Container } from './ContactsList.styled';

export const ContactsList = ({ contacts, deleteUser }) => {
  return (
    <Container>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            deleteUser={deleteUser}
          />
        </li>
      ))}
    </Container>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
