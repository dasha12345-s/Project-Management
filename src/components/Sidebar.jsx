import Button from "./Button";


export default function Sidebar({onStartAddProject, projects}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-950 text-sky-50 md:w-72 rounded-tr-lg">
      <h2 className="mb-8 font-bold uppercase md:text-xl  text-sky-100"> All Projects</h2>
      <div>
      <Button onClick={onStartAddProject}> 
      + Add project 
      </Button>
      </div>
      <ul className="mt-8">
        {projects.map(project => <li key={project.id}>
        <button className="'w-full text-left px-2 py-1 rounded-sm my-1 text-sky-200 hover:text-sky-700 hover:bg-stone-300">
          {project.title}</button> </li>)}
        </ul>
      </aside>);
}

