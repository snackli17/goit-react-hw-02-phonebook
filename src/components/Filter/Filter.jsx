import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, inputChange }) => {
  return (
    <div className={css.filterContainer}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={filter}
        onChange={inputChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  inputChange: propTypes.func.isRequired,
};
