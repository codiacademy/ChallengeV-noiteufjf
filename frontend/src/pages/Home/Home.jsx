import Cardtestimony from '../../components/Cardtestimony/Cardtestimony'
import ContactForm from '../../components/Form/ContactForm'

import './home.css'

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
                <h1 className='title'>Nossos serviços</h1>
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
                <div><Cardtestimony/>
                <Cardtestimony/>
                <Cardtestimony/></div>
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