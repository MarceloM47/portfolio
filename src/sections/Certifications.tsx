import { BsFillClipboard2Fill } from 'react-icons/bs';
import CertificateSlider from '../CertificateSlider';
import certificado1 from '../assets/certifications/desarrollo web profesional.png';
import certificado2 from '../assets/certifications/frontend-practico.png';
import certificado3 from '../assets/certifications/accesibilidad_web.png';
import certificado4 from '../assets/certifications/typescript-profesional.png';
import certificado5 from '../assets/certifications/css a fondo.png';
import certificado6 from '../assets/certifications/javascript y el dom.png';
import certificado7 from '../assets/certifications/algoritmos.png';
import certificado8 from '../assets/certifications/EDL.png';
import certificado9 from '../assets/certifications/Linux Cisco.png';
import certificado10 from '../assets/certifications/aguarandu2022.png';
import certificado11 from '../assets/certifications/economia digital.png';
import certificado12 from '../assets/certifications/github a fondo.png';
import certificado13 from '../assets/certifications/jekupyty domotica.png';
import certificado14 from '../assets/certifications/open robotics.png';
import certificado15 from '../assets/certifications/python profesional.png';
import certificado16 from '../assets/certifications/react-profesional.png';
import certificado17 from '../assets/certifications/redes.png';
import certificado18 from '../assets/certifications/ror.png';
import certificado19 from '../assets/certifications/rorDiploma.png';

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
                  certificado17,
                  certificado18,
                  certificado19,];

  return (
    <div className="certifications-container">
      <div className="index">
        <p><BsFillClipboard2Fill/>Certifications</p>
      </div>
      <p className='skills_title'>My <span>Certifications</span></p>
      <CertificateSlider images={images}/>
    </div>
  )
}

export default Certifications;