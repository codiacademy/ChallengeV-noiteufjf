import { useState, useEffect } from "react"
import ContactForm from '../../components/Form/ContactForm'

import './home.css'
import ServicesCard from '../../components/ServicesCard/ServicesCard';
import { Globe, Smartphone, Copy } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Home() {
    return (
        <>
            {/* Hero */}
            <section id="hero-section" className='home-section'>
                <h1 className='title'>Home</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis suscipit iusto repellat, ipsam aut minima debitis
                    quibusdam sapiente vitae sequi voluptas velit amet illum animi
                    tenetur minus ex maxime odit ratione, facere repudiandae labore.
                    Dolorum quis tempore eaque assumenda nesciunt quidem quo excepturi
                    a odio doloribus, eum, sapiente veniam enim dolorem cum at voluptatum,
                    iusto eius. Aut vitae fugit ipsa atque quaerat assumenda quidem laborum
                    dolorum enim nostrum nemo voluptatem quia, obcaecati iusto ab ea mollitia
                    numquam laudantium veritatis error harum. Cupiditate officia perspiciatis
                    consectetur debitis nemo placeat iusto aut recusandae delectus, a omnis
                    nisi at tempore autem optio in vero accusantium non voluptatem et ducimus
                    numquam officiis! Nemo, odit! Quo, aperiam perferendis aliquam
                    dignissimos enim veniam vero facere. Perspiciatis voluptates
                    necessitatibus fugiat perferendis maiores, nesciunt qui
                    debitis tempore possimus harum laborum minus placeat
                    doloremque deserunt, corporis enim dolorem. Sequi facere eum
                     aut doloremque dolores officia quod quaerat earum libero
                     rem commodi sed distinctio quidem quo quam illo est, fugit
                     rerum? Dolorem eius fuga iste expedita modi iure, aperiam,
                     velit amet ab facere, est voluptatem eveniet illo accusamus
                     tenetur veritatis facilis quae repellendus minus excepturi
                     reiciendis consequatur dolor tempora architecto. Ratione non
                     quas delectus veritatis itaque harum asperiores, magni pariatur!
                </p>
            </section>

            {/* Nossos serviços */}
            <section id="services-section" className='home-section'>
                <h1 className='title' id="services-title">Nossos serviços</h1>
                {/*<div id="services-cards">
    
    </div>*/}
                <Swiper 
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiper-services"
                >
                    <SwiperSlide>
                        <ServicesCard icon={<Copy size={50} />} title={"Templates"} paragraph={"Sites e aplicativos pré-prontos customizados."} iconBackground={"#FE0101"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard icon={<Globe size={50} />} title={"Desenvolvimento de Software"} paragraph={"Soluções personalizadas para pequenas e médias empresas."} iconBackground={"#FFC400"} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesCard icon={<Smartphone size={50} />} title={"Aplicativos Móveis"} paragraph={"Aplicativos móveis intuitivos e de alta performance para iOS e Android."} iconBackground={"#2A60FF"} />
                    </SwiperSlide>
                </Swiper>

            </section>

            {/* Sobre nós */}
            <section id="about-section" className='home-section'>
                <h1 className='title'>Sobre nós</h1>
            </section>

            {/* Reconhecimento */}
            <section id="recognition-section" className='home-section'>
                <h1 className='title'>Reconhecimento</h1>
            </section>

            {/* O que nossos clientes dizem */}
            <section id="testimony-section" className='home-section'>
                <h1 className='title'>Clientes dizem</h1>
            </section>

            {/* Entre em contato */}
            <section id="contact-section" className='home-section'>
                <h1 className='title'>Entre em Contato</h1>
                <div className="contentContact">
                    <div className="formCenter">
                        <ContactForm></ContactForm>
                    </div>

                </div>

            </section>
        </>
    )
}