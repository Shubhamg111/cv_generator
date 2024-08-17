import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Menu = () => {

  let location = useLocation()

  const aboutform = location.pathname === '/' ? "active" : ''
  const education = location.pathname === '/education' ? "active" : ''
  const experience = location.pathname === '/experience' ? "active" : ''
  const skills = location.pathname === '/skill' ? "active" : ''
  const awards = location.pathname === '/award' ? "active" : ''
  const reference = location.pathname === '/reference' ? "active" : ''


  
  
  return (
    <>
    
      <div className="d-flex flex-column bg-dark col-1" id="menus">
        <ul className="nav flex-column mb-auto text-center">
          <li className={aboutform}>
            <Link to={'/'} className="nav-link text-secondary py-2 rounded-0" aria-current="page">
              <i class="bi bi-person text-info fs-3"></i>
              <br />
              About
            </Link>
          </li>
          <li className={education}>
          <Link to={'/education'} className="education nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-mortarboard text-info fs-3"></i>
              <br />
              Education
           </Link>
          </li>
          <li className={experience}>
          <Link to={'/experience'} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-briefcase text-info  fs-3"></i><br />
              Experience
           </Link>
          </li>
          <li className={skills}>
          <Link to={''} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-bar-chart-line text-info fs-3"></i><br />
              Skills
           </Link>
          </li>
          <li className={awards}>
          <Link to={''} className="nav-link text-secondary py-2 rounded-0" aria-current="page">

              <i class="bi bi-award text-info fs-3"></i><br />
              Awards
           </Link>
          </li>
          <li className={reference}>
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
