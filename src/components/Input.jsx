export default function Input({label, textarea, ...props}){
  
  const classes = "w-full p-1 borfer-b-2 rounded-sm border-stone-100 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

  return (
  <p className="flex flex-col gap-1 my-4">
    <label className="text-sm font-bold uppercase text-sky-500">{label}</label>
  {textarea ? <textarea className={classes}
  {...props}/> : <input className={classes} {...props}/>}
  </p>
  );
}