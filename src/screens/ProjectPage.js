// import axios from "axios";
import { Link } from 'react-router-dom';
import './ProjectPage.css';

export default function ProjectPage() {
  return (
    <div className="bg-grey-200 w-screen ">
      <div className=" ">
        <h1>Projects</h1>
        <div className=" sm:flex md:flex-row justify-around h-4/5">
          <Link to="/projects/:id">
            <div className="  my-32 bg-green-600 h-52 w-52 p-8 items-center align-center rounded-full transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500 shadow-lg">
              <h3>Projet A</h3>
              <p>Marketing 1/3</p>
              <p>Social media Manager 1/1</p>
              <p>Devs 2/5</p>
            </div>
          </Link>
          <div className=" m-16 bg-pink-400 h-52 w-52 p-10 items-center align-center rounded-full transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500 shadow-lg">
            <h3>Projet X</h3>
            <p>UX/UI 1/1</p>
            <p>Devops 1/1</p>
            <p>Devs 2/5</p>
          </div>
          <div className=" my-72 bg-blue-300 h-52 w-52 p-10 items-center align-center rounded-full transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500 shadow-lg">
            <h3>Projet B</h3>
            <p>Marketing 1/3</p>
            <p>Social media Manager 1/1</p>
            <p>Devs 2/5</p>
          </div>
          <div className="my-32 w-48">
            <h2 className=" my-6 border-pink-600 border-2 rounded-3xl py-4 text-pink-600">
              Categories
            </h2>
            <ul>
              <li>Programation & Tech</li>
              <li>Marketing Digital</li>
              <li>Video Animation</li>
              <li>Business</li>
              <li>Data</li>
              <li>Readaction & Traduction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
