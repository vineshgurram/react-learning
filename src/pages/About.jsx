import {Link, Outlet } from "react-router-dom";

export default function About() {
  return (
    <>
      About
      <ul>
        <li>
          <Link to="careers">Careers</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
