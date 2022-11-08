import React from 'react';
import panda from "./panda.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import Table from './Table';
import Drop from './Drop';

function Nav() {

    const { loginWithRedirect , isAuthenticated } = useAuth0();
    const { logout } = useAuth0();

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <img src={panda} className="img-fluid rounded-start" alt="..."  style={{height:"80px", width: "100px"}}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className=" ms-5 nav-link dropdown-toggle" style={{fontSize: "20px", fontWeight: "400", color: "black"}} href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Home
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Action</a></li>
                                <li><a className="dropdown-item" href="">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className=" ms-5 nav-link dropdown-toggle" style={{fontSize: "20px", fontWeight: "400", color: "black"}} href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Action</a></li>
                                <li><a className="dropdown-item" href="">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className=" ms-5 nav-link dropdown-toggle" style={{fontSize: "20px", fontWeight: "400", color: "black"}} href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Contact Us
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Action</a></li>
                                <li><a className="dropdown-item" href="">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className=" ms-5 nav-link dropdown-toggle" href="" style={{fontSize: "20px", fontWeight: "400", color: "black"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                               Privacy Policy
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Action</a></li>
                                <li><a className="dropdown-item" href="">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className=" ms-5 nav-link dropdown-toggle" href="" style={{fontSize: "20px", fontWeight: "400", color: "black"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Us
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="">Action</a></li>
                                <li><a className="dropdown-item" href="">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                    {
            
                        isAuthenticated ?
                        <button className="btn btn-success" style={{marginRight: "50px"}} onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
                        : <button className="btn btn-success" style={{marginRight: "10px"}} onClick={() => loginWithRedirect()}>Log In</button>
                    }
                    
                </div>
            </div>
        </nav>
        {
            isAuthenticated ?  <Drop /> : ""
        }
        {
            isAuthenticated ?  <Table /> : <div style={{textAlign: "center", marginTop: "20%"}}>Please Log In to Continue....</div>
        }
        
        </>
    )
}


export default Nav


