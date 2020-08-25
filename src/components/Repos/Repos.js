import React from "react";

const Repos = ({ repos }) => {
  return (
    <React.Fragment>
      {repos.map((repo) => {
        return (
          <div key={repo.id} className="card mb-4">
            <div className="card-body">
              <h5>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h5>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Repos;
