import Input from "./components/Input";
import NewProject from "./components/NewProject";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="h-screen my-10 flex gap-8">
     <Sidebar />
     <NewProject/>
    </main>
  );
}
export default App;
