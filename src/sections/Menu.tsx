import ScrollReveal from 'scrollreveal'

function Menu() {
    ScrollReveal().reveal('.menu-container', { delay: 200 });

  return (
    <div className="menu-container">
        <h2 className='nombre'>MARCELO MORINIGO</h2>
        <img src="marcelo.jpg" alt="/public/marcelo.jpg" />
        <h2 className="frontend-dev"><span>FRONTEND</span> DEVELOPER</h2>
        <p>Mi nombre es Marcelo Morinigo, Soy Programador web y estoy en el último año del Bachillerato técnico en informática; me apasiona la programación y el mundo de la informática.</p>
        <div className="redes">
            <div className="red">
                <a href="https://github.com/marcelom47" target='_blank'><img src="/svg/github.svg" alt="github" /></a>
            </div>
            <div className="red">
                <a href="https://www.linkedin.com/in/marcelo-morinigo-74808b213/" target='_blank'><img src="/svg/linkedin.svg" alt="linkedin" /></a>
            </div>
            <div className="red">
                <a href="mailto:morinigomarcelo40@gmail.com"><img src="/svg/mail.svg" alt="email" /></a>
            </div>
        </div>
    </div>
  )
}

export default Menu;