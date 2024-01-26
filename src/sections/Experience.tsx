import { BsHourglassSplit } from "react-icons/bs"

function Experience() {
  return (
    <section className="home-container">
        <div className="index">
            <p><BsHourglassSplit/>Experience</p>
        </div>
        <p className='title_section'>My <span>Experience</span></p>
        <div className="exps-container">
            <div className="exp-container">
                <small>Pasantía</small>
                <p className="enterprise-name">Business Software Solutions</p>
                <p className="area-name">Área de soporte</p>
                <p>diciembre de 2022 - enero de 2023 (2 meses)</p>
                <small>Caaguazú, Paraguay</small>
            </div>
            <div className="exp-container">
                <small>Pasantía</small>
                <p className="enterprise-name">Entidad Binacional Yacyretá</p>
                <p className="area-name">Área de comunicaciones</p>
                <p>julio de 2023 - agosto de 2023 (2 meses)</p>
                <small>Ayolas, Paraguay</small>
            </div>
        </div>
    </section>
  )
}

export default Experience