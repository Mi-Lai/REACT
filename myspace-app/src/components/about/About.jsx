import "./components/about/About.css";


//crea una tarjeta
function Card(){
    const myInfo = {
        nombre: "Mi-Lai Yamamoto Joo",
        formacion: "Lic. en Actuaría // Maestría en Gestión de Riesgos Financieros // Ciencitifca de datos//   Desarrolladora Java Full Stack en proceso",
        email: "milai.yamamoto0.1@gmail.com",
        descripcion: " Mi formación en ciencias actuariales me dio las bases de programación y me incursionó al mundo TI, donde descubrí mi pasión por la ciencia de datos y el código",
    };
    return (
        <div className="cardPersonal">
            <img src="./malefica.jpg" width="200px" height="200px"></img>
            <h2>{myInfo.nombre}</h2>
            <h5>{myInfo.email}</h5>
            <h6>{myInfo.formacion}</h6>
            <p>{myInfo.descripcion}</p>
        </div>
    )
    
}

export default Card;