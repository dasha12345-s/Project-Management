import Input from "./Input"

export default function NewProject(){
  return (
    <div className="w-[35rem]  mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="text-sky-800 hover:text-sky-950">Cancel</button></li>
        <li><button className="px-6 py-2 rounded-md bg-sky-800 text-sky-100 hover:bg-sky-950">Save</button></li>
      </menu>
      <div>
        <Input label='Title'/>
        <Input label='Discription'  textarea/>
        <Input label='Due Date'/>
      </div>
    </div>
  )
}