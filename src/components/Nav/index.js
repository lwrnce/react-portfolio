import React from "react";

function Nav(props) {
  const navLinks = ["about", "projects", "contact"];
  return (
    <nav>
      <h1>Lawrence Yuen</h1>
      <div>
          {navLinks.map(tabs => (
            <li className="nav-link" key={tabs}>
              <a
                href={"#" + tabs.toLowerCase()}
                onClick={() => props.setCurrentPage(tabs)}
                className={props.currentPage === tabs ? "active" : "nav-link"}
              >
                {tabs}
              </a>
            </li>
          ))}
      </div>
    </nav>
  );
}

export default Nav;