import React from 'react';

const RepoList = ({ user, repos, onSortByStars, onSortByForks }) => {
  return (
    <div>
      <button onClick={() => onSortByStars(repos)}>Sort by stars</button>
      <button onClick={() => onSortByForks(repos)}>Sort by forks</button>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description}</p>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Forks: {repo.forks_count}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoList;
