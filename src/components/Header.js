import React from 'react';

const Header=()=> {


    const handleIT=()=>{

    }
    const handleLR=()=>{

    }
    const handleVA=()=>{

    }

    
  return (
    <div>

        
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-item mb-0 h1" style={{ position:'relative',left:"40%"}}>Practice Test</span>
            </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a href='./'className="nav-link" aria-current="page" onClick={handleVA}>Verbal Ability</a>
                <a href='./'className="nav-link" onClick={handleLR}>Logical Resoning</a>
                <a href='./' className="nav-link" onClick={handleIT}>Information Technology</a>
            </div>
            </div>
        </div>
        </nav>
        
    </div>
  );
}

export default Header;