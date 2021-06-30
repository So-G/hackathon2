/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div className="flex flex-col mr-10 ">
      <h3 className="  my-6 border-pink-600 border-2 rounded-3xl py-4 text-pink-600 transform  transition duration-500 transform shadow-lg">
        They are looking for talents
      </h3>
      <div className="h-4/5 m-6 p-5 border-l-2 border-gray-200  ">
        <ul>
          <li className="m-2 list-disc text-sm">
            <Link to="/projects/1">John Doe</Link>
          </li>
          <li className="m-2 list-disc text-sm">
            <Link to="/projects/2">Jane Doe</Link>
          </li>
          <li className="m-2 list-disc text-sm">
            <Link to="/projects/3">Thomas Torvalds</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
