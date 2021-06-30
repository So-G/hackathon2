/* eslint-disable prettier/prettier */
export default function SideBar() {
  return (
    <div className="flex flex-col">
      <h3 className="rounded-full py-2 px-4 bg-pink-200 m-4">
        They are looking for people
      </h3>
      <div className="h-4/5 m-6 p-5 border-l-2 border-gray-200">
        <ul>
          <li className="m-2">Product Owner 1</li>
          <li className="m-2">Product Owner 2</li>
          <li className="m-2">Product Owner 3</li>
        </ul>
      </div>
    </div>
  );
}
