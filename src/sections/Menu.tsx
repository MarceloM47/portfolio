function Menu() {

  return (
    <aside className="menu-container">
        <div className="menu-container-child">
            <h2 className='nombre'>MARCELO MORINIGO</h2>
        <img src="marcelo.jpg" alt="/public/marcelo.jpg" />
        <h2 className="frontend-dev"><span>FULL STACK</span> DEVELOPER</h2>
        <p>Técnico en informática, centrado en el desarrollo web de aplicaciones eficientes y escalables.</p>

        <div className="btncv-container">
            <a href="/documents/Marcelo Morinigo curriculum.pdf" download={true} className="btncv">
                Download CV
            </a>
        </div>
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
    </aside>
  )
}

export default Menu;
