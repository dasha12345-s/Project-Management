import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  function handleAddTask(text){
    setProjectState(prevState => {
      const taskId = Math.random(); 
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      }

      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id){
    setProjectState((prevState) => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id)
      };
    });
  }

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const prjId = Math.random(); 
      const newPrj = {
        ...projectData,
        id: prjId,
      }

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newPrj]
      };
    });
  }

  function handleDeleteProject(){
    setProjectState((prevState) => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks.filter((task) => task.projectId === projectsState.selectedProjectId)}/>;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if (projectsState.selectedProjectId  === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-10 flex gap-8">
     <Sidebar 
     onStartAddProject={handleStartAddProject}  
     projects={projectsState.projects}
     onSelect={handleSelectProject}
     selectedProjectId={projectsState.selectedProjectId}/>
     {content}
    </main>
  );
}
export default App;
