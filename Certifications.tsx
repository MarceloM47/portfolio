import { BsFillClipboard2Fill } from 'react-icons/bs';
import CertificateSlider from '../components/CertificateSlider';
import certificado1 from '/images/certifications/tecnico_informatica.png';
import certificado2 from '/images/certifications/frontend-practico.png';
import certificado3 from '/images/certifications/MSA.png';
import certificado4 from '/images/certifications/css a fondo.png';
import certificado5 from '/images/certifications/javascript y el dom.png';
import certificado6 from '/images/certifications/EDL.png';
import certificado7 from '/images/certifications/Linux Cisco.png';
import certificado8 from '/images/certifications/open robotics.png';
import certificado9 from '/images/certifications/python profesional.png';
import certificado10 from '/images/certifications/react-profesional.png';
import certificado11 from '/images/certifications/redes.png';
import certificado12 from '/images/certifications/ror.png';
import certificado13 from '/images/certifications/rorDiploma.png';
import certificado14 from '/images/certifications/desarrollo web profesional.png';
import certificado15 from '/images/certifications/bootcamp-rails.png';
import certificado16 from '/images/certifications/monitor_suena_san_juan.png';
import certificado17 from '/images/certifications/universidad-angular.png';

function Certifications() {
  const images = [certificado1, 
                  certificado2, 
                  certificado3, 
                  certificado4,
                  certificado5,
                  certificado6, 
                  certificado7, 
                  certificado8,
                  certificado9, 
                  certificado10, 
                  certificado11,
                  certificado12, 
                  certificado13, 
                  certificado14,
                  certificado15, 
                  certificado16,
                  certificado17];

  return (
    <section className="certifications-container">
      <div className="index">
        <p><BsFillClipboard2Fill/>Certifications</p>
      </div>
      <p className='title_section'>My <span>Certifications</span></p>
      <CertificateSlider images={images}/>
    </section>
  )
}

export default Certifications;