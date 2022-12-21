import PropTypes from 'prop-types';

import { Input, Label } from './Filter.styled';

export const Filter = ({ onInputChange}) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={onInputChange} />
    </Label>
  );
};

Filter.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
