import { useState, useRef, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import scss from './search-form.module.scss';

const SearchForm = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(search);
    setSearch('');
  };

  return (
    <form className={scss.form} onSubmit={handleSubmit}>
      <input
        className={scss.input}
        type="text"
        onChange={handleChange}
        value={search}
        ref={inputRef}
      />
      <button className={scss.btn}>
        <BsSearch />
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
