import Contacto from "./Contacto";

function ListaContactos({ contactos, editar, eliminar }) {

    if (contactos.length === 0) {
        return <p>No hay contactos registrados.</p>;
    }

    return (

        <div>

            <h2>Lista de Contactos</h2>

            {
                contactos.map(function(contacto){

                    return(

                        <Contacto
                            key={contacto.id}
                            contacto={contacto}
                            editar={editar}
                            eliminar={eliminar}
                        />

                    );

                })
            }

        </div>

    );

}

export default ListaContactos;