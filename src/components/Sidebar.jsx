export default function Sidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-950 text-sky-50 md:w-72 rounded-tr-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl  text-sky-100"> All Projects</h2>
      <div>
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-sky-700 text-stone-300 hover:bg-sky-500 hover:text-sky-700"> + Add project </button>
      </div>
      <ul></ul>
      </aside>);
}

