import React, { Component } from "react";

class ClasesVirtuales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coursePrice: 60000,
    };
  }

  render() {
    return (
      <div className="w-100 mt-4">
        <div className="img-container">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwlc2017.wpengine.com%2Fwp-content%2Fuploads%2F2017%2F02%2Fvirtual-learning-and-school-choice-inline-banner-2.jpg&f=1&nofb=1"
            alt="Clases Virtuales"
            className="img-fluid img-aux rounded mx-auto d-block mb-3 mt-5 w-100"
          />
          <div className="text-img-aux text-center text-wrap">
            Clases Virtuales
          </div>
        </div>
        <div className="container mt-4">
          <div className="row row-cols-md-2 mt-2">
            <div className="col-sm mb-5 pb-5">
              <h1>¡Aprende a ser un explorador!</h1>
              <p>
                Dirigido a niños, niñas y jóvenes, de 6 años en adelante, de
                todo Colombia.
                <br />
                <br />
                El curso virtual incluye:
              </p>
              <ul className="list-unstyled text-left">
                <li>
                  &#x2022; 26 experiencias audiovisuales con los aprendizajes
                  infaltables para convertirse en un explorador por naturaleza.
                </li>
                <li>
                  &#x2022; Certificado que te acredita como “Explorador por
                  naturaleza”.
                </li>
                <li>
                  &#x2022; Interacción en el chat del grupo privado de facebook
                  con los exploradores expertos.
                </li>
              </ul>
              <p>
                Desde el 17 de julio y cada semana se publicarán 3 experiencias
                audiovisuales, de 20 - 30 minutos de duración, los días lunes,
                miércoles y viernes a las 3:00 pm en el grupo privado de
                facebook donde sólo tendrán autorización de ingresar los
                exploradores inscritos.
              </p>
              <p>
                Si el explorador inscrito tiene más de 14 años podrá usar su
                propio perfil de facebook, si es menor de 14 deberá usar el
                perfil de facebook de alguno de sus padres. Las instrucciones
                para acceder al grupo les llegará a su correo una vez adquieran
                su cupo en el curso. Si el explorador inscrito tiene más de 14
                años podrá usar su propio perfil de facebook, si es menor de 14
                deberá usar el perfil de facebook de alguno de sus padres. Las
                instrucciones para acceder al grupo les llegará a su correo una
                vez adquieran su cupo en el curso.
              </p>
            </div>
            <div className="col-sm mb-5 pb-5">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-photo%2Fyoung-child-looking-through-binoculars_23-2147770405.jpg&f=1&nofb=1"
                alt="Explorar El mundo"
                className="img-fluid mx-auto d-block mb-3 mt-5 h-100"
              />
            </div>

            <div className="col-sm mb-5 pb-5">
              <h2 className="text-left text-wrap">
                Valor del curso: ${this.state.coursePrice}
              </h2>
            </div>
            <div className="col-sm mb-5 pb-5 text-center">
              <button type="submit" className="btn btn-success">
                ¡Inscribete ya!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ClasesVirtuales;
