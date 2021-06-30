import { useState } from 'react';
import MembersAvatar from '../components/ForProjectDescription/MembersAvatar';
import RecommandationComment from '../components/ForProjectDescription/RecommandationsComment';

export default function ProjectDetailsPage3() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="w-4/5 flex flex-row mt-40">
      <div className=" w-80 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-blue-300 transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500">
        <div className="md:flex flex-row">
          <div className="p-8 text-left">
            <div className="uppercase tracking-wide text-sm text-white font-semibold">
              Project
            </div>
            <p className="mt-2 text-white">Project : Project C</p>
            <p className="mt-2 text-white">Creator : Jonh Doe</p>
            <p className="mt-2 text-white">
              Description : Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
              amet, adipiscing nec, ultricies sed, dolor. Cras elementum
              ultrices diam. Maecenas ligula massa, varius a, semper congue,
              euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim
              est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p className="mt-2 text-white">Deadline : 20/06/2020 - 21h04</p>
            <p className="mt-2 text-white">Duration : 1 month</p>
            <p className="mt-2 text-white">Price : 80€ TTC</p>
            <button
              type="button"
              className="mt-2 text-black rounded-full bg-white w-24 text-center"
            >
              Join
            </button>
            <button
              type="button"
              className="mx-8 mt-2 cursor-default text-gray-700 rounded-full bg-gray-400 w-24 text-center"
            >
              Tchat
            </button>
            <div className="mt-3 mb-3">
              <MembersAvatar />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="text-white rounded-full h-40 w-40 bg-blue-300 flex flex-col items-center justify-center">
          <p>Marketing: 1/3</p>
          <p>Dev: 0/2</p>
          <p>Dev: 1/1</p>
        </div>
        <div className="inline-block relative w-27 h-10 mt-3 mb-3">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
          >
            <option>Recommend</option>
            <option>Freelance A</option>
            <option>Freelance B</option>
            <option>Invite unregistered freelancer</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" />
        </div>
        {selectedOption === 'Invite unregistered freelancer' && (
          <>
            <input
              type="email"
              placeholder="amazingfreelancer@project.com"
              className="input-rec"
            />
            <br />
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              // eslint-disable-next-line no-alert
              onClick={() => alert('Email successfully sent 💌')}
            >
              Send invitation
            </button>

            <br />
          </>
        )}
        <RecommandationComment />
      </div>
    </div>
  );
}
