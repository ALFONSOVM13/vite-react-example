import React from 'react';

const Listas = () => {
    const array = ["Acción", "Humor", "Drama", "Terror"];
    const objetos = [
        {id:1, nombre:"Juana", Apellido:"Perez"},
        {id:2, nombre:"Diana", Apellido:"Muñoz"},
        {id:3, nombre:"Luis", Apellido:"Fontalvo"},
        {id:4, nombre:"Juan", Apellido:"Perez"}
    ];

    const [lista, setLista] = React.useState(array);
    const [listaObj, setListaObj] = React.useState(objetos);
    const [nuevoNombre, setNuevoNombre] = React.useState("");
    const [nuevoApellido, setNuevoApellido] = React.useState("");
    const [nuevoElemento, setNuevoElemento] = React.useState("");

    const agregar = (e) => {
        e.preventDefault();
        if (!nuevoNombre.trim()) {
            alert("El nombre no puede estar vacío.");
            return;
        }
        if (!nuevoApellido.trim()) {
            alert("El apellido no puede estar vacío.");
            return;
        }
        setListaObj([
            ...listaObj,
            {
                id: listaObj.length + 1,
                nombre: nuevoNombre,
                Apellido: nuevoApellido
            }
        ]);
        setNuevoNombre("");
        setNuevoApellido("");
    };

    return (
        <div>
            <h2>Listas</h2>
            <h3>Listas Desordenadas</h3>
            <ul>
                {lista.map((elemento, index) => (
                    <li key={index}>{elemento}</li>
                ))}
            </ul>
            <button onClick={() => {
                if (!nuevoElemento.trim()) {
                    alert("El elemento no puede estar vacío.");
                    return;
                }
                setLista([...lista, nuevoElemento]);
                setNuevoElemento("");
            }}>
                
                Agregar
            </button>
            <label>
                Nuevo elemento:
                <input
                    type="text"
                    value={nuevoElemento}
                    onChange={(e) => setNuevoElemento(e.target.value)}
                />
            </label>
            
            <h3>Listas Ordenadas</h3>
            <form onSubmit={agregar}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                    />
                </label>
                <label>
                    Apellido:
                    <input
                        type="text"
                        value={nuevoApellido}
                        onChange={(e) => setNuevoApellido(e.target.value)}
                    />
                </label>
                <button type="submit">Agregar persona</button>
            </form>

            <ol>
                {listaObj.map((elemento) => (
                    <li key={elemento.id}>
                        {elemento.nombre} {elemento.Apellido}
                    </li>
                ))}
            </ol>

        </div>
    );
};

export default Listas;

