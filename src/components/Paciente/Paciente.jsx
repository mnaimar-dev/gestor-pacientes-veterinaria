
function Paciente({ paciente, setPaciente, eliminarPaciente }) {

    const { nombre, propietario, email, fecha, sintomas, id } =  paciente;

    const handleEliminar = () => {
        Swal.fire({
            title: '¿Deseas eliminar este paciente?',
            text: "Si lo eliminas, no podrás recuperar su información.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#35994D',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                Swal.fire(
                'Eliminado!',
                'El paciente fue eliminado correctamente.',
                'success'
              )
            }
          })

    }

  return (
    <div className="mx-5 bg-white shadow-md mt-8 px-5 py-9 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{ nombre }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{ propietario }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case"> { email } </span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{ fecha }</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">
            { sintomas }
            </span>
        </p>

        <div className="flex justify-between mt-7">
            <button
            type="button"
            className="px-10 py-2 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
            onClick={ () => setPaciente(paciente) }
            >Editar</button>
            
            <button
            type="button"
            className="px-10 py-2 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
            onClick={handleEliminar}
            >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente;