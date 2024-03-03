import {useRef} from 'react'
import Input from "./Input"
import Modal from './Modal';

export default function NewProject({onAdd, onCancel}){
  const modal = useRef();

  const title = useRef();
  const discription = useRef();
  const dueDate = useRef();

  function handleSave(){
    const enteredTitle = title.current.value;
    const enteredDiscription = discription.current.value;
    const enteredDueDate = dueDate.current.value;
  
      if (
        enteredTitle.trim() === '' || 
        enteredDiscription.trim() === '' || 
        enteredDueDate.trim() === ''
        ){
          modal.current.open()
          return;
      }

      onAdd({
        title: enteredTitle,
        discription: enteredDiscription,
        dueDate: enteredDueDate,
      });
  }

  return (
    <>
    <Modal ref={modal} buttonCaption='Okay'>
      <h2 className='text-xl font-bold text-sky-900 my-4'> Invalid Input </h2>
      <p className='text-sky-950 mb-4'> Oops ... looks like you  forgot to enter a value.</p>
      <p className='text-sky-950 mb-4'> Please make sure you provide  a valid value for every input field</p>
    </Modal>
    <div className="w-[35rem]  mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-sky-800 hover:text-sky-950"
          onClick={onCancel}>
          Cancel
          </button></li>
        <li><button className="px-6 py-2 rounded-md bg-sky-800 text-sky-100 hover:bg-sky-950"
        onClick={handleSave}>
          Save
          </button></li>
      </menu>
      <div>
        <Input type='text' ref={title} label='Title'/>
        <Input ref={discription} label='Discription' textarea/>
        <Input type='date' ref={dueDate} label='Due Date'/>
      </div>
    </div>
    </>
  )
}