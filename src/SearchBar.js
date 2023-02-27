import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onUserSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
      setUsers(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search for a GitHub user:</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => onUserSelect(user)}>{user.login}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
