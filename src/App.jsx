import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Calcular from './components/Calcular'

function App() {
  
  const [datosAgente, setDatosAgente] = useState ({})

  return (
    
    

    
    <div className="container mx-auto  pt-10">
      
      <Header/>
      <div className="ml-3 mt-12 ">
        <h2 className="font-black text-gray-700 text-2xl pl-6 ">Complete el Formulario</h2>
      </div>

      <div className="mt-4 md:flex ">
        <Formulario
          datosAgente = {datosAgente}
          setDatosAgente ={setDatosAgente}
        />

        <Calcular
          datosAgente ={datosAgente}
          setDatosAgente ={setDatosAgente}
        />
      </div>

      

    </div>

   

  )
}

export default App
