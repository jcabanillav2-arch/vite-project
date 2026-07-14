import { useState, useEffect } from "react";

function FormularioContacto({ guardarContacto, contactoEditar }) {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");

    // Cuando se presione Editar, llenar el formulario
    useEffect(() => {

        if (contactoEditar != null) {

            setNombre(contactoEditar.nombre);
            setCorreo(contactoEditar.correo);
            setTelefono(contactoEditar.telefono);

        }

    }, [contactoEditar]);

    function guardar() {

        if (nombre === "" || correo === "" || telefono === "") {
            setError("Todos los campos son obligatorios.");
            return;
        }

        let expresion = /\S+@\S+\.\S+/;

        if (!expresion.test(correo)) {
            setError("Correo no válido.");
            return;
        }

        if (!/^[0-9]+$/.test(telefono)) {
            setError("El teléfono solo debe contener números.");
            return;
        }

        setError("");

        let contacto = {
            id: contactoEditar ? contactoEditar.id : 0,
            nombre: nombre,
            correo: correo,
            telefono: telefono
        };

        guardarContacto(contacto);

        // Limpiar formulario
        setNombre("");
        setCorreo("");
        setTelefono("");

        setError("");
    }

    return (

        <div>

            <h3>Datos del contacto</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />

            <br /><br />

            <button onClick={guardar}>
                {contactoEditar ? "Actualizar" : "Guardar"}
            </button>

            <hr />

        </div>

    );

}

export default FormularioContacto;