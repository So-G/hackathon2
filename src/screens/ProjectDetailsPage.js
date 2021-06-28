import CircleDescription from './CircleDescription';

export default function ProjectDetailsPage() {
  return (
    <div className="w-4/5 flex flex-row">
      <div className=" w-80 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl bg-green-500">
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
            <p className="mt-2 text-white">Durée : 1 mois</p>
            <p className="mt-2 text-white">Tarif : 80€ TTC</p>
            <div className="mt-2 text-black rounded-full bg-white w-24 text-center">
              Participer
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-full h-40 w-40 bg-green-500 flex flex-col items-center justify-center">
        <p>Marketing: 1/3</p>
        <p>Dev: 0/2</p>
        <p>Dev: 1/1</p>
      </div>
      <CircleDescription />
    </div>
  );
}
