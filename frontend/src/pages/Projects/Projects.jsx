import embrapa from '../../img/embrapa.png'
import zencheck from '../../img/zencheck.png'
import aleatorio from '../../img/aleatorio.png'
import './projects.css'
export default function Projects() {
    return (
        <section className='container'>
            <div>
                <h1>Projetos</h1>
                <h2>conheça nossos projetos</h2>
            </div>
            <section className='conteudo'>
                <div>
                    <h3>Zencheck</h3>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas pretium nisi ac facilisis. Cras eget elementum tortor. Suspendisse bibendum tellus at sagittis convallis. Phasellus dictum ligula vitae augue placerat, vel suscipit felis auctor.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas pretium nisi ac facilisis. Cras eget elementum tortor. Suspendisse bibendum tellus at sagittis convallis. Phasellus dictum ligula vitae augue placerat, vel suscipit felis auctor.</p></div>
                <div className='photo'><img src={zencheck} /></div>
            </section>

            <section className='conteudo'>
                <div>
                    <h3>Embrapa</h3>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas pretium nisi ac facilisis. Cras eget elementum tortor. Suspendisse bibendum tellus at sagittis convallis. Phasellus dictum ligula vitae augue placerat, vel suscipit felis auctor.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas pretium nisi ac facilisis. Cras eget elementum tortor. Suspendisse bibendum tellus at sagittis convallis. Phasellus dictum ligula vitae augue placerat, vel suscipit felis auctor.</p>
                </div>
                <div className='photo'><img src={embrapa} /></div>
            </section>

            <section className='conteudo'>
                <div>
                    <h3>Aleatorio</h3>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas pretium nisi ac facilisis. Cras eget elementum tortor. Suspendisse bibendum tellus at sagittis convallis. Phasellus dictum ligula vitae augue placerat, vel suscipit felis auctor.</p>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus egestas pretium nisi ac facilisis. Cras eget elementum tortor. Suspendisse bibendum tellus at sagittis convallis. Phasellus dictum ligula vitae augue placerat, vel suscipit felis auctor.</p>
                </div>
                <div className='photo'><img src={aleatorio} /></div>
            </section>

        </section>
    )
}