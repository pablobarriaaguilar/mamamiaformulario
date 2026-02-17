import React from 'react';

const Nav = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Pizzería Mamma Mia!</a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarText" 
          aria-controls="navbarText" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
        
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link border border-secondary rounded me-2" href="#">🍕 Home</a>
            </li>

            {token ? (
              <>
                <li className="nav-item">
                  <a className="nav-link border border-secondary rounded me-2" href="#">🔓 Profile</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border border-secondary rounded" href="#">🔒 Logout</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link border border-secondary rounded me-2" href="#">🔐 Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link border border-secondary rounded" href="#">🔐 Register</a>
                </li>
              </>
            )}
          </ul>

    
          <span className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link border border-info rounded text-info fw-bold" href="#">
                🛒 Total: ${total.toLocaleString('es-CL')}
              </a>
            </li>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;