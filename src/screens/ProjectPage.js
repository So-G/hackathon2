// import axios from "axios";
import { Link } from 'react-router-dom';

export default function ProjectPage() {
  return (
    <div className="bg-grey-200 w-screen ">
      <div className=" ">
        <div className=" sm:flex md:flex-row justify-around">
          <Link to="/projects/1">
            <div className=" text-white mt-32 bg-green-600 h-52 w-52 p-8 items-center align-center rounded-full transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500 shadow-lg">
              <h3>Projet A</h3>
              <p>Marketing 1/3</p>
              <p>Social media Manager 1/1</p>
              <p>Devs 2/5</p>
            </div>
          </Link>
          <Link to="/projects/2">
            <div className="text-white m-16 bg-pink-400 h-52 w-52 p-10 items-center align-center rounded-full transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500 shadow-lg">
              <h3>Projet B</h3>
              <p>Marketing 1/1</p>
              <p>Designer 0/1</p>
              <p>Dev 1/3</p>
            </div>
          </Link>
          <Link to="/projects/3">
            <div className=" text-white mt-72 bg-blue-300 h-52 w-52 p-10 items-center align-center rounded-full transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500 shadow-lg">
              <h3>Projet C</h3>
              <p>Marketing 1/3</p>
              <p>Social media Manager 1/1</p>
              <p>Devs 2/5</p>
            </div>
          </Link>
          <div className="my-32 w-48">
            <h2 className=" my-6 border-pink-600 border-2 rounded-3xl py-4 text-pink-600 transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500 shadow-lg">
              Categories
            </h2>
            <ul>
              <li className="transform hover:underline transition duration-500">
                Programation & Tech
              </li>
              <li className="transform hover:underline transition duration-500">
                Marketing Digital
              </li>
              <li className="transform hover:underline transition duration-500">
                Video Animation
              </li>
              <li className="transform hover:underline transition duration-500">
                Business
              </li>
              <li className="transform hover:underline transition duration-500">
                Data
              </li>
              <li className="transform hover:underline transition duration-500">
                Readaction & Traduction
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
