import React from "react";
import { Link, useParams } from "react-router-dom";

const Menu = () => {

  
  return (
    <>
    
      <div className="d-flex flex-column bg-dark col-1" id="menus">
        <ul className="nav flex-column mb-auto text-center">
          <li className="nav-item bg-info m-2 rounded-4">
            <Link to={'/'} className="nav-link text-light py-2 rounded-0" aria-current="page">
              <i class="bi bi-person fs-3"></i>
              <br />
              About
            </Link>
          </li>
          <li>
          <Link to={'/education'} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-mortarboard text-info fs-3"></i>
              <br />
              Education
           </Link>
          </li>
          <li>
          <Link to={'/experience'} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-briefcase text-info  fs-3"></i><br />
              Experience
           </Link>
          </li>
          <li>
          <Link to={''} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-bar-chart-line text-info fs-3"></i><br />
              Skills
           </Link>
          </li>
          <li>
          <Link to={''} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-award text-info fs-3"></i><br />
              Awards
           </Link>
          </li>
          <li>
          <Link to={''} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-person-check text-info fs-3"></i><br />
              Reference
           </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
