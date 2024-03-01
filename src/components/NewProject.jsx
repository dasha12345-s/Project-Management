import {useRef} from 'react'
import Input from "./Input"

export default function NewProject({onAdd}){
  const title = useRef();
  const discription = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDiscription = discription.current.value;
    const enteredDueDate = dueDate.current.value;
  
      //validation

      onAdd({
        title: enteredTitle,
        discription: enteredDiscription,
        dueDate: enteredDueDate
      })

  }

  return (
    <div className="w-[35rem]  mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-sky-800 hover:text-sky-950">
          Cancel
          </button></li>
        <li><button className="px-6 py-2 rounded-md bg-sky-800 text-sky-100 hover:bg-sky-950"
        onClick={handleSave}>
          Save
          </button></li>
      </menu>
      <div>
        <Input type='text' ref={title} label='Title'/>
        <Input ref={discription} label='Discription'  textarea/>
        <Input type='date' ref={dueDate} label='Due Date'/>
      </div>
    </div>
  )
}