import { useState, useRef, useEffect } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={search}
        ref={inputRef}
      />
      <button>Find</button>
    </form>
  );
};

export default SearchForm;
