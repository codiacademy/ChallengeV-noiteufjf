import { Link } from 'react-router-dom'
import { Facebook, Home, Instagram, Phone, Twitter, Youtube } from 'lucide-react'
import './footer.css'
export default function Footer() {
    return (
        <footer>

            <section id='footer-menu'>
                <h2>Menu</h2>
                <div >
                    <Link to='/' className='links' >Home</Link>
                </div>
                <div >
                    <Link to='/projects' className='links'  >Projetos</Link>
                </div>
                <div >
                    <Link to='/Home#contact-section' className='links'>Contato</Link>
                </div>
                <div >
                    <Link to='/team' className='links'>Equipe</Link>
                </div>
            </section>

            <section id='footer-social-media'><h2>Redes</h2>
                <div  >
                    <Instagram />
                    <Link to='/' className='links' >Instagram</Link>
                </div>
                <div >
                    <Twitter />
                    <Link to='/' className='links'>Twitter</Link>
                </div>
                <div  >
                    <Youtube />
                    <Link to='/' className='links'>Youtube</Link>
                </div>
                <div  >
                    <Facebook />
                    <Link to='/' className='links'>Facebook</Link>
                </div>

            </section>

            <section id='footer-fale-conosco'>

                <h2>Fale Conosco</h2>
                <div><p><Home />   CRITT - Centro Regional de Inovação e Transferência de Tecnologia. 
                Campus Universitário, s/n - martelos. 
                Juiz de Fora. MG.</p>
                    <p><Phone />   (32)991146046
                        (Suporte)suporte@magic.com</p>
                </div>


            </section>

        </footer>
    )
}