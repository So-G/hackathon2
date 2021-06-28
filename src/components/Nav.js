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
            <Link exact to="/page-one">
              Page One
            </Link>
          </li>
          <li>
            <Link exact to="/page-two">
              Page Two
            </Link>
          </li>
          <li>
            <Link exact to="/page-three">
              Page Three
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
