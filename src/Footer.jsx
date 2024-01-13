import insta from "./images/instagram.png"
import linkedin from "./images/linkedin.png"
import spotify from "./images/spotify.png"

import './Footer.css'
function Footer(){
    return(
        <>
        <foot>
            <footer className="footer">
                <div class="flex">
                <a href="https://www.instagram.com/lynntang2005?igsh=a3NjZnEybnQ5eHVp&utm_source=qr" target="_blank">
                      <img src={instagram} alt="instagram" width="31" height="31"/>
                </a>
                <a href="www.linkedin.com/in/lynn-tang-98a972224" target="_blank">
                      <img src={linkedin} alt="linkedin" width="35" height="35"/>
                </a>

                <a href="https://open.spotify.com/user/r0mw4cpfuagwe487fbi4ku3pl?si=03c18087fd324619" target="_blank">
                      <img src={spotify} alt="spotify" width="35" height="35"/>
                </a> 
                </div>
            </footer>
        </foot>
        </>
    )
}

export default Footer