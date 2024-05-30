const haberesPorGrado = [1870373.27, 1654705.66, 1485380.82, 1214238.82, 1088606.23, 919546.58, 787124.22, 693560.30, 645135.27, 1052760.31, 937995.01, 868242.32, 762257.84, 715401.52, 680209.46, 648145, 617918.64, 256484.84, 248774.61]  

const titTerciario = [280557.04, 248206.34, 222808.17, 182135.47, 163291.36, 137933.88, 118068.28, 104035.52, 96771.48, 157914.54, 140699.46, 130237.68, 114340.15, 10731044, 102033.24, 97221.89, 92689.76]

const titUniversitario = [467595.07, 413676.76, 371345.55, 303560.05, 272153.66, 229888.40, 196782.81, 173391.13, 161284.87, 263190.43, 234499.10, 217060.93, 190564.11, 178849.33, 170053.07, 162038.35, 154479.66]

const cargasVariabilidad = [77816.52, 104884.42]

const compFijacion = [135310.02, 135310.02, 135310.02, 101488.83, 101488.83, 67657.81]

const zonaSur = [0, 81143.35, 71980.88, 57588.91, 49736.96, 41878.00, 37952.02, 37292.55, 35983.42, 48419.42, 43182.91, 39262.55, 38600.27, 37952.02, 36649.91, 35328.16, 34675.70]
    
const pocentajeAumento = [1, 1.0914]

const porcetajeSAS = [0.005, 0.005, 0.01, 0.015, 0.02]


const nomGrado = ['Inspector General', 'Prefecto', 'Subprefecto', 'Alcaide Mayor', 'Alcaide', 'Subalcaide', 'Adjutor Principal', 'Adjutor', 'Subadjutor', 'Ayudante Mayor', 'Ayudante Principal', 'Ayudante de 1ra.', 'Ayudante de 2da.', 'Ayudante de 3ra.', 'Ayudante de 4ta.', 'Ayudante de 5ta.', 'Subayudante']

const porcObra = [0, 5.5, 6.5, 7.5]


const porcentajeOficial = [0.3,	0.34, 0.38, 0.42, 0.46, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.69, 0.73, 0.77, 0.81, 0.85, 0.88, 0.91, 0.94, 0.97, 1, 1, 1, 1, 1, 1]

const porcentajeSuboficial = [0.3, 0.34, 0.38, 0.42, 0.46, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]


