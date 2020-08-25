import React, { useContext, useEffect } from "react";
import { GithubContext } from "../context/github/githubContext";
import Repos from "../components/Repos/Repos";
import { Link } from "react-router-dom";

export const Profile = ({ match }) => {
  const github = useContext(GithubContext);

  const urlName = match.params.name;

  useEffect(() => {
    github.getUser(urlName);
    github.getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    public_repos,
    public_gists,
    following,
  } = github.user;

  return (
    <div>
      <h1>Repos {match.params.name}</h1>
      {github.loading ? (
        <p className="text-center">Загрузка...</p>
      ) : (
        <React.Fragment>
          <Link to="/" className="btn btn-link">
            На главную
          </Link>
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3 text-center">
                  <img src={avatar_url} alt={name} style={{ width: "150px" }} />
                  <h1>{name}</h1>
                  {location && <p>Местоположение {location}</p>}
                </div>
                <div className="col">
                  {bio && (
                    <React.Fragment>
                      <h3>Bio</h3>
                      <p>{bio}</p>
                    </React.Fragment>
                  )}
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark"
                  >
                    Открыть профиль
                  </a>
                  <ul>
                    {login && (
                      <li>
                        <strong>Username:</strong>
                        {login}
                      </li>
                    )}
                    {company && (
                      <li>
                        <strong>Company:</strong>
                        {company}
                      </li>
                    )}
                    {blog && (
                      <li>
                        <strong>Website:</strong>
                        {blog}
                      </li>
                    )}
                  </ul>
                  <div className="badge badge-primary">
                    Подписчики: {followers}
                  </div>
                  <div className="badge badge-success">
                    Подписан: {following}
                  </div>
                  <div className="badge badge-info">Repos: {public_repos}</div>
                  <div className="badge badge-dark">Gists: {public_gists}</div>
                </div>
              </div>
            </div>
          </div>
          <Repos repos={github.repos}></Repos>
        </React.Fragment>
      )}
    </div>
  );
};
