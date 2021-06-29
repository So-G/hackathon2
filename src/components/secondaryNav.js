import { Link } from 'react-router-dom';

export default function SecondaryNav() {
  return (
    <nav>
      <ul className="nav2">
        <li>
          <Link className="secondary-link" exact to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="secondary-link" exact to="_blank">
            Chatrooms
          </Link>
        </li>
      </ul>
    </nav>
  );
}
