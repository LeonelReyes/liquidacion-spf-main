import { useState, useEffect } from 'react';
import Error from './Error'
import { DatePicker } from '@material-ui/pickers';

function range(start, end) {
    let a = [];
    for (let i = start; i <= end; i++) {
        a = [... a, i];
    }
    return a;
}

const arrayAnios = range(0, 35)
const arrayDescuentoJudicial = range(0, 35)
let dias = 0



let months = 30.416666666666668;
let years = months * 12;



const Formulario = ({datosAgente, setDatosAgente}) => {

    const [grado, setGrado] = useState ('');
    const [anios, setAnios] = useState ('');
    const [aniosAfuera, setAniosAfuera] = useState ('');
    const [titulo, setTitulo] = useState ('');
    const [variabilidad, setVariabilidad] = useState ('0');
    const [obra, setObra] = useState ('1');
    const [decreto56, setDecreto56] = useState (false);
    const [antiguedad, setAntiguedad] = useState (false);
    const [juicioAnios, setJuicioAnios] = useState (false);
    const [juicioTitulo, setJuicioTitulo] = useState (false);
    const [juicioZona, setJuicioZona] = useState (false);
    const [fijacion, setFijacion] = useState (false);
    const [zona, setZona] = useState (false);
    const [segObligatorio, setSegObligatorio] = useState (true);
    const [casino, setCasino] = useState (false);
    const [subPorFallecimiento, setSubPorFallecimiento] = useState (true);
    const [segColectivo, setSegColectivo] = useState (false);
    const [descJudi, setDescJudi] = useState ('');
    const [mesLiqui, setMesLiqui] = useState ('0');
    // const [cobraVar, setCobraVar] = useState (false);

    const [fechaIngreso, setFechaIngreso] = useState("");
    const [fechaEgreso, setFechaEgreso] = useState("");
    
    const [error, setError] = useState(false)


    
   
           
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación del Formulario
        if( [ grado, anios, mesLiqui ].includes('') ) {
            console.log('Ingrese la Informacion Requerida')

            setError(true)
            return;
        } 
        
        
        const objetoDatosAgente = {

            grado,
            anios,
            aniosAfuera,
            titulo,
            variabilidad,
            obra,
            decreto56,
            antiguedad,
            juicioAnios,
            juicioTitulo,
            juicioZona,
            fijacion,
            zona,
            subPorFallecimiento,
            segObligatorio,
            casino,
            segColectivo,
            descJudi,
            mesLiqui
        
        }

        datosAgente = objetoDatosAgente
        

        // console.log(datosAgente);
        setDatosAgente(datosAgente)

        setError(false)

       // Reiniciar el form
        setGrado('')
        setAnios('')
        setAniosAfuera('')
        setTitulo('')
        setVariabilidad('0')
        setObra('1')
        setDecreto56(false)
        setAntiguedad(false)
        setJuicioAnios(false)
        setJuicioTitulo(false)
        setJuicioZona(false)
        setFijacion(false)
        setZona(false)
        setSegObligatorio(true)
        setCasino(false)
        setSubPorFallecimiento(true)
        setSegColectivo(false)
        setDescJudi('')
        setMesLiqui('0')
        
   }

    let cobraVar= false
    if ((Number (variabilidad)) > 0 ){
        cobraVar = true
    }
    // console.log(typeof Number (variabilidad))
    if (fechaIngreso && fechaEgreso != ""){

        dias = Math.floor((fechaEgreso.getTime() - fechaIngreso.getTime()) / 86400000)
        console.log(dias);

        //calculo 
        var aniios = Math.floor(dias / years);

        dias = dias - (aniios * years);
        var meses = Math.floor(dias / months)

        dias = dias - (meses * months);
        dias = Math.trunc(dias)
        

        console.log(aniios, meses, dias)
        console.log(typeof(Math.trunc(dias)))
        console.log(typeof(anios))

        let aniosStr = aniios.toString();
        console.log(typeof(aniosStr))
        console.log(aniosStr)

        // document.strAnios.innerHTML.value = aniosStr


        


        



        


    }

    return (

        <div className="md:w-6/12 lg:w-2/8 mx-3 mt-1 pb-5">
            

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-2xl rounded-lg py-10 px-5  h-full">
                
                { error &&  <Error><p>Los campos Mes de Liquidación, Grado y Años son Obligatorios</p></Error>}
                
                <div className="mb-5">

                <label htmlFor="mesLiquidacion" className="block text-gray-700 uppercase font-bold mb-5">
                    Seleccione el Mes de liquidacion
                </label>
                   
                <ul className="grid grid-cols-2 gap-x-4  mx-auto mb-10">
                    <li className="relative">
                        <input className="sr-only peer" type="radio" value="0" name="radioMes" id="idEnero"
                        
                        onChange={ (e) => setMesLiqui(e.target.value) }
                        />
                        <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent justify-center" htmlFor="idEnero">Enero</label>

                        
                    </li>

                    <li className="relative">
                        <input className="sr-only peer" type="radio" value="1" name="radioMes" id="idMarzo" 
                        
                        onChange={ (e) => setMesLiqui(e.target.value) }
                        />
                        <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent justify-center" htmlFor="idMarzo">Marzo 23.13%</label>
                        

                    </li>
                    {/* <li className="relative">
                        <input className="sr-only peer" type="radio" value="2" name="radioMes" id="idEnero"
                        
                        onChange={ (e) => setMesLiqui(e.target.value) }
                        />
                        <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent justify-center" htmlFor="idEnero">Noviembre 10%</label>

                        
                    </li>
                    <li className="relative">
                        <input className="sr-only peer" type="radio" value="3" name="radioMes" id="idMarzo"
                        onChange={ (e) => setMesLiqui(e.target.value) }
                        />
                        <label className="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent justify-center" htmlFor="idMarzo">Enero 10%</label>

                        
                    </li> */}
                </ul>                    



                    <label htmlFor="grado" className="block text-gray-700 uppercase font-bold">
                        Ingrese su Grado
                    </label>
                    
                    <select name="strGrado" id="idGrado" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={grado}
                        onChange={ (e) => setGrado(e.target.value) }
                        
                    >
                        <option value="">--Seleccione su grado--</option>
                        <option value="0">Inspector General</option>
                        <option value="1">Prefecto</option>
                        <option value="2">Subprefecto</option>
                        <option value="3">Alcaide Mayor</option>
                        <option value="4">Alcaide</option>
                        <option value="5">Subalcaide</option>
                        <option value="6">Adjutor Principal</option>
                        <option value="7">Adjutor</option>
                        <option value="8">Subadjutor</option>
                        <option value="9">Ayudante Mayor</option>
                        <option value="10">Ayudante Principal</option>
                        <option value="11">Ayudante de 1ra.</option>
                        <option value="12">Ayudante de 2da.</option>
                        <option value="13">Ayudante de 3ra.</option>
                        <option value="14">Ayudante de 4ta.</option>
                        <option value="15">Ayudante de 5ta.</option>
                        <option value="16">Subayudante</option>
                        <option value="17">Cadete de 2do.</option>
                        <option value="18">Cadete de 3ro.</option>
                    </select>
                    
                </div>

                <div className="mb-5">
                    <label htmlFor="strAnios" className="block text-gray-700 uppercase font-bold">
                        Ingrese los años de Servicio
                    </label>

                   
                    <select name="strAnios" id="strAnios" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={anios}
                        onChange={ (e) => setAnios(e.target.value) }
                    >
                        <option value="">--Ingrese los años de Servicio--</option>
                        {
                            arrayAnios.map ((item, i) => (

                                <option key= {"arrayAnios" +i } value= {i}> {item}  </option>
                            ))
                        }
                   
                    </select> 
                </div>

                <div className="mb-5">
                    <label htmlFor="aniosAfuera" className="block text-gray-700 uppercase font-bold">
                        Ingrese los años de Aporte extrainstitucionales
                    </label>

                   
                    <select name="aniosAfuera" id="aniosAfuera" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={aniosAfuera}
                        onChange={ (e) => setAniosAfuera(e.target.value) }
                    >
                        <option value="">--Ingrese los años de Servicio Extrainstitucionales--</option>
                        {
                            arrayAnios.map ((item, i) => (

                                <option key= {"arrayAnios" +i } value= {i}> {item}  </option>
                            ))
                        }
                   
                    </select> 

                </div>

                <div className='grid grid-cols-2 gap-x-4  mx-auto'>

                    <div className="mb-10">
                        <label htmlFor="fingreso" className="block text-gray-700 uppercase font-bold mb-5" >
                            Ingrese la fecha de Ingreso
                        </label> 
                        <DatePicker 
                            value={fechaIngreso} 
                            onChange={setFechaIngreso} 
                            disableFuture
                            openTo="year"
                            format="dd/MM/yyyy"
                            views={["year", "month", "date"]}
                        /> 
                        

                    </div>

                    <div className="mb-10">
                        <label htmlFor="fegreso" className="block text-gray-700 uppercase font-bold mb-5">
                            Ingrese la fecha de Egreso
                        </label>  
                        <DatePicker 
                            value={fechaEgreso} 
                            onChange={setFechaEgreso}
                            openTo="year"
                            format="dd/MM/yyyy"
                            views={["year", "month", "date"]}
                        />
                        
                    </div>
                </div>

                    <label htmlFor="antTotal" className="block text-gray-700 uppercase font-bold mb-10" >    
                        Total de años: {aniios} Años,  {meses} meses,  {dias} dias.
                    </label> 
          



                <div className="mb-5">
                    <label htmlFor="titulo" className="block text-gray-700 uppercase font-bold">
                        Titulo Terciario o Universitario
                    </label>

                    <select name="titulo" id="titulo" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={titulo}
                        onChange={ (e) => setTitulo(e.target.value) }
                    >
                       <option value=""></option>
                       <option value="1">Terciario</option>
                       <option value="2">Universitario</option>
                       <option value="3">Posgrado</option>
                       

                    </select> 
                    
                </div>

                {/* <div className="mb-5">
                    <label htmlFor="strVar" className="block text-gray-700 uppercase font-bold">
                        Variabilidad de vivienda
                    </label>
                    
                    <select name="strVariabilidad" id="idVariabilidad" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md disabled"
                        value={variabilidad}
                        onChange={ (e) => setVariabilidad(e.target.value) }
                        // onChange={ (e) => setCobraVar(true)}
                        
                        disabled = {fijacion}

                        
                    >
                       <option value=""></option>
                       <option value="1">Sin cargo</option>
                       <option value="2">Con cargo</option>
                                              
                    </select>
              
                     
                </div> */}

                <div className="mb-5">
                    <label htmlFor="obra" className="block text-gray-700 uppercase font-bold">
                        Aporte Obra Social
                    </label>
                    
                    <select name="obra" id="idObra" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={obra}
                        onChange={ (e) => setObra(e.target.value) }
                    >
                       <option value="1">5.5 %</option>
                       <option value="2">6.5 %</option>
                       <option value="3">7.5 %</option>
                                              
                    </select>
              
                     
                </div>

                <div className="flex justify-between py-2 pr-10">
                    <label htmlFor="idJuicioAnios" className="block text-gray-700 uppercase font-bold ">
                        Con el 2 % por año de Servicio 
                    </label>
                       
                    <input id="idJuicioAnios" aria-describedby="idJuicioAnios" type="checkbox" className="py-2 px-10 w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked= {juicioAnios}
                    
                    onChange={ (e) => setJuicioAnios(e.target.checked) }
                    />
                        
                </div>

                <div className="flex justify-between py-2 pr-10">
                    <label htmlFor="idJuicioTitulo" className="block text-gray-700 uppercase font-bold ">
                        Juicio Título 
                    </label>
                       
                    <input id="idJuicioTitulo" aria-describedby="idJuicioTitulo" type="checkbox" className="py-2 px-10 w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked= {juicioTitulo}
                    
                    onChange={ (e) => setJuicioTitulo(e.target.checked) }
                    />
                        
                </div>

                <div className="flex justify-between py-2 pr-10">
                    <label htmlFor="idJuicioZona" className="block text-gray-700 uppercase font-bold ">
                        Juicio Zona Austral 
                    </label>
                       
                    <input id="idJuicioZona" aria-describedby="idJuicioZona" type="checkbox" className="py-2 px-10 w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked= {juicioZona}
                    
                    onChange={ (e) => setJuicioZona(e.target.checked) }
                    />
                        
                </div>
                
                {/* <div className="flex justify-between py-2 pr-10">
                    <label htmlFor="decreto56" className="block text-gray-700 uppercase font-bold ">
                        Suma fija Decreto 56/2020
                    </label>
                       
                    <input id="decreto56" aria-describedby="decreto56" type="checkbox" className="py-2 px-10 w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked= {decreto56}
                    
                    onChange={ (e) => setDecreto56(e.target.checked) }
                    />
                        
                </div> */}

                {/* <div className="flex justify-between py-2 pr-10">
                    <label htmlFor="antiguedad" className="block text-gray-700 uppercase font-bold ">
                        Permanencia en el Grado
                    </label>
                       
                    <input id="antiguedad" aria-describedby="antiguedad" type="checkbox" className="py-2 px-10 w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked= {antiguedad}
                    
                    onChange={ (e) => setAntiguedad(e.target.checked) }
                    />
                        
                </div>
               

                    <div className="flex justify-between py-2 pr-10">
                        <label htmlFor="idFijacion" className="block text-gray-700 uppercase font-bold">
                            Comp. Fijacion de domicilio
                        </label>
                        
                        <input id="idFijacion" aria-describedby="fijacion" type="checkbox" className="py-2 px-10 w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 disabled"
                        checked={fijacion}
                        onChange={ (e) => setFijacion(e.target.checked) }
                        disabled = {cobraVar}
                        />  
                    </div> */}

                

                <div className="flex justify-between py-2 pr-10 pb-10">
                    <label htmlFor="zona" className="block text-gray-700 uppercase font-bold">
                        Sup. Zona Sur
                    </label>
                    
                    <input id="zona" aria-describedby="zona" type="checkbox" className="py-2 px-10  w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked={zona}
                    onChange={ (e) => setZona(e.target.checked) }
                    /> 
                </div>


                <div className="flex justify-between py-2 pr-10 ">
                    <label htmlFor="segColectivo" className="block text-gray-700 uppercase font-bold">
                        Seguro Colectivo
                    </label>
                    
                    <input id="segColectivo" aria-describedby="segColectivo" type="checkbox" className="py-2 px-10  w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked={segColectivo}
                    onChange={ (e) => setSegColectivo(e.target.checked) }
                    /> 
                </div>




                <div className="flex justify-between py-2 pr-10 ">
                    <label htmlFor="subPorFallecimiento" className="block text-gray-700 uppercase font-bold">
                        Sub. por Fallecimiento
                    </label>
                    
                    <input id="subPorFallecimiento" aria-describedby="subPorFallecimiento" type="checkbox" className="py-2 px-10  w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked={subPorFallecimiento}
                    onChange={ (e) => setSubPorFallecimiento(e.target.checked) }
                    /> 
                </div>

                <div className="flex justify-between py-2 pr-10 mb-5">
                    <label htmlFor="segObligatorio" className="block text-gray-700 uppercase font-bold">
                        Seguro Obligatorio
                    </label>
                    
                    <input id="segObligatorio" aria-describedby="segObligatorio" type="checkbox" className="py-2 px-10  w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked={segObligatorio}
                    onChange={ (e) => setSegObligatorio(e.target.checked) }
                    /> 
                </div>

                {/* <div className="flex justify-between py-2 pr-10 pb-10">
                    <label htmlFor="casino" className="block text-gray-700 uppercase font-bold">
                        Casino
                    </label>
                    
                    <input id="casino" aria-describedby="casino" type="checkbox" className="py-2 px-10  w-5 h-5 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    checked={casino}
                    onChange={ (e) => setCasino(e.target.checked) }
                    /> 
                </div> */}


                    <div className="mb-5 pb-5">
                        <label htmlFor="idDescJudi" className="block text-gray-700 uppercase font-bold">
                            Ingrese el % de Descuento Judicial
                        </label>

                    
                        <select name="descJudi" id="idDescJudi" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={descJudi}
                            onChange={ (e) => setDescJudi(e.target.value) }
                            >
                            <option value="">--Ingrese el % de descuento--</option>
                            {
                                arrayDescuentoJudicial.map ((item, i) => (

                                    <option key= {"arrayDescuentoJudicial" +i } value= {i}> {item}  </option>
                                ))
                            }
                    
                        </select> 
                    </div>

                    <input
                        type="submit"
                        className=" bg-blue-400 w-full font-black text-2xl text-center p-3 text-white  hover:bg-blue-700/80 cursor-pointer transition-colors rounded-lg"
                        value="Calcular"                                              
                                    
                    />

            </form>





        </div>

    )
}

export default Formulario
