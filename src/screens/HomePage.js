import SideBar from '../components/SideBar';
import SecondaryNav from '../components/secondaryNav';
import project from '../assets/souvik-banerjee--WPrNEM_6dg-unsplash.png';

export default function HomePage() {
  return (
    <>
      <SecondaryNav />
      <div className="w-full flex justify-around">
        <div className="m-2 wrapper antialiased text-gray-900">
          <div className="flex justify-center flex-col items-center">
            <img
              src={project}
              alt=" random imgee"
              className="w-3/5 object-cover object-center rounded-lg shadow-md"
            />
            <div className="w-3/5 relative px-4 -mt-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Développement Web
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    Jonh Doe
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Site en Wordpress
                </h4>

                <div className="mt-1">
                  à partir de 83
                  <span className="text-gray-600 text-sm">€</span>
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    4/5 ratings{' '}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 wrapper antialiased text-gray-900">
          <div className="flex justify-center flex-col items-center">
            <img
              src={project}
              alt=" random imgee"
              className="w-3/5 object-cover object-center rounded-lg shadow-md"
            />
            <div className="w-3/5 relative px-4 -mt-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Développement Web
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    Jonh Doe
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Site en Wordpress
                </h4>

                <div className="mt-1">
                  à partir de 83
                  <span className="text-gray-600 text-sm">€</span>
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    4/5 ratings{' '}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on 234 ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SideBar />
      </div>
    </>
  );
}
