import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        justify-content-center
        bg="dark"
        variant="primary"
      >
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/" className=" text-sm-center nav-link active">
              POLL WORLD
            </Link>
          </Nav>

          <Nav>
            <Link to="/login" className=" nav-link btn btn-primary">
              Login
            </Link>

            <Link to="/polls" className=" text-sm-center nav-link ">
              Polls
            </Link>
            <Link to="/topics" className="text-sm-center nav-link" hidden>
              Signup
            </Link>
            <Link to="/createpoll" className="nav-link btn btn-primary">
              Create Poll
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
