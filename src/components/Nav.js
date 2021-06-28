import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link exact to="/">
              Home
            </Link>
          </li>
          <li>
            <Link exact to="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link exact to="/projects/:id">
              Project details
            </Link>
          </li>
          <li>
            <Link exact to="/form">
              Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
