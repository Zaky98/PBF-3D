import React from 'react';
import foto from './img/foto.jpg';

const About = () => {
    return <center><img src={foto} alt="Foto" width="250" height="280" class="rotate90" />
    <table class="tg">
        <tr>
            <td class="tg-hmp3"><b>NAMA &nbsp;: </b></td>
            <td class="tg-hmp3">Zaky Maula Luthfansa</td>
        </tr>
        <tr>
            <td class="tg-0lax"><b>NIM &nbsp;&nbsp;&nbsp;&nbsp; : </b></td>
            <td class="tg-0lax">1741720014</td>
        </tr>
        <tr>
            <td class="tg-hmp3"><b>ABSEN : </b></td>
            <td class="tg-hmp3">28</td>
        </tr>
        <tr>
            <td class="tg-0lax"><b>KELAS : </b></td>
            <td class="tg-0lax">TI-3D</td>
        </tr>
    </table></center>
    
}

export default About;