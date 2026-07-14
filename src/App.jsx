import { useState } from "react";
import Buscador from "./components/Buscador";
import FormularioContacto from "./components/FormularioContacto";
import ListaContactos from "./components/ListaContactos";
import "./App.css";

function App() {

    const [contactos, setContactos] = useState([]);

    const [buscar, setBuscar] = useState("");

    const [contactoEditar, setContactoEditar] = useState(null);

    
    function guardarContacto(contacto) {

        if (contactoEditar == null) {

            contacto.id = Date.now();

            setContactos([...contactos, contacto]);

        } else {

            let nuevaLista = [];

            for (let i = 0; i < contactos.length; i++) {

                if (contactos[i].id === contacto.id) {

                    nuevaLista.push(contacto);

                } else {

                    nuevaLista.push(contactos[i]);

                }

            }

            setContactos(nuevaLista);

            setContactoEditar(null);
        }
    }

    
    function eliminarContacto(id) {

        let respuesta = window.confirm("¿Desea eliminar este contacto?");

        if (respuesta) {

            let nuevaLista = contactos.filter(function (contacto) {
                return contacto.id !== id;
            });

            setContactos(nuevaLista);

        }

    }

    
    let contactosFiltrados = contactos.filter(function (contacto) {

        return contacto.nombre.toLowerCase().includes(buscar.toLowerCase());

    });

    return (

        <div className="contenedor">

            <h1>Agenda de Contactos</h1>

            <Buscador
                buscar={buscar}
                setBuscar={setBuscar}
            />

            <FormularioContacto
                guardarContacto={guardarContacto}
                contactoEditar={contactoEditar}
            />

            <ListaContactos
                contactos={contactosFiltrados}
                editar={setContactoEditar}
                eliminar={eliminarContacto}
            />

        </div>

    );

}

export default App;