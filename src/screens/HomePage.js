import SideBar from '../components/SideBar';
import project from '../assets/souvik-banerjee--WPrNEM_6dg-unsplash.png';
import project1 from '../assets/picture2.png';

export default function HomePage() {
  return (
    <>
      <div className="mt-10 w-full flex justify-around">
        <div className="m-2 wrapper antialiased text-gray-900">
          <div className="flex justify-center flex-col items-center">
            <img
              src={project}
              alt=" random imgee"
              className="w-3/5 object-cover object-center rounded-lg shadow-md"
            />
            <div className="w-3/5 relative px-4 -mt-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center items-center mb-2">
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    Web Development
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    Jonh Doe
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Wordpress website
                </h4>

                <div className="mt-1">
                  starting 83
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
              src={project1}
              alt=" random imgee"
              className="w-3/5 object-cover object-center rounded-lg shadow-md"
            />
            <div className="w-3/5 relative px-4 -mt-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center items-center mb-2">
                  <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                    SEO
                  </span>
                  <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    Paul Doe
                  </div>
                </div>

                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                  Web referencing
                </h4>

                <div className="mt-1">
                  starting 95
                  <span className="text-gray-600 text-sm">€</span>
                </div>
                <div className="mt-4">
                  <span className="text-teal-600 text-md font-semibold">
                    3,5/5 ratings{' '}
                  </span>
                  <span className="text-sm text-gray-600">
                    (based on 122 ratings)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SideBar />
      </div>
      <div className="mt-20 w-4/5 flex justify-center">
        <p className="w-20 rounded-full  py-2 px-2 bg-green-200 m-4 flex items-center">
          <p className="w-2 rounded-full py-2 px-4 bg-white m-4 flex items-center" />
          <p className="w-20 rounded-full py-2 px-4 bg-green-200 m-4 flex items-center" />
          <p className="w-20 rounded-full py-2 px-4 bg-green-200 m-4 flex items-center" />
        </p>
      </div>
    </>
  );
}
