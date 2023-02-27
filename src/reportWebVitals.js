import React, { useState } from 'react';

const RepoList = ({ user, repos, onSortByStars, onSortByForks }) => {
  const [sortCriteria, setSortCriteria] = useState('');

  const handleSortByStarsClick = () => {
    onSortByStars(repos);
    setSortCriteria('stars');
  };

  const handleSortByForksClick = () => {
    onSortByForks(repos);
    setSortCriteria('forks');
  };

  const renderRepoList = () => {
    if (sortCriteria === 'stars') {
      return (
        <ul>
          {repos.sort((a, b) => b.stargazersCount - a.stargazersCount).map((repo) => (
            <li key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>Stars: {repo.stargazersCount}</p>
              <p>Forks: {repo.forksCount}</p>
            </li>
          ))}
        </ul>
      );
    }

    if (sortCriteria === 'forks') {
      return (
        <ul>
          {repos.sort((a, b) => b.forksCount - a.forksCount).map((repo) => (
            <li key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <p>Stars: {repo.stargazersCount}</p>
              <p>Forks: {repo.forksCount}</p>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>Stars: {repo.stargazersCount}</p>
            <p>Forks: {repo.forksCount}</p>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>{user.login}'s repositories</h2>
      <div>
        <button onClick={handleSortByStarsClick}>Sort by stars</button>
        <button onClick={handleSortByForksClick}>Sort by forks</button>
      </div>
      {renderRepoList()}
    </div>
  );
};

export default RepoList;
