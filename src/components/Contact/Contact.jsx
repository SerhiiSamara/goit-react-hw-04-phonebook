import PropTypes from 'prop-types';

import { Container, User, Button } from './Contact.styled';

export const Contact = ({ name, number, id, deleteUser }) => {
  return (
    <Container>
      <User>
        {name}: {number}
      </User>
      <Button
        type="button"
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </Button>
    </Container>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
};
