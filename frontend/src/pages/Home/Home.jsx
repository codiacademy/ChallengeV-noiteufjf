import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";
import Cardtestimony from "../../components/Cardtestimony/Cardtestimony";
import ContactForm from "../../components/Form/ContactForm";
import clientenota from "../../img/clientenota.png";
import ServicesCard from "../../components/ServicesCards/ServicesCards";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Globe, Copy, Smartphone } from "lucide-react";
import LogoMagic from "../../img/LogoMagic.png";
import Awards from "../../components/Awards/Awards";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };
  return (
    <>
      {/* Hero */}
      <section id="hero-section" className="home-section">
        <div className="imagem1">
          <img src={LogoMagic}></img>
        </div>
        <div className="titulos">
          <h1 id="hero-title">
            Transforme sua <br /> empresa com a
          </h1>
          <h2 id="hero-title2">Codi Magic</h2>
        </div>

        <p className="paragrafohero">
          <br />
          Soluções de software personalizadas <br /> para impulsionar o seu
          negócio.
        </p>

        <br />
        <button>
          <a href="#services-section" className="link-button">
            Saiba mais
          </a>
        </button>
      </section>

      {/* Nossos serviços */}
      <section id="services-section" className="home-section">
        <h1 className="title">Nossos serviços</h1>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: -80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          initialSlide={1}
          modules={[EffectCoverflow, Pagination]}
          className="swiper-services"
        >
          <SwiperSlide>
            <ServicesCard
              icon={<Copy size={50} />}
              title={"Templates"}
              paragraph={"Sites e aplicativos pré-prontos customizados."}
              iconBackground={"#FE0101"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesCard
              icon={<Globe size={50} />}
              title={"Desenvolvimento de Software"}
              paragraph={
                "Soluções personalizadas para pequenas e médias empresas."
              }
              iconBackground={"#FFC400"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ServicesCard
              icon={<Smartphone size={50} />}
              title={"Aplicativos Móveis"}
              paragraph={
                "Aplicativos móveis intuitivos e de alta performance para iOS e Android."
              }
              iconBackground={"#2A60FF"}
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Sobre nós */}
      <section id="about-section" className="home-section">
        <h1 className="title">Sobre nós</h1>
        <AboutUs />
      </section>

      {/* Reconhecimento */}
      <section id="recognition-section" className="home-section">
        <h1 className="title">Reconhecimento</h1>
        <Awards />
      </section>

      {/* O que nossos clientes dizem */}
      <section id="testimony-section" className="home-section">
        <h1 id="testimony-title" className="title">
          O que nossos clientes dizem
        </h1>
        {isDesktop ? (
          <div id="desktop-cardstestimony">
            <Cardtestimony />
            <Cardtestimony />
            <Cardtestimony />
          </div>
        ) : (
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cardtestimony />
            </SwiperSlide>
            <SwiperSlide>
              <Cardtestimony />
            </SwiperSlide>
            <SwiperSlide>
              <Cardtestimony />
            </SwiperSlide>
          </Swiper>
        )}
        <img src={clientenota} alt="Avatar de Avaliadores" />
      </section>

      {/* Entre em contato */}
      <section id="contact-section" className="home-section">
        <h1 className="title">Entre em Contato</h1>
        <div className="contentContact">
          <div className="formCenter">
            <ContactForm notify={notify} />
            <ToastContainer />
          </div>
        </div>
      </section>
    </>
  );
}
