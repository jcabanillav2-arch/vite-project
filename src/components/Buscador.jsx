function Buscador(props) {

    return (

        <div>

            <input
                type="text"
                placeholder="Buscar contacto por nombre..."
                value={props.buscar}
                onChange={function (e) {
                    props.setBuscar(e.target.value);
                }}
            />

        </div>

    );

}

export default Buscador;