import { useState, useEffect } from "react";
import Error from "../Error/Error";



function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=> {
        if( Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const randomID = Math.random().toString(36).substring(2);
        const fechaID = Date.now().toString(36);
        
        return randomID + fechaID;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Validación del Formulario
        if([ nombre, propietario, email, fecha, sintomas ].includes('')) { {/* "Si alguno está vacío, setError === true" */}
            
            setError(true);
            return;
        } 

        setError(false); {/* Lo tenemos que volver a false para que desaparezca el cartel de error */}

        // Objeto Paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
        }

        if(paciente.id) {
            // Editando Paciente
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            // Agregando nuevo paciente
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }


        // Reiniciar el Form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form
            onSubmit={ handleSubmit }
            className="bg-white shadow-md rounded-lg mt-8 mb-10 py-10 px-5"
        >
            {/* ⬇️ Para cuando hay un campo vacío en el form ⬇️ */}
            { error && <Error>Todos los campos son obligatorios</Error>} 
            {/* ⬆️ Para cuando hay un campo vacío en el form ⬆️ */}

            <div className="mb-5">  
                <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
                <input 
                id="mascota"
                type="text" 
                placeholder="Nombre de la Mascota" 
                className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                value = { nombre }
                onChange = { (e) => setNombre(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>
                <input 
                id="propietario"
                type="text" 
                placeholder="Nombre del Propietario" 
                className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                value = { propietario }
                onChange = { (e) => setPropietario(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="email">E-mail</label>
                <input 
                id="email"
                type="email" 
                placeholder="Email Propietario" 
                className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                value = { email }
                onChange = { (e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="fecha">Alta</label>
                <input 
                id="fecha"
                type="date" 
                className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                value = { fecha }
                onChange = { (e) => setFecha(e.target.value)}
                />
            </div>

            <div className="mb-5">
                <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
                <textarea 
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
                    placeholder="Describe los Síntomas"
                    value = { sintomas }
                    onChange = { (e) => setSintomas(e.target.value)}
                />

                <input
                    type="submit" 
                    className="bg-indigo-600 w-full p-2 rounded-md mt-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
                />
            </div>
        </form>
    </div>

  )
}

export default Formulario;