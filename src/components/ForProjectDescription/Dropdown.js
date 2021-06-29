export default function Dropdown() {
  return (
    <div className="inline-block relative w-27 h-10 mt-3 mb-3">
      <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option>Recommend</option>
        <option>Freelance A</option>
        <option>Frelance B</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700" />
    </div>
  );
}
