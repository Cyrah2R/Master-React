import React, {useState} from 'react';

export const MiPrimerEstado = () => {

    //Problemática
    // let nombre = "David Rivera";

    // const cambiarNombre = e => {
    //     nombre = "Paquito Fernandez";
    // };

    const [ nombre, setNombre ] = useState("David Rivera");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>

        <strong className="label">
            {nombre}
        </strong>

        &nbsp;
        <button onClick={ e => cambiarNombre(e, "Francisco Rivera") }>Cambiar nombre por Francisco</button>

        &nbsp;
        <input type="text" onChange={ e => cambiarNombre(e, e.target.value) } placeholder='Cambia el nombre' />
        
    </div>
  )
}
