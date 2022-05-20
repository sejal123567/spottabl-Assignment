import React from "react";
import IMG from "../components/IMG.png";

class Navbar extends React.Component {
  render(){
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <ul class="navbar-nav">
            <li>
              <a className="navbar-brand" href="#">
                <img
                  src={IMG}
                  alt=""
                  width="70"
                  height="70"
                  className="d-inline-block align-text-top"
                />
              </a>
            </li>
            <li>
              <div class="ms-2 me-auto">
                <div style={{fontSize : '30px'}}class="fw-bold ">YOUR SPOTTABL TEAM</div>
                Spottabl supports you all throughout
              </div>
            </li>
          </ul>
        </div>
      </nav>
      
     
    );
    
    }
    }
    export default Navbar;




