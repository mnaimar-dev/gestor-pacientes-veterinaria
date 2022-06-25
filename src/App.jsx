import { useState, useEffect } from "react";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import ListadoPacientes from "./components/ListadoPacientes/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter((paciente) => paciente.id !== id )

    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-14">
      <Header />
      <div className="md:flex mt-12">
        <Formulario
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = { setPaciente }
        />
        <ListadoPacientes 
          pacientes = { pacientes }
          setPaciente = { setPaciente }
          eliminarPaciente = { eliminarPaciente }
        />
      </div>
    </div>
  )
}

export default App
