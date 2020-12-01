import React, { Component } from "react";
import HomeImage from "../images/jungle-image.jpg";
import Map from "../components/Map";
import News from "../components/News";

class Home extends Component {
  render() {
    return (
      <div className="w-100 mt-4">
        <div className="img-container">
          <img
            src={HomeImage}
            className="img-fluid rounded mx-auto d-block mb-3 mt-5 w-100"
            alt="Zoo Home page"
          />

          <div className="text-img text-center text-wrap">
            Bienvenidos al Zoologico de Cali
          </div>
        </div>

        <div className="container mt-4">
          <div className="row row-cols-md-2 mt-2">
            <div className="col-sm mb-5">
              <h1>Más que una Jaula</h1>
              <ul className="list-unstyled text-left">
                <li className="blockquote">
                  &#x2022; Muchos de los animales que viven en los zoológicos
                  han sido rescatados de los circos en los que los maltrataban o
                  han sido rescatados por las consecuencias del cambio climático
                  en su hábitat.
                </li>
                <li className="blockquote">
                  &#x2022; Gracias al cuidado del personal experto en dichas
                  especies, los animales pueden reproducirse en cautiverio,
                  garantizando el desarrollo pleno del animal, cosa que no
                  podría garantizarse en un entorno natural.
                </li>
                <li className="blockquote">
                  &#x2022; La calidad de muchas de las instalaciones de los
                  zoológicos hacen que los animales puedan tener mayor garantía
                  de vida, realizando ejercicios rutinarios y comiendo las veces
                  necesarias, lo cual no se podría asegurar en la propia
                  naturaleza.
                </li>
              </ul>
            </div>
            <div className="col-sm mb-5">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.zooborns.com%2F.a%2F6a010535647bf3970b01b8d087df7f970c-800wi&f=1&nofb=1"
                className="img-thumbnail rounded"
                alt="Happy animal"
              />
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h1 className="text-center">Noticias Relevantes</h1>
            <News />
          </div>
          <Map />
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
