
function Error({ children }) {
  return (
    <div className="bg-red-800 text-center text-white uppercase font-bold p-3 rounded-md mb-4">
        <p>{ children }</p>
    </div>
  )
}

export default Error;