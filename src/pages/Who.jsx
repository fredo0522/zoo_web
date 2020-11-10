import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class Who extends Component {
  render() {
    return (
      <div className="w-100 mt-4">
        <img
          src="https://www.realidad360.com/wp-content/uploads/2016/10/zoologico-destacada.png"
          className="img-fluid rounded mx-auto d-block mb-3 mt-5"
          alt="Zoo"
        />

        <div className="container mt-4">
          <div className="row row-cols-md-2 mt-2">
            <div className="col-sm mb-5">
              <h1> Quienes somos </h1>
              <p>
                Somos una organización ambiental que ofrece una experiencia única de contacto con la riqueza natural y cultural de Colombia, que promueve y ejecuta programas de educación, comunicación, recreación e investigación para la conservación de la biodiversidad colombiana.
            </p>
            </div>

            <div className="col-sm mb-5">
              <ReactPlayer
                className='img-thumbnail'
                url='https://www.youtube.com/watch?v=ByvDEnOTPKI&feature=emb_logo'
                controls={true}
              />
            </div>
          </div>
          <div className="row row-cols-md-2">
            <div className="col-sm mb-5">
              <img
                src="https://seecolombia.travel/blog/wp-content/uploads/2012/11/Travel-Cali9.jpg"
                className="img-thumbnail rounded"
                alt="People"
              />
            </div>
            <div className="col-sm mb-5">
              <h1>Historia</h1>
              <p>
                Es innegable que la región ha redescubierto al Zoológico de Cali como epicentro de conservación, que goza de credibilidad en virtud de su transparencia, honestidad y profesionalismo. Por más de una década ha ejercido un liderazgo en la comunidad zoológica nacional e internacional, promoviendo y acompañando el desarrollo de otras instituciones de su misma naturaleza, y participando activamente en la consolidación de una comunidad más comprometida con la conservación de la biodiversidad. El Zoológico de Cali ha crecido bajo una forma de organización con objetivos claros y compartidos, sustentada en principios y valores en el marco de un pensamiento estratégico que propone relatos innovadores en una institución que contribuye a crear escenarios de bienestar para las comunidades humanas y la vida silvestre. El Zoológico de Cali es una plataforma que promueve la construcción del compromiso ambiental.
            </p>
            </div>
          </div>
          <div className="text-center">
            <div className="row row-cols-md-2 mt-2">
              <div className="col-sm mb-5">
                <h1>Misión</h1>
                <p className="text-left">
                  Creamos experiencias inolvidables para contagiar nuestra pasión por la vida.
              </p>
              </div>
              <div className="col-sm mb-5">
                <h1>Valores</h1>
                <ul className="list-unstyled text-left">
                  <li>&#x2022; Conservamos la vida con pasión. </li>
                  <li>&#x2022; Todo lo que sabemos, lo sabemos entre todos.</li>
                  <li>&#x2022; Nos gusta la gente y nos importa su bienestar.</li>
                  <li>&#x2022; Aportamos nuestras capacidades y talentos sin reservas.</li>
                  <li>&#x2022; Innovamos con creatividad para dejar huella.</li>
                  <li>&#x2022; Actuamos como pensamos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Who;
