import Button from "./Button";
import noProjectImg from  '../assets/no-projects.png'

export default function NoProjectSelected({onStartAddProject}){
  return(
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImg} alt='An empty task list' className='w-16 h-16 object-contain mx-auto'/>
      <h2 className='text-xl font-bold text-sky-900 my-4'>No Project Selected</h2>
      <p className='text-sky-950 mb-4'>Select a project or get started with a new one</p>
      <p className='mt-8'>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}