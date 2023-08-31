import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate('/')
  }
  return (
    <div className="grid place-content-center h-[90vh] gap-5 px-10">
      <h2 className="text-6xl text-indigo-600 font-bold">ups...</h2>
      <p className="font-semibold text-4xl">parece que la pagina no se encontro</p>
      <p onClick={handleRedirect} className="cursor-pointer text-center text-2xl mt-4">&larr; volver a <span className="text-indigo-600">Home</span></p>
    </div>
  )
}

export default NotFound