import Button from "./Button";


export default function Sidebar({onStartAddProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-950 text-sky-50 md:w-72 rounded-tr-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl  text-sky-100"> All Projects</h2>
      <div>
      <Button onClick={onStartAddProject}> + Add project </Button>
      </div>
      <ul></ul>
      </aside>);
}

