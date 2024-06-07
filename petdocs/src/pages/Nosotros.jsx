import "./css/Nosotros.css";

const Nosotros = () => {
  return (
    <div className="container">
      <h1 className="title">Bienvenidos a PetDocs</h1>
      <p>
        La idea de crear esta web nació de nuestra propia experiencia como
        dueños de mascotas. Sabemos lo frustrante que puede ser no tener a mano
        los registros médicos importantes cuando más los necesitas. Por eso,
        decidimos crear <span className="cursiva">PetDocs</span>: una herramienta que pretende hacerle la vida
        más fácil a otros amantes de los animales como nosotros.
      </p>
      <p>
        En <span className="cursiva">PetDocs</span>, nos dedicamos a proporcionar un lugar seguro y accesible
        para almacenar el historial médico de tus mascotas. Creemos que un
        historial médico completo es esencial para la salud y la felicidad de
        nuestros amigos peludos.
      </p>
      <p>
        Nuestro <span className="negrita">objetivo</span> es ayudarte a mantener toda esta información organizada
        y siempre disponible, para que puedas centrarte en disfrutar cada
        momento con tu mascota. Organiza y guarda sus radiografías, ecografías,
        analíticas, vacunaciones y todo tipo de información que necesites a mano
        cuando tengas que salir de viaje o cambiarte de ciudad.
      </p>
      <p><span className="cursiva">"Donde cada ladrido y ronroneo tiene su historia"</span></p>
    </div>
  );
};

export default Nosotros;