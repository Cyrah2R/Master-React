import React from 'react';


export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click al botón!! " + nombre);
    };

    function hasDadoDobleClick(e, nombre) {
        alert("Has dado doble click!! " + nombre);
    }

    const hasEntrado = (e, accion) => {
        console.log(`Has ${accion} a la caja con el mouse!!`);
    }

    const estasDentro = e => {
        console.log("Estas dentro del input, mete tu nombre!!");
    }

    const estasFuera = e => {
        console.log("Estas fuera del input, hasta luego!!");
    }


    return (
        <div>
            <h1>Eventos en React</h1>

            <p>
                {/*Evento click*/}
                <button onClick={e => hasDadoClick(e, "David")}>Dame click!</button>
            </p>

            <p>
                {/*Evento doble click*/}
                <button onDoubleClick={e => hasDadoDobleClick(e, "David")}>Dame doble click!</button>
            </p>

            <div id="caja"
                onMouseEnter={e => hasEntrado(e, "entrado")}
                onMouseLeave={e => hasEntrado(e, "salido")}
            >
                {/*Evento onMouseEnter onMouseLeave*/}
                Pasa por encima!!
            </div>

            <p>
                 {/*Evento onFocus onBlur*/}
                <input type="text" 
                    onFocus={ estasDentro } 
                    onBlur={ estasFuera }
                    placeholder="Introduce tu nombre..."/>
            </p>






        </div>
    );
};
