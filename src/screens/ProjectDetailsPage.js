import Dropdown from '../components/ForProjectDescription/Dropdown';
import MembersAvatar from '../components/ForProjectDescription/MembersAvatar';
import RecommandationComment from '../components/ForProjectDescription/RecommandationsComment';

export default function ProjectDetailsPage() {
  return (
    <div className="w-4/5 flex flex-row mt-52">
      <div className=" w-80 mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:max-w-2xl bg-green-600 transform hover:shadow-2xl transition duration-500 transform hover:scale-110 transition duration-500">
        <div className="md:flex flex-row">
          <div className="p-8 text-left">
            <div className="uppercase tracking-wide text-sm text-white font-semibold">
              Project
            </div>
            <p className="mt-2 text-white">Project : Project A</p>
            <p className="mt-2 text-white">Créateur : Jonh Doe</p>
            <p className="mt-2 text-white">
              Description : Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
              amet, adipiscing nec, ultricies sed, dolor. Cras elementum
              ultrices diam. Maecenas ligula massa, varius a, semper congue,
              euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim
              est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p className="mt-2 text-white">Deadline : 20/06/2020 - 21h04</p>
            <p className="mt-2 text-white">Duration : 18 years</p>
            <p className="mt-2 text-white">Price : 80€ TTC</p>
            <button
              type="button"
              className="mt-2 text-black rounded-full bg-white w-24 text-center"
            >
              Join
            </button>
            <div className="mt-3 mb-3">
              <MembersAvatar />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <div className="text-white rounded-full h-40 w-40 bg-green-600 flex flex-col items-center justify-center">
          <p>Marketing: 1/3</p>
          <p>DevOps: 1/1</p>
          <p>Dev: 0/2</p>
        </div>
        <Dropdown />
        <RecommandationComment />
      </div>
    </div>
  );
}
