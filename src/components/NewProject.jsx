export default function NewProject(){
  return (
    <div>
      <menu>
        <li><button>Cancel</button></li>
        <li><button>Save</button></li>
      </menu>
      <div>
        <p>
          <label>Title</label>
          <input />
        </p>
        <p>
          <label>Description</label>
          <textarea />
        </p>
        <p>
          <label>duedate</label>
          <input />
        </p>
      </div>
    </div>
  )
}