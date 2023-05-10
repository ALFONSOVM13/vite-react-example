import React from 'react';

const Formulario = () => {
    const [nombre, setNombre] = React.useState("");
    const [apellido, setApellido] = React.useState("");
    const [lista, setLista] = React.useState([]);
    const [editando, setEditando] = React.useState(false);
    const [indiceEditar, setIndiceEditar] = React.useState(null);

    const registrarDatos = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            alert("Nombre no puede estar vacio");
            return;
        }
        if (!apellido.trim()) {
            alert("Apellido no puede estar vacio");
            return;
        }
        
        //agregar usuario
        if (editando) {
            const nuevaLista = [...lista];
            nuevaLista[indiceEditar] = { nombre, apellido };
            setLista(nuevaLista);
            setEditando(false);
            setIndiceEditar(null);
        } else {
            setLista([
                ...lista,
                { nombre, apellido }
            ]);
        }
        //resetar inputs
        setNombre("");
        setApellido("");
    };


    const eliminarUsuario = (indice) => {
        const nuevaLista = lista.filter((elemento, index) => index !== indice);
        setLista(nuevaLista);
    };

    const editarUsuario = (indice) => {
        // obtener el elemento correspondiente al índice
        const elemento = lista[indice];
        // establecer el nombre y el apellido en los inputs
        setNombre(elemento.nombre);
        setApellido(elemento.apellido);
        setEditando(true);
        // eliminar el elemento de la lista
        setIndiceEditar(indice);
    };

    return (
        <div className='container'>
            <h2>Formulario</h2>
            <form onSubmit={registrarDatos}>
            <input
                type="text"
                placeholder='Ingrese su nombre'
                className='form-control form-group mb-3'
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
            />


                <input
                    type="text"
                    placeholder='Ingrese su apellido'
                    className='form-control form-group mb-3'
                    onChange={(e) => setApellido(e.target.value)}
                    value={apellido}
                />

            <button className='btn btn-primary' type='submit'>Registrar</button>

            </form>

            <hr />

            <h2 class="listado-titulo">Listado de usuarios registrados</h2>
            <ol>
                {lista.map((elemento, index) => (
                    <li key={index}>
                        {elemento.nombre} {elemento.apellido}
                        <button class="btn btn-eliminar" onClick={() => eliminarUsuario(index)}>Eliminar</button>   
                        <button class="btn btn-editar ml-3" onClick={() => editarUsuario(index)}>Editar</button>

                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Formulario;
