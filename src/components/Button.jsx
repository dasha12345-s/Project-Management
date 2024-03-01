export default function Button({children, ...props}){
  return(
    <button className="px-4 py-2 text-xs md:text-base rounded-md bg-sky-700 text-stone-300 hover:bg-sky-500 hover:text-sky-700" {...props}>{children}</button>
  )
}