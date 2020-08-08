import React, { Fragment, useContext } from "react";
import { Search } from "../components/Search/Search";
import { Card } from "../components/Card/Card";
import { GithubContext } from "../context/github/githubContext";

export const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <Fragment>
      <Search />
      <div className="row">
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          users.map((user) => {
            return (
              <div key={user.id} className="col-sm-4 mb-4">
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};
