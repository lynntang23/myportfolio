import './About.css'
import winnie from "../images/winnie.jpg"
import purpledog from "../images/purpledog.jpg"

export default function About (){
        return (
            <>
            <div class="flexbox-container">

                <img src={winnie} alt="React Image" id = "winnie"/>
                <div id="aboutname">welcome! here's a short about-me intro. i want to do law after undergrad and my favorite class last semester was my fyww class. i have a younger sister named winnie (she's the head in the astronaut cutout). i love love dogs; my favorite breeds are golden retrievers and dachsunds. i love my fans i have like 4.  </div>
                <img src={purpledog} alt="React Image" id = "purpledog"/>
            </div>
            
            </>
        
        ) 
        }