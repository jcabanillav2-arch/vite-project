function Contacto({ contacto, editar, eliminar }) {

    return (

        <div className="contacto">

            <h3>{contacto.nombre}</h3>

            <p>
                <strong>Correo:</strong> {contacto.correo}
            </p>

            <p>
                <strong>Teléfono:</strong> {contacto.telefono}
            </p>

            <button onClick={function () {
                editar(contacto);
            }}>
                Editar
            </button>

            <button
                onClick={function () {
                    eliminar(contacto.id);
                }}
            >
                Eliminar
            </button>

            <hr />

        </div>

    );

}

export default Contacto;