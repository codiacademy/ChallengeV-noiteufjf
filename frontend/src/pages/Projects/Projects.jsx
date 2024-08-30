import embrapa from '../../img/embrapa.png'
import zencheck from '../../img/zencheck.png'
import aleatorio from '../../img/aleatorio.png'

import "./projects.css";
export default function Projects() {
  return (
    <section className="container">
      <div>
        <h1 className="page-title">Conheça nossos projetos</h1>
        <h2></h2>
      </div>

      <div className="wrapper">
        <section className="conteudo">
          <div className="photo">
            <img
              src={zencheck}
              alt="zencheck"
            />
          </div>
          <div className="container-text">
            <h3>Zencheck</h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              egestas pretium nisi ac facilisis. Cras eget elementum tortor.
              Suspendisse bibendum tellus at sagittis convallis. Phasellus
              dictum ligula vitae augue placerat, vel suscipit felis auctor.
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              egestas pretium nisi ac facilisis. Cras eget elementum tortor.
              Suspendisse bibendum tellus at sagittis convallis. Phasellus
              dictum ligula vitae augue placerat, vel suscipit felis auctor.
            </p>
          </div>
        </section>

        <section className="conteudo">
          <div className="container-text">
            <h3>Embrapa</h3>
            <p className="text">
              A Empresa Brasileira de Pesquisa Agropecuária Embrapa é uma
              instituição pública de pesquisa vinculada ao Ministério da
              Agricultura, Pecuária e Abastecimento do Brasil. Fundada em 1973,
              a Embrapa tem como missão desenvolver soluções de pesquisa,
              inovação e tecnologia para o setor agropecuário brasileiro,
              visando aumentar a produtividade, a sustentabilidade e a
              competitividade desse setor.
            </p>

            <p className="text">
              Em dezembro de 2023, a Codi Academy venceu uma licitação para a
              construção de um sistema de gestão de produtividade para
              produtores rurais, o software será entregue em até 12 meses.
            </p>
          </div>
          <div className="photo">
            <img
              src={embrapa}
              alt="embrapa"
            />
          </div>
        </section>

        <section className="conteudo">
          <div className="photo">
            <img
              src={aleatorio}
              alt="aleatorio"
            />
          </div>
          <div className="container-text">
            <h3>Aleatorio</h3>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              egestas pretium nisi ac facilisis. Cras eget elementum tortor.
              Suspendisse bibendum tellus at sagittis convallis. Phasellus
              dictum ligula vitae augue placerat, vel suscipit felis auctor.
            </p>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              egestas pretium nisi ac facilisis. Cras eget elementum tortor.
              Suspendisse bibendum tellus at sagittis convallis. Phasellus
              dictum ligula vitae augue placerat, vel suscipit felis auctor.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}