import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Cuando el componente se monta
        alert("El componente AvisoComponent está montado");

        // Cuando el componente se DESmonta
        return() => {
            alert("Componente Desmontado!!");
        };

    }, []); // Se ejecuta una vez porque le paso el array vacio

    return (
        <div>
            <hr />
            <h3>Saludos David!!</h3>
            <button onClick={e => {
                alert("Bienvenido!!")
            }}>Mostrar alerta!!</button>
        </div>
    )
}
