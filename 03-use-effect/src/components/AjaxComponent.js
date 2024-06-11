import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {
    
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");
    
    // Generico / Basico
    // const getUsuarioEstaticos = () => {
    //     setUsuarios([
    //         {
    //             "id": 1,
    //             "email": "david@reqres.in",
    //             "first_name": "David",
    //             "last_name": "Rivera"
    //         },
    //         {
    //             "id": 2,
    //             "email": "lindsay@reqres.in",
    //             "first_name": "Lindsay",
    //             "last_name": "Lohan"
    //         },
    //         {
    //             "id": 3,
    //             "email": "tobias@reqres.in",
    //             "first_name": "Tobias",
    //             "last_name": "Temprano"
    //         }
    //     ]);
    // }

    // const getUsuariosAjaxPms = () => {
    //     fetch("https://reqres.in/api/users?page=1")
    //         .then(respuesta => respuesta.json())
    //         .then(resultado_final => {
    //             setUsuarios(resultado_final.data);
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //         )
    // }

    const getUsuariosAjaxAW = () => {

        setTimeout(async() => {
            try{
                const peticion = await fetch("https://reqres.in/api/users?page=1");
                const {data} = await peticion.json();
        
                setUsuarios(data);
                setCargando(false);
            } catch(error){
                console.log(error.message);
                setErrores(error.message);
            }
        }, 1000);
    }

    useEffect(() => {
        // getUsuarioEstaticos();
        // getUsuariosAjaxPms();
        getUsuariosAjaxAW();
    }, []);

    if(errores !== ""){
        //Cuando pasa algun error
        return(
            <div className='errores'>
                {errores}
            </div>
        );
    }else if(cargando === true){
        //Cuando esta todo cargando
        return(
            <div className='cargando'>
                Cargando datos...
            </div>
        );
    }else if(cargando === false && errores === ""){
        //Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
    
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            console.log(usuario);
                            return (
                                <li key={usuario.id}>
                                    <img src={usuario.avatar} width="20" />
                                    &nbsp;
                                    {usuario.first_name} {usuario.last_name}
                                </li>
                            );
                        })
                    }
                </ol>
            </div>
        );
    }

}