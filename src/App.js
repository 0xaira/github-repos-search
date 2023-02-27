import React, { useState } from 'react';
import SearchBar from './SearchBar';
import UserList from './UserList';
import RepoList from './RepoList';
import axios from 'axios';
import './App.css';


const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [sortBy, setSortBy] = useState('');

  const handleUserSelect = async (user) => {
    setSelectedUser(user);
    try {
      const response = await axios.get(user.repos_url);
      setRepos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortByStars = (repos) => {
    if (sortBy === 'stars') {
      setRepos([...repos.reverse()]);
    } else {
      setRepos([...repos.sort((a, b) => b.stargazers_count - a.stargazers_count)]);
    }
    setSortBy('stars');
  };

  const handleSortByForks = (repos) => {
    if (sortBy === 'forks') {
      setRepos([...repos.reverse()]);
    } else {
      setRepos([...repos.sort((a, b) => b.forks_count - a.forks_count)]);
    }
    setSortBy('forks');
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onUserSelect={handleUserSelect} />
      {selectedUser && (
        <>
          <UserList user={selectedUser} />
          <RepoList
            user={selectedUser}
            repos={repos}
            onSortByStars={handleSortByStars}
            onSortByForks={handleSortByForks}
          />
        </>
      )}
    </div>
  );
};

export default App;
