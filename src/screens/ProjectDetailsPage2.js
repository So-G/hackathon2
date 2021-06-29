import Dropdown from '../components/ForProjectDescription/Dropdown';
import MembersAvatar from '../components/ForProjectDescription/MembersAvatar';
import RecommandationComment from '../components/ForProjectDescription/RecommandationsComment';

export default function ProjectDetailsPage2() {
  return (
    <div className="w-4/5 flex flex-row mt-52">
      <div className=" w-80 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-pink-400 transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500">
        <div className="md:flex flex-row">
          <div className="p-8 text-left">
            <div className="uppercase tracking-wide text-sm text-white font-semibold">
              Project
            </div>
            <p className="mt-2 text-white">Project : Project B</p>
            <p className="mt-2 text-white">Creator : Jane Doe</p>
            <p className="mt-2 text-white">
              Description : Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
              amet, adipiscing nec, ultricies sed, dolor. Cras elementum
              ultrices diam. Maecenas ligula massa, varius a, semper congue,
              euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim
              est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p className="mt-2 text-white">Deadline : 2021-09-17</p>
            <p className="mt-2 text-white">Duration : 6 month</p>
            <p className="mt-2 text-white">Price : 17 500$</p>
            <button
              type="button"
              className="mt-2 text-black rounded-full bg-white w-24 text-center"
            >
              <a
                className="mt-2 text-black rounded-full bg-white w-24 text-center"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
              >
                Join
              </a>
            </button>
            <div className="mt-3 mb-3">
              <MembersAvatar />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className=" rounded-full h-40 w-40 bg-pink-400 flex flex-col items-center justify-center text-white">
          <p>Marketing 1/1</p>
          <p>Developer 1/3</p>
          <p>Designer 0/1</p>
        </div>
        <Dropdown />
        <RecommandationComment />
      </div>
    </div>
  );
}
