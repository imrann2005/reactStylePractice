export default function Button({children,...props}){
    return(
        <button {...props} className="px-4 py-2 my-4 mx-2 font-semibold uppercase rounded text-stone-900 bg-amber-800 hover:bg-amber-500">
    {children}
        </button>
    )

}