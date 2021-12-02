import React from "react";
import { withRouter } from "react-router-dom";
import {Dropdown} from "react-bootstrap";



function Navigation(props) {

  return (
    <div className="sidenav">
      <ul id="myMenu">
          <a href="/">Home</a>
          <a href="/find">Find A Session</a>
          <a href="/practice">Practice</a>
          <a href="https://simran18.github.io/stayfitstaysafe/">About The Project</a>
      </ul>
      <Dropdown>
        <Dropdown.Toggle variant="Warning" id="dropdown-basic"> Account
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/student">Student</Dropdown.Item>
          <Dropdown.Item href="#/instructor">Instructor</Dropdown.Item>
        </Dropdown.Menu>
</Dropdown>
    </div>
  );
}

export default withRouter(Navigation);
