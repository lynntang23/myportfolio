import insta from "./images/instagram.png"
import linkedin from "./images/linkedin.png"
import spotify from "./images/spotify.png"

import './Footer.css'
function FooterBar(){
    return(
        <>
        <foot>
            <footer className="footer">
                <div class="flex">
                <a href="https://www.instagram.com/lynntang2005?igsh=a3NjZnEybnQ5eHVp&utm_source=qr" target="_blank">
                      <img src={insta} alt="instagram" width="100" height="100"/>
                </a>
                <a href="www.linkedin.com/in/lynn-tang-98a972224" target="_blank">
                      <img src={linkedin} alt="linkedin" width="100" height="100"/>
                </a>

                <a href="https://open.spotify.com/user/r0mw4cpfuagwe487fbi4ku3pl?si=03c18087fd324619" target="_blank">
                      <img src={spotify} alt="spotify" width="100" height="100"/>
                </a> 
                </div>
            </footer>
        </foot>
        </>
    )
}

export default FooterBar