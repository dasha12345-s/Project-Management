import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/sidebar";

function App() {

  const [projectsState,setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData){
    setProjectState(prevState => {
      const newPrj = {
        ...projectData,
        id: Math.random()
      }

      return{
        ...prevState,
        projects: [...prevState.projects, newPrj]
      };
    });
  }

console.log(projectsState)

  let content;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  } else if (projectsState.selectedProjectId  === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-10 flex gap-8">
     <Sidebar onStartAddProject={handleStartAddProject}/>
     {content}
    </main>
  );
}
export default App;
