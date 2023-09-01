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
                <h4>Business Software Solutions</h4>
                <h5>Área de soporte</h5>
                <p>diciembre de 2022 - enero de 2023 (2 meses)</p>
                <small>Caaguazú, Paraguay</small>
            </div>
            <div className="exp-container">
                <small>Pasantía</small>
                <h4>Entidad Binacional Yacyreta</h4>
                <h5>Área de comunicaciones</h5>
                <p>julio de 2023 - agosto de 2023 (2 meses)</p>
                <small>Ayolas, Paraguay</small>
            </div>
        </div>
    </section>
  )
}

export default Experience