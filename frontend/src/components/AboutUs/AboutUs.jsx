import magic from "../../img/Logoquadrada.png";
import "./aboutus.css";

export default function AboutUs() {
  return (
    <div id="about-us-component">
      <div id="img-desktop">
        <img src={magic} alt="Magic" />
      </div>
      <article>
        <h2>
          Estúdio de criação de <br /> software da Codi <br /> Academy
        </h2>
        <img src={magic} alt="" id="img-mobile" />
        <p>
          O estúdio Magic é uma das soluções B2B oferecidas pela Codi Academy.
          Desenvolvemos tecnologia de ponta de forma rápida e com preços
          acessíveis, com garantia total e entrega no prazo. O Codi Magic também
          trabalha com a manutenção dos produtos após a entrega, você terá total
          assistência para utilizar e manter sua plataforma funcionando.
        </p>
      </article>
    </div>
  );
}
