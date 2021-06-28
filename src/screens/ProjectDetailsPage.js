export default function ProjectDetailsPage() {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <p className="mt-2 text-gray-500">Project : Project A</p>
            <p className="mt-2 text-gray-500">Créateur : Jonh Doe</p>
            <p className="mt-2 text-gray-500">
              Description : Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed non risus. Suspendisse lectus tortor, dignissim sit
              amet, adipiscing nec, ultricies sed, dolor. Cras elementum
              ultrices diam. Maecenas ligula massa, varius a, semper congue,
              euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim
              est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
            <p className="mt-2 text-gray-500">Deadline : 20/06/2020 - 21h04</p>
            <p className="mt-2 text-gray-500">Durée : 1 mois</p>
            <p className="mt-2 text-gray-500">Tarif : 80€ TTC</p>
          </div>
        </div>
      </div>
    </>
  );
}