const Calcular = ({datosAgente, setDatosAgente}) => {

    const { grado, anios, aniosAfuera, titulo, variabilidad, obra, juicioAnios, juicioTitulo, juicioZona, decreto56, antiguedad, fijacion, zona, subPorFallecimiento, segObligatorio, casino, segColectivo, descJudi, mesLiqui } = datosAgente
           
    let totalHaberes = 0
    let totalDescuentos = 0
    let totalSueldoNeto = 0

    let porcentajeMostrar= ''

    let haberMensual = 0
    let supAniosDeServicio = 0
    let sumFijaDecreto56 = 0
    let supPorAntiguedadEnElGrado = 0
    let bonificacionPorTitulo = 0
    let bonVariabilidad= 0
    let supZonaSur = 0

    let compPorFijacionDeDomicilio = 0

    let aporteJubilatorio = 0
    let aporteObraSocial = 0
    let descSubPorFallecimiento = 0
    let descSegObligatorio = 0
    let descCasino = 0
    let descSegColectivo = 0
    let descJudicial = 0
    
    
    // console.log(datosAgente);
        

    if (grado){
        //Aca tenemos que multiplicar por el porcentaje correspondiente a los años de aporte y de afuera       
        if (grado < 9){
            haberMensual = (((Number(haberesPorGrado[grado])* Number(pocentajeAumento[mesLiqui])) * porcentajeOficial [(Number(anios) + Number(aniosAfuera)) - 10])).toFixed(2)
            porcentajeMostrar= (porcentajeOficial [(Number(anios) + Number(aniosAfuera)) - 10])* 100
        } else if (grado > 8) {
            haberMensual = (((Number(haberesPorGrado[grado])* Number(pocentajeAumento[mesLiqui])) * porcentajeSuboficial [(Number(anios)+ Number(aniosAfuera)) - 10])).toFixed(2)
            porcentajeMostrar= (porcentajeSuboficial [(Number(anios)+ Number(aniosAfuera)) - 10])* 100
        }
    }

    if (grado){
        // haberMensual = (Number(haberesPorGrado[grado])* Number(pocentajeAumento[mesLiqui])).toFixed(2)
        supAniosDeServicio = (((Number(haberMensual) * 0.02)) * Number(anios)).toFixed(2)
        // if (juicioAnios){
        //     supAniosDeServicio = ((Number(haberMensual) * 0.02) * Number(anios) ).toFixed(2)
        // }else if (!juicioAnios){
            
        //     supAniosDeServicio = ((Number(haberMensual) * 0.005) * Number(anios) ).toFixed(2)        
        // }
        
        
    }

                        
    if (titulo == 1){
        bonificacionPorTitulo = (Number(haberMensual) * 0.15).toFixed(2)
    }else if (titulo ==2){
        bonificacionPorTitulo = (Number(haberMensual) * 0.25).toFixed(2)
    }else if (titulo == 3){
        bonificacionPorTitulo = (Number(haberMensual) * 0.25).toFixed(2)
    }


    // if (juicioTitulo){

    //     if (titulo == 1){
    //         bonificacionPorTitulo = (Number(haberMensual) * 0.15).toFixed(2)
    //     }else if (titulo ==2){
    //         bonificacionPorTitulo = (Number(haberMensual) * 0.25).toFixed(2)
    //     }else if (titulo == 3){
    //         bonificacionPorTitulo = (Number(haberMensual) * 0.25).toFixed(2)
    //     }

    // }else if (!juicioTitulo){
   
    //     if (titulo == 1){
    //         bonificacionPorTitulo = (Number(titTerciario[grado]) * Number(pocentajeAumento[mesLiqui])).toFixed(2)
    //     }else if (titulo ==2){
    //         bonificacionPorTitulo = (Number(titUniversitario[grado])* Number(pocentajeAumento[mesLiqui])).toFixed(2)
    //     }else if (titulo == 3){
    //         bonificacionPorTitulo = (Number(titPosgrado[grado])* Number(pocentajeAumento[mesLiqui])).toFixed(2)
    //     }
    // }

    
    if(antiguedad){
        supPorAntiguedadEnElGrado = (Number(haberMensual) * 0.02).toFixed(2)  
    }

    if(decreto56){
        sumFijaDecreto56 = 4000
    }

    if (obra == 1){
        aporteObraSocial = ((Number(haberMensual) + 
                            Number(sumFijaDecreto56) +
                            Number(supPorAntiguedadEnElGrado) +
                            Number(bonificacionPorTitulo) +
                            Number(supAniosDeServicio))* 0.055).toFixed(2)
    } else if (obra == 2) {
        aporteObraSocial = ((Number(haberMensual) + 
                            Number(sumFijaDecreto56) +
                            Number(supPorAntiguedadEnElGrado) +
                            Number(bonificacionPorTitulo) +
                            Number(supAniosDeServicio))* 0.065).toFixed(2)
    } else if (obra == 3) {
        aporteObraSocial = ((Number(haberMensual) + 
                            Number(sumFijaDecreto56) +
                            Number(supPorAntiguedadEnElGrado) +
                            Number(bonificacionPorTitulo) +
                            Number(supAniosDeServicio))* 0.075).toFixed(2)
    }
    
    if (grado){
        aporteJubilatorio = ((Number(haberMensual) + 
                            Number(sumFijaDecreto56) +
                            Number(supPorAntiguedadEnElGrado) +
                            Number(bonificacionPorTitulo) +
                            Number(supAniosDeServicio))* 0.08).toFixed(2)
    }
      
    

    if (fijacion){
        compPorFijacionDeDomicilio = (Number(compFijacion[grado])* Number(pocentajeAumento[mesLiqui])).toFixed(2)
    }
    
     
    if (variabilidad == 1){
        bonVariabilidad = Number(cargasVariabilidad[0])* Number(pocentajeAumento[mesLiqui])
    } else if (variabilidad == 2) {
        bonVariabilidad = Number(cargasVariabilidad[1])* Number(pocentajeAumento[mesLiqui])
    }


    if(juicioZona ){
        supZonaSur = (Number(haberMensual) * 0.40 ).toFixed(2)
    }else if (zona){
        supZonaSur = Number(zonaSur[Number(grado)])* Number(pocentajeAumento[mesLiqui])
    }

    if(subPorFallecimiento){
        descSubPorFallecimiento = 887.23
    }

    if(segObligatorio){
        descSegObligatorio = 3.8
    }

    if(casino){
        if(Number(grado) > 8){
            descCasino = (((Number(haberesPorGrado[16])* Number(pocentajeAumento[mesLiqui])).toFixed(2))*.008).toFixed(2)
        }
        else{
            descCasino = (((Number(haberesPorGrado[8])* Number(pocentajeAumento[mesLiqui])).toFixed(2))*.012).toFixed(2)
        }
    }




    if(segColectivo){
        descSegColectivo = ((Number(haberMensual) + 
                            Number(sumFijaDecreto56) +
                            Number(supPorAntiguedadEnElGrado) +
                            Number(bonificacionPorTitulo) +
                            Number(supAniosDeServicio))* 0.0072).toFixed(2)


    }


    if((descJudi) & (grado)){
        descJudicial = (((Number(haberMensual)) * ((Number(descJudi))/100))).toFixed(2)
        console.log(descJudi);
        console.log(descJudicial);
        console.log(typeof descJudicial);
    }


    if (grado){
    totalHaberes = 
                (Number(haberMensual) + 
                Number(supAniosDeServicio) + 
                Number(bonificacionPorTitulo) + 
                Number(sumFijaDecreto56) +  
                Number(supPorAntiguedadEnElGrado) +
                Number(bonVariabilidad) + 
                Number(supZonaSur) +                  
                Number(compPorFijacionDeDomicilio)).toFixed(2)

    totalDescuentos = 
                (Number(aporteJubilatorio) +
                Number(aporteObraSocial) +
                Number(descSubPorFallecimiento) +
                Number(descSegColectivo) +
                Number(descJudicial) +
                Number(descCasino) +
                Number(descSegObligatorio)).toFixed(2)

    totalSueldoNeto = (totalHaberes - totalDescuentos).toFixed(2)
    }
    




  return (
    <div className="md:w-7/12 lg:w-2/8 mx-3 mt-1 pb-3  overflow-auto rounded-lg shadow ">
        
       

        <table className="w-full ">
            <thead className="bg-blue-300 text-white  text-center ">
                <tr>
                    <th scope="col"><h2 className="font-black text-2xl text-center py-3 ">Haberes {nomGrado[grado]}</h2>
                    </th>
                </tr>
            </thead>
        </table>


        <table className="w-full bg-white shadow-xl">
            <tbody className="divide-y divide-gray-200 ">
                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Haber Mensual {porcentajeMostrar} %</h3></td>
                    <td><h4 className="w-auto">$ {haberMensual}</h4></td>
                </tr>

                <tr className="">
                    <td><h3 className="  text-gray-700 uppercase font-bold m-3 ">Suplemento años de servicio: {anios}</h3></td>
                    <td><h4 className="w-auto">$ {supAniosDeServicio}</h4></td> 
                </tr>

                {/* <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Suma fija decreto 56/2020</h3></td>
                    <td>$ {sumFijaDecreto56}</td>
                </tr> */}

                {/* <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Permanencia en el grado</h3></td>
                    <td>$ {supPorAntiguedadEnElGrado}</td> 
                </tr> */}

                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">bonificacion por titulo</h3></td>
                    <td>$ {bonificacionPorTitulo}</td>
                </tr>

                {/* <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Comp. Fijacion de domicilio</h3></td>
                    <td>$ {compPorFijacionDeDomicilio}</td>
                </tr> */}

                {/* <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">variabilidad de vivienda</h3></td>
                    <td>$ {bonVariabilidad}</td>
                </tr> */}

                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">zona sur</h3></td>
                    <td>$ {supZonaSur}</td>
                </tr>
            </tbody>
        </table>

        <table className="w-full ">
            <thead className="bg-blue-300 text-white text-center w-max ">
                <tr>
                <th scope="col"><h4 className="text-2xl text-center py-1">Total Haberes: $ {totalHaberes}</h4></th>
                </tr>
            </thead>
        </table>



        <table className="w-full shadow-2xl mt-3 h-max ">
            <thead className="bg-blue-300 text-white  text text-center w-max ">
                <tr>
                    <th scope="col"><h3 className="font-black text-2xl text-center py-3 ">Descuentos</h3>
                    </th>
                </tr>
            </thead>
        </table>

        <table className="w-full bg-white shadow-xl">
            <tbody className="divide-y divide-gray-200 ">
                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Aporte Jubilatorio 8 %</h3></td>
                    <td><h4 className="w-auto">$ {aporteJubilatorio}</h4></td>
                </tr>
                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Aporte obra social     {porcObra[obra]}</h3></td>
                    <td><h4 className="w-auto">$ {aporteObraSocial}</h4></td>
                </tr>
                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Sub por Fallecimiento</h3></td>
                    <td>$ {descSubPorFallecimiento}</td>

                </tr>
                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Seguro Obligatorio</h3></td>
                    <td>$ {descSegObligatorio}</td>
                </tr>
                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Seguro Colectivo</h3></td>
                    <td>$ {descSegColectivo}</td>
                </tr>
                {/* <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Casino</h3></td>
                    <td>$ {descCasino}</td>
                </tr> */}
                <tr>
                    <td><h3 className=" text-gray-700 uppercase font-bold m-3">Descuentos Judiciales</h3></td>
                    <td>$ {descJudicial}</td>
                </tr>          

            </tbody>
        </table>

        <table className="w-full shadow-2xl">
            <thead className="bg-blue-300 text-white text-center w-max  ">
                <tr>
                    <th scope="col"><h4 className="text-2xl text-center py-1">Total Descuentos: $ {totalDescuentos}</h4></th>
                </tr>
            </thead>
        </table>

        <table className="w-full shadow-2xl rounded-t-lg p-3 mt-3">
            <thead className="bg-blue-400 text-white  w-max rounded-t-lg ">
                <tr>
                    <th scope="col"><h3 className="p-2 font-black text-2xl text-center ">Total Neto:</h3></th>
                    <th scope="col"><h2 className="font-black text-2xl text-center">$ {totalSueldoNeto}</h2></th>
                </tr>
            </thead>
        </table>
   


    </div>



  )
}

export default Calcular