import { Link, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="careers">Careers</Link>
        </li>
      </ul>
    </div>
  );
}
